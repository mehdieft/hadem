import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Tooltip } from "@mui/material";
import TextField from "@mui/material/TextField";
import { DatePicker } from "jalaali-react-date-picker";
import "jalaali-react-date-picker/lib/styles/index.css";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));
export const SearchDialog = ({ searchClickHandler}) => {
  const [open, setOpen] = useState(false);
  const [birthdate, setBirthDate] = useState("");
  const [dieDate, setDieDate] = useState("");
  const [name, setName] = useState("");
  const [family, setFamily] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const bornDateChange = (unix, formatted) => {
    console.log("unix______>", unix);
    console.log("formated______>", formatted);
    setBirthDate(formatted);
  };
  const dieDateChange = (unix, formatted) => {
    console.log("this is die date", unix, formatted);
    setDieDate(formatted);
  };
  const clickedOnresultSearch=()=>{
    setOpen(false)
    searchClickHandler(name,family,birthdate,dieDate)
    setBirthDate('')
    setName('')
    setFamily('')
    setBirthDate('')
    setDieDate('')
  }
  return (
    <>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button> */}
      <Tooltip title="جستجو">
        <IconButton onClick={handleClickOpen}>
          <SearchIcon />
        </IconButton>
      </Tooltip>
      <Dialog
        sx={{
            "& .MuiDialog-paper": {
              width: "50vw",
              maxWidth: "100vw",
            },
          }}
      
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          جستجو شهید
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <div className="row">
            <TextField 
            value={family}
              id="outlined-basic"
              label="نام خانوادگی"
              onChange={(e)=>setFamily(e.target.value)}
              variant="outlined"
            />
            <TextField id="outlined-basic" onChange={(e)=>setName(e.target.value)} label="نام" value={name} variant="outlined" />
          </div>
          <div className="row">
            <div>
              <p>تاریخ تولد:{birthdate}</p>
              <DatePicker
                style={{ width: "212px" }}
                placeholder=" انتخاب تاریخ تولد شهید"
                format="jYYYY/jMM/jDD"
                onChange={bornDateChange}
                id="datePicker"
                // preSelected="1396/05/15"
              />
            </div>
            <div>
              {" "}
              <p>تاریخ شهادت:{dieDate}</p>
              <DatePicker
                style={{ width: "212px" }}
                placeholder=" انتخاب تاریخ تولد شهید"
                format="jYYYY/jMM/jDD"
                  onChange={dieDateChange}
                id="datePicker2"
                // preSelected="1396/05/15"
              />
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={clickedOnresultSearch}
            >
            جستجو
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
