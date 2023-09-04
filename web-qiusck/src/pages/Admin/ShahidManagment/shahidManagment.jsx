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
import CancelIcon from "@mui/icons-material/Cancel";
import { TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export const ShahidManagament=()=>{
    const [tableData, setDataTable] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [openDialog, setOPenDialog] = useState(false);
    return (
        <>
           <TableContainer sx={{ maxHeight: "600px" }}>
        <Table  sx={{ minWidth: 950 }} stickyHeader aria-label="test for image Gallery">
          <TableHead>
            <TableRow>
              <TableRow sx={{display:'flex',justifyContent:'space-between',flexDirection:'row',alignItems:'center'}}>
                <TableCell align="right" >
                  alt
                </TableCell>
                <TableCell align="right" >
                  Url
                </TableCell>
                <TableCell align="center" >
                  title
                </TableCell>
                {/* <TableCell align="right" >
                  actions
                </TableCell> */}
                <TableCell align="right" >
                  <Tooltip title="اضافه کردن">
                    <IconButton >
                      <AddIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
          
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((item, index) => {
                const value = item.id;
                return (
                  <div key={index * 4}>
                    <TableRow sx={{display:'flex',justifyContent:'space-between',flexDirection:'row'}}>
                      <TableCell align="right"  scope="td">
                        {" "}
                        {index + 1 + page * 10}
                      </TableCell>
                      <TableCell align="right" >
                        <img
                          src={`http://localhost:4848/static/uploads/${item.url}`}
                          style={{
                            borderRadius: "50%",
                            width: "100px",
                            height: "100px",
                          }}
                          alt=""
                        />
                        {/* {item.url + index} */}
                      </TableCell>
                      <TableCell align="right">
                        {item.title + index}
                      </TableCell>

                      <TableCell align="right" >
                        <Tooltip title="ویرایش ">
                          <IconButton
                            key={Math.random() * 1000}
                            aria-label="delete"
                          >
                            <EditIcon
                            
                              sx={{ color: "#d1670c" }}
                            />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="حذف کردن">
                          <IconButton>
                            <DeleteIcon
                              sx={{ color: "red" }}
                             
                            />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  </div>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
        


        </>
    )
}