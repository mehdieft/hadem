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
import CancelIcon from "@mui/icons-material/Cancel";
import { TextField } from "@mui/material";

export const ImageGalleryManagment = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [openDialog, setOPenDialog] = useState(false);
  const [dataForDialog, setDataForDialog] = useState({ title: "", alt: "" });
  const [selectedFile, setSelectedFile] = useState();
  const [textFieldValue, setTextFieldValue] = useState("");

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    console.log("what the fuck is this");
  };

  const handleAltChange=(e)=>{
    setDataForDialog({...dataForDialog,alt:e.target.value})
  }
  const handleTitleChange = (e) => {
    setDataForDialog({ ...dataForDialog, title: e.target.value });
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const editButtonHandler = (item) => {
    console.log("this is data from function", item);
    setDataForDialog(item);
    setOPenDialog(true);
  };
  const cancelDialog = () => {
    setOPenDialog(false);
    setDataForDialog({ name: "", alt: "", title: "" });
  };

  const handleImageUpload = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleTextFieldChange = (event) => {
    setTextFieldValue(event.target.value);
  };


  const saveDialogHandle=()=>{
    console.log("this is save")
  }
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
    { alt: 1, url: "test1", title: "test2" },
    { alt: 1, url: "test1", title: "test2" },
    { alt: 1, url: "test1", title: "test2" },
    { alt: 1, url: "test1", title: "test2" },
    { alt: 1, url: "test1", title: "test2" },
    { alt: 1, url: "test1", title: "test2" },
    { alt: 1, url: "test1", title: "test2" },
    { alt: 1, url: "test1", title: "test2" },
    { alt: 1, url: "test1", title: "test2" },
    { alt: 1, url: "test1", title: "test2" },
    { alt: 1, url: "test1", title: "test2" },
    { alt: 1, url: "test1", title: "test2" },
    { alt: 1, url: "test1", title: "test2" },
    { alt: 1, url: "test1", title: "test2" },
    { alt: 1, url: "test1", title: "test2" },
    { alt: 1, url: "test1", title: "test2" },
    { alt: 1, url: "test1", title: "test2" },
    { alt: 1, url: "test1", title: "test2" },
    { alt: 1, url: "test1", title: "test2" },
    { alt: 1, url: "test1", title: "test2" },
    { alt: 1, url: "test1", title: "test2" },
    { alt: 1, url: "test1", title: "test2" },
    { alt: 1, url: "test1", title: "test2" },
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
                  alt
                </TableCell>
                <TableCell align="right" width={300}>
                  Url
                </TableCell>
                <TableCell align="right" width={300}>
                  title
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
                        {item.title + index}
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
                            "& .MuiDialog-paper": {
                              width: "80%",
                              maxHeight: 435,
                            },
                          }}
                          open={openDialog}
                        >
                          <DialogTitle
                            sx={{ padding: 0, marginBottom: "12px" }}
                          >
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >
                              <IconButton
                                onClick={cancelDialog}
                                color="secondary"
                              >
                                <CancelIcon />
                              </IconButton>
                              <span>به روز رسانی عکس </span>
                              <div></div>
                            </div>
                          </DialogTitle>
                          <DialogContent>
                            <DialogContentText>
                              <div className="dialog-container">
                                <form>
                                  <div>
                                    <TextField fullWidth
                                     sx={{width:'350px',marginTop:'32px'}}
                                      label="عنوان عکس"
                                      variant="outlined"
                                      value={dataForDialog.title}
                                      onChange={handleTitleChange}
                                    />
                                  </div>
                                  <div>
                                    <TextField 
                                    fullWidth
                                    sx={{width:'350px',margin:'32px 0'}}
                                     
                                      label="متن جایگزین"
                                      variant="outlined"
                                      value={dataForDialog.alt}
                                      onChange={handleAltChange}
                                    />
                                  </div>
                                  <Button variant="outlined" color="secondary" component="label">
                                    Upload Image
                                    <input
                                      type="file"
                                      hidden
                                      onChange={handleImageUpload}
                                    />
                                  </Button>
                                </form>
                              </div>
                            </DialogContentText>
                          </DialogContent>
                          <DialogActions>
                            <Button onClick={cancelDialog}>Close</Button>
                            <Button onClick={saveDialogHandle} >save</Button>
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
