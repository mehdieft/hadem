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
import CancelIcon from "@mui/icons-material/Cancel";
import AddIcon from "@mui/icons-material/Add";
import { useEffect } from "react";
import { TextField } from "@mui/material";


export const VideoGalleryManagment = () => {

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [openDialog, setOPenDialog] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [tableData, setDataTable] = useState([]);
    const [error, setErorr] = useState("");
    const [isInsertDialog, setIsInsertDialog] = useState(false);
    const [idForDelete, setIdForDelete] = useState(null);
    const [dialogData,setDialogData]=useState([]);
    const [dataForDialog,setDataForDialog]=useState({
        title:"",alt:"",id:""

    })
    
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    console.log("what the fuck is this");
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const openDialogIcon=()=>{
    setOPenDialog(true)
    setIsInsertDialog(true)
  }
  const changeVideoTitleHandler=(e)=>{
    setDataForDialog({ ...dataForDialog, title: e.target.value });
  }
  const changeVideoAlt=(e)=>{
    setDataForDialog({...dataForDialog, alt:e.target.value});
  }
  const columns = [
    {
      id: "NO",
      label: "No",
      minWidth: 170,
      align: "right",
    },
    {
      id: "محل تصویر",
      label: " عنوان ویدیو",
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
    <Paper>
      <TableContainer sx={{ maxHeight: "600px" }}>
        <Table stickyHeader aria-label="test for image Gallery">
          <TableHead>
            <TableRow>
              <TableRow>
                <TableCell align="right" width={300}>
                  alt
                </TableCell>
                <TableCell align="right" width={300}>
                  video
                </TableCell>
                <TableCell align="right" width={300}>
                  title
                </TableCell>
                <TableCell align="right" width={300}>
                  actions
                </TableCell>
                <TableCell align="right" width={300}>
                  <Tooltip title="اضافه کردن">
                    <IconButton onClick={openDialogIcon}>
                      <AddIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
              {columns.map((index, column) => {
                <TableCell key={Math.random() * 1000}>
                  {column.label}
                </TableCell>;
              })}
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
                      <TableCell align="right" width={300} scope="td">
                        {" "}
                        {index + 1 + page * 10}
                      </TableCell>
                      <TableCell align="right" width={300}>
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
                      <TableCell align="right" width={300}>
                        {item.title + index}
                      </TableCell>

                      <TableCell align="right" width={300}>
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
      <Dialog
        sx={{
          "& .MuiDialog-paper": {
            width: "80%",
            maxHeight: 435,
          },
        }}
        open={openDialog}
      >
        <DialogTitle sx={{ padding: 0, marginBottom: "12px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <IconButton onClick={()=>{setOPenDialog(false)}} color="secondary">
              <CancelIcon />
            </IconButton>
            {isInsertDialog == true ? (
              <span>
                اضافه کردن ویدیو جدید
                </span>
            ) : (
              <span>به روز رسانی ویدیو </span>
            )}

            <div></div>
          </div>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <div className="dialog-container">
              <form>
                <div>
                  <TextField
                    fullWidth
                    sx={{
                      width: "350px",
                      marginTop: "32px",
                    }}
                    label="عنوان ویدیو"
                    variant="outlined"
                    value={dataForDialog.title}
                    onChange={changeVideoTitleHandler}
                    
                  />
                </div>
                <div>
                  <TextField
                    fullWidth
                    sx={{
                      width: "350px",
                      margin: "32px 0",
                    }}
                    label="متن جایگزین"
                    variant="outlined"
                    value={dataForDialog.alt}
                    
                  />
                </div>
                <Button variant="outlined" color="secondary" component="label">
                  Upload Image
                  <input type="file" hidden  />
                </Button>
              </form>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button>بستن</Button>
          {isInsertDialog == true ? (
            <Button >اضافه کردن</Button>
          ) : (
            <Button >
              به روز رسانی
            </Button>
          )}
        </DialogActions>
      </Dialog>
      {/* // ) : null // } */}
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={tableData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};
