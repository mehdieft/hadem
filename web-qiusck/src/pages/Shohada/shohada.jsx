import "./style.css";
import shohada from "../../assets/images/shohada.jpg";
import ShahidCard from "../../components/ShahidCard/shahidCard";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getTodayShahid } from "../../api/shahidDetailRequest";
import monthConverter from "../../utils/monthConverter";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import * as React from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import { motion } from "framer-motion";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Modal from "@mui/material/Modal";

// import 'react-modern-calendar-datepicker/lib/DatePicker.css';
// import DatePicker from 'react-modern-calendar-datepicker';
// import { Calendar } from "react-modern-calendar-datepicker";
const VALID_NOTES = [
  { name: "فروردین", value: 1 },
  { name: "اردیبهشت", value: 2 },
  { name: "خرداد", value: 3 },
  { name: "تیر", value: 4 },
  { name: "مرداد", value: 5 },
  { name: "شهریور", value: 6 },
  { name: "مهر", value: 7 },
  { name: "آبان", value: 8 },
  { name: "آذر", value: 9 },
  { name: "دی", value: 10 },
  { name: "بهمن", value: 11 },
  { name: "اسفند", value: 12 },
];
const days = [
  { name: "1", value: 1 },
  { name: "2", value: 2 },
  { name: "3", value: 3 },
  { name: "4", value: 4 },
  { name: "5", value: 5 },
  { name: "6", value: 6 },
  { name: "7", value: 7 },
  { name: "8", value: 8 },
  { name: "9", value: 9 },
  { name: "10", value: 10 },
  { name: "11", value: 11 },
  { name: "12", value: 12 },
  { name: "13", value: 13 },
  { name: "14", value: 14 },
  { name: "15", value: 15 },
  { name: "16", value: 16 },
  { name: "17", value: 17 },
  { name: "18", value: 18 },
  { name: "19", value: 19 },
  { name: "20", value: 20 },
  { name: "21", value: 21 },
  { name: "22", value: 22 },
  { name: "23", value: 23 },
  { name: "24", value: 24 },
  { name: "25", value: 25 },
  { name: "26", value: 26 },
  { name: "27", value: 27 },
  { name: "28", value: 28 },
  { name: "29", value: 29 },
  { name: "30", value: 30 },
];

