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
                 <TableContainer sx={{ maxHeight: "600px", direction: "rtl" }}>
        <Table sx={{ minWidth: 950 }} stickyHeader aria-label="test for image Gallery">
          <TableHead>
            <TableRow>
              <TableRow>
                <TableCell align="right" width={100}>
                  شماره
                </TableCell>
                <TableCell align="right" width={200}>
                  متن جایگزین
                </TableCell>
                <TableCell align="right" width={300}>
                  موضوع
                </TableCell>
                <TableCell align="right" width={300}>
                  ویدیو
                </TableCell>
                <TableCell align="right" width={300}>
                  اقدامات
                </TableCell>
                <TableCell align="right" width={300}>
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
                    <TableRow>
                      <TableCell
                        className="rows"
                        align="right"
                        width={100}
                        scope="td"
                      >
                        {" "}
                        {index + 1 + page * 10}
                      </TableCell>
                      <TableCell
                        className="row-alt"
                        align="right"
                        width={200}
                        scope="td"
                      >
                        {" "}
                        {item.alt}
                      </TableCell>
                      <TableCell className="row-alt" align="right" width={250}>
                        {item.title}
                      </TableCell>
                      <TableCell className="rows" align="right" width={300}>
                        <div
                          style={{
                            backgroundColor: "black",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100px",
                            height: "100px",
                            borderRadius: "10px",
                          }}
                        >
                        
                        </div>

                        {/* <video preload="metadata" width="120" height="120" controls>
                          <source src={`http://localhost:4848/static/uploads/video/${item.url}#t=15`} type="video/mp4"></source>
                        </video> */}
                        {/* {item.url + index} */}
                      </TableCell>

                      <TableCell align="right" width={300}>
                        <Tooltip title="ویرایش ">
                          <IconButton 
                            key={Math.random() * 1000}
                            aria-label="delete"
                          >
                            <EditIcon sx={{ color: "#d1670c" }} />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="حذف کردن">
                          <IconButton>
                            <DeleteIcon sx={{ color: "red" }} />
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