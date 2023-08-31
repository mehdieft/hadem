import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import { Tooltip } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useEffect } from "react";




export const VideoGalleryManagment=()=>{


    const columns = [
        {
          id: "NO",
          label: "No",
          minWidth: 170,
          align: "right",
        },
        {
          id: "محل تصویر",
          label: "محل تصویر",
          minWidth: 370,
          align: "right",
        },
        {
          id: "تصویر",
          label: "تصویر",
          minWidth: 370,
          align: "right",
        },
        {
          id: "action",
          label: "اقدامات",
          minWidth: 370,
          align: "right",
        },
      ];
    return (
        <>
        this is video gallery
        </>
    )
}