const Shohada = () => {
  const ITEM_HEIGHT = 36;
  const MOBILE_ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MENU_ITEMS = 3;
  let month = "";
  let day = "";
  const [monthName, seMonthName] = useState("");
  const [dayName, setDayName] = useState("");
  const [monthDie, setMonthDie] = React.useState("");
  const [dayDie, setDayDie] = useState("");
  let maheKiri = "";

  const handleChangeday = (event) => {
    setDayDie(event.target.value);
  };
  const handleChangeMonth = (evenet) => {
    setMonthDie(evenet.target.value);
  };
  const handleBackdropClick = (event) => {
    //these fail to keep the modal open
    event.stopPropagation();
    return false;
  };
  const Availble = () => {
    // const minimumDate = {
    //   year: 2019,
    //   month: 4,
    //   day: 10
    // };

    // const maximumDate = {
    //   year: 2019,
    //   month: 4,
    //   day: 21
    // }
    return (
      <>
        <div style={{ background: "rgb(1, 32, 44)" }}>
          {/* <img src={shohada} style={{ width: "100%", width: "100%" }} alt="" /> */}
          {/* <div className="search-bar">daskjjdghasjghdjh</div> */}
        </div>
        <div className="shahid-container">
          {shahidList.map((item, index) => {
            return (
              <>
                {/* <Calendar  locale="fa" /> */}
                <ShahidCard
                  name={item.name}
                  family={item.family}
                  lastServePlace={item.lastServePlace}
                  placeOfDeath={item.placeOfDeath}
                  birthdate={item.birthdate}
                  dieDate={item.dieDate}
                  wayOfDie={item.wayOfDie}
                  image={item.image}
                  cemeteryPlace={item.cemeteryPlace}
                  birthdayPlace={item.birthdayPlace}
                  militiryEducation={item.militiryEducation}
                />
              </>
            );
          })}
        </div>
      </>
    );
  };
  const NotshahidToday = () => {
    return (
      <>
        <p
          style={{
            color: "white",
            fontSize: 32,
            margin: "120px 0",
            fontFamily: "diba",
          }}
        >
          در تاریخ
          {dayName}
          {monthConverter(monthName)}
          معززی به شهادت نرسیده است
        </p>
      </>
    );
  };
  const SearchDialog = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };
    return (
      <>
        {/* <InputLabel id="demo-simple-select-label">ماه شهادت</InputLabel>
                <Select
                  label="روز شهادت"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={dayDie}
                  onChange={handleChangeday}
                  MenuProps={{
                    PaperProps: {
                      sx: {
                        maxHeight: {
                          xs:
                            MOBILE_ITEM_HEIGHT * MENU_ITEMS + ITEM_PADDING_TOP,
                          sm: ITEM_HEIGHT * MENU_ITEMS + ITEM_PADDING_TOP,
                        },
                        width: 250,
                      },
                    },
                  }}
                >
                  {VALID_NOTES.map((validNote) => (
                    <MenuItem value={validNote.value}>
                      {validNote.name}
                    </MenuItem>
                  ))}
                </Select>
              </div>
              <div>
                <InputLabel id="demo-simple-select-label">ماه شهادت</InputLabel>
                <Select
                  label="ماه شهادت"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={monthDie}
                  onChange={handleChangeMonth}
                  MenuProps={{
                    PaperProps: {
                      sx: {
                        maxHeight: {
                          xs:
                            MOBILE_ITEM_HEIGHT * MENU_ITEMS + ITEM_PADDING_TOP,
                          sm:TEM_HEIGHT * MENU_ITEMS + ITEM_PADDING_TOP,
                        },
                        width: 250,
                      },
                    },
                  }} I
                >
                  {days.map((validNote) => (
                    <MenuItem value={validNote.value}>
                      {validNote.name}
                    </MenuItem>
                  ))}
                </Select> */}

        <Tooltip title="جستجو">
          <motion.IconButton color="white" onClick={handleClickOpen}>
            <SettingsIcon color="white" style={{ color: "white" }} />
          </motion.IconButton>
        </Tooltip>
        <motion.div
          style={{
            position: "absolute",
            top: "40vh",
            right: "40vw",
            padding: "32px",
            backgroundColor: "white",
          }}
        >
          <div style={{ display: "flex", flexDirection: "row" ,gap:'32px'}}>
            <div>
              <InputLabel id="demo-simple-select-label">ماه شهادت</InputLabel>
              <Select
                label="روز شهادت"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={dayDie}
                onChange={handleChangeday}
                MenuProps={{
                  PaperProps: {
                    sx: {
                      maxHeight: {
                        xs: MOBILE_ITEM_HEIGHT * MENU_ITEMS + ITEM_PADDING_TOP,
                        sm: ITEM_HEIGHT * MENU_ITEMS + ITEM_PADDING_TOP,
                      },
                      width: 250,
                    },
                  },
                }}
              >
                {VALID_NOTES.map((validNote) => (
                  <MenuItem value={validNote.value}>{validNote.name}</MenuItem>
                ))}
              </Select>
            </div>
          <div>
            <InputLabel id="demo-simple-select-label">روز شهادت</InputLabel>
            <Select
              label="ماه شهادت"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={monthDie}
              onChange={handleChangeMonth}
              MenuProps={{
                PaperProps: {
                  sx: {
                    maxHeight: {
                      xs: MOBILE_ITEM_HEIGHT * MENU_ITEMS + ITEM_PADDING_TOP,
                      sm: ITEM_HEIGHT * MENU_ITEMS + ITEM_PADDING_TOP,
                    },
                    width: 250,
                  },
                },
              }}
              I
            >
              {days.map((validNote) => (
                <MenuItem value={validNote.value}>{validNote.name}</MenuItem>
              ))}
            </Select>
          </div>
          </div>

        </motion.div>
        {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button> */}
        {/* <Dialog
          onBackdropClick={handleBackdropClick}
          disableEscapeKeyDown
          open={open}
          width="100vw"
          sx={{ "& .MuiDialog-paper": { width: "80%", maxHeight: 435 } }}
          maxWidth="xs"
        >
          <DialogTitle>Subscribe</DialogTitle>
          <DialogContent>
            <form>

            <div style={{ display: "flex", flexDirection: "row", gap: "32px" }}>
              <div>
               
              </div>
            </div>
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Subscribe</Button>
          </DialogActions>
        </Dialog> */}
      </>
    );
  };

  const [shahidList, setShahidList] = useState([]);
  const fetchAndSetData = async () => {
    const result = await getTodayShahid();
    console.log("ress----->", result);
    if (result.data.s) {
      maheKiri = result.data.todayDate.month;

      seMonthName(result.data.todayDate.month);
    }
    console.log("_______________>", monthName);
    seMonthName(result.data.todayDate.month);
    setDayName(result.data.todayDate.day);
    if (result.data !== null) {
      setShahidList(result.data.todayShahid);
      console.log("if statement", shahidList);
    } else {
      // openNotification(result.error, "error");
      // // openNotification("متن جایگزین نباید خالی باشد", "error");
      // setErorr(result.error);
    }
  };

  useEffect(() => {
    fetchAndSetData();
    console.log(monthConverter(monthName));
    console.log("this is data-----", shahidList);
  }, []);

  return (
    <>
      {/* <div className="shahid-container">
      <section className="search-background" style={{backgroundImage:`url(${shohada})`,backgroundSize:'cover'}}>
        <div className="search-bar"></div>
      </section>
    <div style={{background:'rgb(1, 32, 44)'}}>
    <img src={shohada} style={{width:'100%',width:'100%'}} alt="" />
    <div className="search-bar">daskjjdghasjghdjh</div>
    </div>
    <div className="shahid-container">

 <ShahidCard/>   
 <ShahidCard/>  
 <ShahidCard/>  
 <ShahidCard/>  
    </div>
    </div> */}

      <div style={{ background: "rgb(1, 32, 44)" }}>
        <img
          src={shohada}
          style={{
            width: "80%",
            height: "60%",
            display: "block",
            margin: "0 auto",
          }}
          alt=""
        />
        {/* <div className="search-bar">daskjjdghasjghdjh</div> */}
      </div>
      <div className="shahid-container">
        <div
          style={{
            position: "fixed",
            top: "10px",
            right: "20px",
            display: "relative",
          }}
        >
          <SearchDialog />
        </div>

        {shahidList.length > 0 ? <Availble /> : <NotshahidToday />}
      </div>
    </>
  );
};
export default Shohada;
