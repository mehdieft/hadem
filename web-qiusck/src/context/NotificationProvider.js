import React from 'react';
import { Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import { useState,createContext,useContext } from 'react';



const notificationContext=createContext();
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function NotificationProvider  ({ children })  {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [severity, setSeverity] = useState('success');

  const openNotification = (message, severity) => {
    setMessage(message);
    setSeverity(severity);
    setOpen(true);
  };

  const closeNotification = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <notificationContext.Provider value={openNotification}>
      {children}
      <Snackbar open={open} autoHideDuration={6000} onClose={closeNotification}>
        <Alert onClose={closeNotification} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
    </notificationContext.Provider>
  );
};
export const useNotification=()=> useContext(notificationContext)













