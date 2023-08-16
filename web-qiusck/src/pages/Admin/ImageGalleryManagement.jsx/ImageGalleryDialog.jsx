import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';

export const ImageGalleryDialog=()=>{
    return (
        <>
           <Button variant="outlined" onClick={handleClickOpen}>
        Open simple dialog
      </Button>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>
          Simple Dialog
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            This is a simple dialog.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
        </>
    )

}