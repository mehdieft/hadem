import React from "react";
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

import Input from "../components/Input/input";

const searchContext = createContext();
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function SearchProvider({ children }) {
  const [openSearch, setOpenSearch] = useState(false);
  const [name, setName] = useState("");
  const [family, setFamily] = useState("");

  const openSearchDialogMethod = () => {
    setOpenSearch(true);
  };

  const closeNotification = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSearch(false);
  };
  const closeSearchDialog = () => {
    setOpenSearch(false);
  };
  const searchByName = () => {
    console.log(name, family);
    if (name === "") {
      console.log("نام نباید خالی باشد", "error");
    } else if (family === "") {
      console.log("نام خانوادگی نباید خالی باشد", "error");
    } else {
      console.log("success");
    }
  };

  return (
    <searchContext.Provider value={{ openSearchDialogMethod }}>
      {children}
      {openSearch ? (
        <section className="modal__bg">
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
                            clickEvent={searchByName}
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
                              //   onChange={dieDateChange}
                              id="datePicker2"
                            // preSelected="1396/05/15"
                            />
                          </div>
                        </div>{" "}
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
                            clickEvent={searchByName}
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
