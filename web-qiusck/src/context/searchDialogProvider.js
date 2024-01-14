import React from "react";
import './search.css'
import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import { useState, createContext, useContext } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import TextField from "@mui/material/TextField";
import { RadiusButton } from "../components/RadiusButton/radiusButton";
import { DatePicker } from "jalaali-react-date-picker";
import "jalaali-react-date-picker/lib/styles/index.css";
import { useNotification } from './NotificationProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { searchByNameAndFamily } from '../api/searchShahid';
import { useNavigate } from "react-router-dom";

import Input from "../components/Input/input";

const searchContext = createContext();
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function SearchProvider({ children }) {
  const navigate = useNavigate();
  const notify = () => toast.error('حداقل یکی از موارد نام و نام خانوادگی را پر کنید', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });

  const [openSearch, setOpenSearch] = useState(false);
  const [name, setName] = useState("");
  const [family, setFamily] = useState("");
  const [birthDate,setBirthDate]=useState('');
  let dataList = [];

  const changeNameHandler = (e) => {
    setName(e.target.value)
    console.log('nameee------>', name)
  }
  const changeFamilyHandler=(e)=>{
    setFamily(e.target.value)
    console.log(family);
  }


  const openSearchDialogMethod = () => {
    setOpenSearch(true);
  };
  const clearform=()=>{
    setName('');
    setFamily('');
    setBirthDate('');
  }


  const closeNotification = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSearch(false);
  };
  const closeSearchDialog = () => {
    setOpenSearch(false);
  };
  const fetchAndSetData = async (name,family) => {
    console.log("fuck you");
    const result = await searchByNameAndFamily(name, family);
    console.log("ress----->", result.data.searchedShahid);
    if (result.data !== null) {
      console.log("res----------یسشیشسی->", result);
      dataList.push(result.data.searchedShahid);
      console.log("dataList------->", dataList);
      notify()
      // console.log(searchList);
    } else {
      notify()
      // openNotification("متن جایگزین نباید خالی باشد", "error");
    }
  };
  const birthdayDateChange = (unix, formatted) => {
    console.log('birthday datepicker------->',formatted,unix);
  
  };
  const clickSaearchByNameAndFamilyHandler = async () => {
    if (name == '' &&  family == '') {
      console.log(name, family)
      toast.error('حداقل یکی از موارد نام و نام خانوادگی را پر کنید', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      

    } else {
      clearform()
      console.log(name,family)
      await fetchAndSetData(name, family);
      // console.log("shahid sented there", searchList);
      if(dataList.length >0){
        setOpenSearch(false)
        navigate("/ShohadaSearch", { state: { dataList } });

      }else{
        notify()
      }

    }

  }

  return (
    <searchContext.Provider value={{ openSearchDialogMethod }}>
      {children}
      {openSearch ? (
        <section className="modal__bg">
          <ToastContainer />
          <div className="modal__align">
            <div className="modal__content" style={{ direction: "rtl", color: 'white' }}>
              <CloseIcon
                onClick={closeSearchDialog}
                className="modal__close"
                arial-label="Close modal"
              />
              <div className="modal__video-align">
                <div style={{ direction: "rtl" }}>
                  <div>
                    <Tabs>
                      <TabList>
                        <Tab style={{ fontFamily: "Diba", fontSize: 18 }}>
                          جستجو بر اساس نام و نام خانوادگی شهید
                        </Tab>
                        <Tab style={{ fontFamily: "Diba", fontSize: 18 }}>
                          جستجو بر اساس تاریخ تولد
                        </Tab>
                        <Tab style={{ fontFamily: "Diba", fontSize: 18 }}>
                          جستجو بر اساس شهر سکونت
                        </Tab>
                        <Tab style={{ fontFamily: "Diba", fontSize: 18 }}>
                          جستجو بر اساس تاریخ شهادت
                        </Tab>
                      </TabList>


                      <TabPanel>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",

                            marginTop: 100,
                            gap: 100,
                          }}
                        >
                          <div>
                            <div class="field field_v3">
                              <label for="email" class="ha-screen-reader">نام شهید</label>
                              <input id="email" class="field__input" onChange={changeNameHandler} />
                              <span class="field__label-wrap" aria-hidden="true">
                                <span class="field__label">نام شهید</span>
                              </span>
                            </div>
                          </div>
                          <div></div>
                          <div>
                            <Input

                              id="standard-basic"
                              label="نام خانوادگی شهید"
                              variant="filled"
                              onChange={(e) => {
                                setFamily(e.target.value);
                              }}
                            />
                          </div>
                        </div>
                        <div style={{ marginTop: 100, marginRight: 23 }}>
                          <RadiusButton
                            title="جستجو"
                            clickEvent={clickSaearchByNameAndFamilyHandler}
                          />
                        </div>
                      </TabPanel>
                      <TabPanel>

                        <div className="row">

                          <div>
                            {" "}
                            <p> تاریخ تولد:{ }</p>
                            <DatePicker
                              style={{ width: "405px" }}
                              placeholder=" انتخاب تاریخ تولد شهید"
                              format="jYYYY/jMM/jDD"
                                onChange={birthdayDateChange}
                              id="datePicker2"
                            // preSelected="1356/066/31"
                            />
                          </div>
                        </div>{" "}
                        <div style={{ marginTop: 100, marginRight: 23 }}>
                          <RadiusButton
                            title="جستجو"
                            clickEvent={clickSaearchByNameAndFamilyHandler}
                          />
                        </div>
                      </TabPanel>
                      <TabPanel>

                        <div style={{ margin: '160px' }}>
                          <Input
                            id="standard-basic"
                            label="شهر شهید را وارد کنید"
                            variant="filled"
                            onChange={(e) => {
                              setFamily(e.target.value);
                            }}
                          />
                        </div>
                      </TabPanel>
                      <TabPanel>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",

                            marginTop: 100,
                            gap: 100,
                          }}
                        >
                          <div>
                            <Input


                              sx={{ marginRight: "100px" }}
                              id="filled-basic"
                              label="نام شهید"
                              variant="filled"
                              fontFamily="Diba"
                              fontSize={32}
                              onChange={(e) => setName(e.target.value)}
                            />
                          </div>
                          <div></div>
                          <div>
                            <Input

                              id="standard-basic"
                              label="نام خانوادگی شهید"
                              variant="filled"
                              onChange={(e) => {
                                setFamily(e.target.value);
                              }}
                            />
                          </div>
                        </div>
                        <div style={{ marginTop: 100, marginRight: 23 }}>
                          <RadiusButton
                            title="جستجو"
                          // clickEvent={searchByName}
                          />
                        </div>

                      </TabPanel>
                    </Tabs>
                  </div>
                </div>

                {/* <video id="header-video" autoPlay muted loop>
<source type="video/mp4" src={videoUrl} />
</video> */}
              </div>
            </div>
          </div>
        </section>
      ) : (
        ""
      )}
    </searchContext.Provider>
  );
}
export const useSearch = () => useContext(searchContext);
