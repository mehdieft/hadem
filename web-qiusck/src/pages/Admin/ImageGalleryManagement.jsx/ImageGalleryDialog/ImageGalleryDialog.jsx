import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useEffect } from "react";
import { useState } from "react";
import { useNotification } from "../../../../context/NotificationProvider";

  const ImageGalleryDialog = ({showDialog,data}) => {
    const [open, setOpen] = useState(false);
    useEffect(()=>{},[])
    setOpen(showDialog)
    const {updateNotification}=useNotification()

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open simple dialog
      </Button>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Simple Dialog</DialogTitle>
        <DialogContent>
          <DialogContentText>This is a simple dialog.</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ImageGalleryDialog;