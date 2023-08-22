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
import EditIcon from "@mui/icons-material/Edit";
import { Tooltip } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useEffect } from "react";
import { useNotification } from "../../../context/NotificationProvider";
import { TextField } from "@mui/material";

export const ImageGalleryManagment = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [openDialog, setOPenDialog] = useState(false);
  const [dataForDialog, setDataForDialog] = useState("");
  const { updateNotification } = useNotification();
  const [selectedFile, setSelectedFile] = useState();
  const [textFieldValue, setTextFieldValue] = useState("");

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    console.log("what the fuck is this");
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const editButtonHandler = (item) => {
    console.log("this is data from function", item);
    setDataForDialog(item);
    setOPenDialog(true);
    updateNotification("error", "this is test");
  };

  const handleImageUpload = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleTextFieldChange = (event) => {
    setTextFieldValue(event.target.value);
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
        direction: "rtl",
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
                <TableCell key={Math.random() * 1000}>
                  {column.label}sadsa
                </TableCell>;
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((item, index) => {
                const value = item.id;
                return (
                  <div key={index * 4}>
                    <TableRow>
                      <TableCell align="right" width={300} scope="td">
                        {" "}
                        {index + 1 + page * 10}
                      </TableCell>
                      <TableCell align="right" width={300}>
                        {item.url + index}
                      </TableCell>
                      <TableCell align="right" width={300}>
                        {item.usageFor + index}
                      </TableCell>

                      <TableCell align="right" width={300}>
                        <Tooltip title="ویرایش " arrow>
                          <IconButton
                            key={Math.random() * 1000}
                            aria-label="delete"
                          >
                            <EditIcon
                              onClick={() => {
                                editButtonHandler(item);
                              }}
                              sx={{ color: "#d1670c" }}
                            />
                          </IconButton>
                        </Tooltip>
                        <Dialog
                          sx={{
                            "& .MuiBackdrop-root": {
                              backgroundColor: "transparent", // This makes the backdrop transparent
                            },
                          }}
                          open={openDialog}
                        >
                          <DialogTitle sx={{padding:0,marginBottom: '100px'}}>
                            <div style={{display:'flex',justifyContent:'space-between'}}>
                              <Button>sqasas</Button>
                              <span>sasasa</span>
                            </div>
                          </DialogTitle>
                          <DialogContent>
                            <DialogContentText>
                              <TextField
                                label="Text Field"
                                variant="outlined"
                                value={textFieldValue}
                                onChange={handleTextFieldChange}
                              />
                              <Button variant="contained" component="label">
                                Upload Image
                                <input
                                  type="file"
                                  hidden
                                  onChange={handleImageUpload}
                                />
                              </Button>
                            </DialogContentText>
                          </DialogContent>
                          <DialogActions>
                            <Button
                              onClick={() => {
                                setOPenDialog(false);
                              }}
                            >
                              Close
                            </Button>
                          </DialogActions>
                        </Dialog>
                      </TableCell>
                    </TableRow>
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
    </Paper>
  );
};
