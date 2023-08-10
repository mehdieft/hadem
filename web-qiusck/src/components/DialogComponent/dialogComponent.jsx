import "./style.css";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import dialogBckground from "../../assets/Image/dialogBackground.jpg";
import Dialog from "@mui/material/Dialog";
import { useEffect,useState } from "react";
export const DialogComponent = ({ typeOfDialog ,open}) => {
  //if we need another type of dialog
  return <>
  <ConfirmationDialogRaw />
  </>;
};
export function ConfirmationDialogRaw(props) {
  const { onClose, value: valueProp, open, ...other } = props;
  const [value, setValue] = useState(valueProp);

  useEffect(() => {
    if (!open) {
      setValue(valueProp);
    }
  }, [valueProp, open]);

  const handleCancel = () => {
    onClose();
  };

  const handleOk = () => {
    onClose(value);
  };

  return (
    <Dialog
      sx={{
        "& .MuiDialog-paper": { width: "60%", maxHeight: 435 },
        backgroundImage: `url(${dialogBckground})`,
        backgroundSize: "cover",
      }}
      maxWidth="xs"
     
      open={open}
      {...other}
    >
      <DialogTitle>
        <p style={{ fontFamily: "diba", fontSize: "24px", color: "red" }}>
        </p>
      </DialogTitle>
      <DialogContent
        dividers
        style={{
          backgroundImage: `url(${dialogBckground})`,
          backgroundSize: "cover",
        }}
      >
        {/* here is for shahid dialog */}
        <div className="dialog-content-container">
          <div className="dilog-shahid-image">
          </div>

         
        </div>
      </DialogContent>
      <DialogActions>
        <button autoFocus onClick={handleCancel}>
          Cancel
        </button>
        <button onClick={handleOk}>Ok</button>
      </DialogActions>
    </Dialog>
  );
}


export default function ConfirmationDialog() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("Dione");

  const handleClickListItem = () => {
    setOpen(true);
  };

  const handleClose = (newValue) => {
    setOpen(false);

    if (newValue) {
      setValue(newValue);
    }
  };
  
}
