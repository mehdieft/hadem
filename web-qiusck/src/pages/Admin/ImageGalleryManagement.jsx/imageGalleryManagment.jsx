import "./style.css";
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
import EditIcon from '@mui/icons-material/Edit';
import { Tooltip } from "@mui/material";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { ImageGalleryDialog } from "./imageGalleryDialog";
export const ImageGalleryManagment = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    console.log("what the fuck is this")
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const columns = [
    {
      id: "NO",
      label: "No",
      minWidth: 370,
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
  const data = [
    { number: 1, url: "test1", usageFor: "test2" },
    { number: 1, url: "test1", usageFor: "test2" },
    { number: 1, url: "test1", usageFor: "test2" },
    { number: 1, url: "test1", usageFor: "test2" },
    { number: 1, url: "test1", usageFor: "test2" },
    { number: 1, url: "test1", usageFor: "test2" },
    { number: 1, url: "test1", usageFor: "test2" },
    { number: 1, url: "test1", usageFor: "test2" },
    { number: 1, url: "test1", usageFor: "test2" },
    { number: 1, url: "test1", usageFor: "test2" },
    { number: 1, url: "test1", usageFor: "test2" },
    { number: 1, url: "test1", usageFor: "test2" },
    { number: 1, url: "test1", usageFor: "test2" },
    { number: 1, url: "test1", usageFor: "test2" },
    { number: 1, url: "test1", usageFor: "test2" },
    { number: 1, url: "test1", usageFor: "test2" },
    { number: 1, url: "test1", usageFor: "test2" },
    { number: 1, url: "test1", usageFor: "test2" },
    { number: 1, url: "test1", usageFor: "test2" },
    { number: 1, url: "test1", usageFor: "test2" },
    { number: 1, url: "test1", usageFor: "test2" },
    { number: 1, url: "test1", usageFor: "test2" },
    { number: 1, url: "test1", usageFor: "test2" },
  ];
  return (
    <Paper
      sx={{
        margin: "100px auto ",
        width: "fit-content",
        overflow: "hidden",
        boxShadow: 4,
        direction:'rtl'
      }}
    >
      <TableContainer sx={{ maxHeight: "600px" }}>
        <Table stickyHeader aria-label="test for image Gallery">
          <TableHead>
            <TableRow>
              <TableRow>
                <TableCell align="right" width={300}>
                  number
                </TableCell>
                <TableCell align="right" width={300}>
                  Url
                </TableCell>
                <TableCell align="right" width={300}>
                  usageFor
                </TableCell>
                <TableCell align="right" width={300}>
                  actions
                </TableCell>
              </TableRow>
              {columns.map((index, column) => {
                <TableCell>{column.label}sadsa</TableCell>;
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage  + rowsPerPage)
              .map((item, index) => {
                const value = item.id;
                return (
                  <div>
                    <TableCell align="right" width={300} scope="td">
                      {" "}
                      {index + 1}
                    </TableCell>
                    <TableCell align="right" width={300}>
                      {item.url}
                    </TableCell>
                    <TableCell align="right" width={300}>
                      {item.usageFor}
                    </TableCell>

                    <TableCell align="right" width={300}>
                    <Tooltip title="حذف " arrow>
                      <IconButton onClick={()=>{console.log("this is delete",item.number)}} aria-label="delete">
                        <DeleteIcon sx={{color:"red"}} />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="ویرایش " arrow>

                      <IconButton onClick={()=>{console.log("this is delete",item.number)}} aria-label="delete">
                        <EditIcon sx={{color:"#d1670c"}} />
                      </IconButton>
                    </Tooltip>

                    </TableCell>
                  </div>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <ImageGalleryDialog/>
    </Paper>
  );
};
