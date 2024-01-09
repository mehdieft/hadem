import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import NotificationProvider from "./context/NotificationProvider";
import ImageDialogProvider from "./context/ImageDialogProvider";
import VideoDialogProvider from "./context/VideoDialogProvider";
import SearchProvider from "./context/searchDialogProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <SearchProvider>

    <NotificationProvider>
      <ImageDialogProvider>
        <VideoDialogProvider>
        <App />
        </VideoDialogProvider>
      </ImageDialogProvider>
    </NotificationProvider>
  </SearchProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
