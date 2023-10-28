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
  const [openDialog, setOpenDialog] = useState(false);
  const [isInsertDialog,setIsInsertDialog]=useState(true);
  const [dataForDialog,setDataForDialog]=useState({
    id: "",
    title: "",
    alt: "",
  });
  const [selectedImage, setSelectedImage] = useState(null);






    const openDialogHandler=()=>{
      setOpenDialog(true);
    }
    const clearForms=()=>{
      console.log("clear formm")
    }
    const editButtonHandler=(item)=>{
      setDataForDialog(item)

    }
    const deleteShahid=(item)=>{
      console.log("this is delete");
    }
    const cancelDialog=()=>{
      setIsInsertDialog(false);
      clearForms();
      setOpenDialog(false);
    }
    const handleNameChange = (e) => {
      setDataForDialog({ ...dataForDialog, name: e.target.value });
    };
    const handleFamilyChange = (e) => {
      setDataForDialog({ ...dataForDialog, family: e.target.value });
    };
    const handleImageUpload = (event) => {
      console.log("************", event.target.files[0]);
      setSelectedImage(event.target.files[0]);
      console.log("tthis is file", selectedImage);
    };
    const saveInsertDialogHandler=()=>{
      console.log("hello ");
    }
    const saveDialogUpdateHandle=()=>{
      console.log("hello world");
    }
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    
    };
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };
  
  
  

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
                  عکس
                </TableCell>
                <TableCell align="right" width={200}>
                  نام
                </TableCell>
                <TableCell align="right" width={300}>
                  نام خانوادگی
                </TableCell>
                <TableCell align="right" width={300}>
                  تاریخ تولد                </TableCell>
                  <TableCell align="right" width={300}>
                  تاریخ شهادت                </TableCell>
                <TableCell align="right" width={300}>
                  اقدامات
                </TableCell>
                
                <TableCell align="right" width={300}>
                  <Tooltip title="اضافه کردن">
                    <IconButton onClick={openDialogHandler} >
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
                        alt={item.alt}
                          src={`http://localhost:4848/static/uploads/${item.url}`}
                          style={{
                            borderRadius: "50%",
                            width: "100px",
                            height: "100px",
                          }}
                          
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
                              onClick={() => {
                                editButtonHandler(item);
                              }}
                              sx={{ color: "#d1670c" }}
                            />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="حذف کردن">
                          <IconButton>
                            <DeleteIcon
                              sx={{ color: "red" }}
                              onClick={() => {
                                deleteShahid(item);
                              }}
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
            <IconButton onClick={cancelDialog} color="secondary">
              <CancelIcon />
            </IconButton>
            {isInsertDialog == true ? (
              <span>اضافه کردن عکس جدید</span>
            ) : (
              <span>به روز رسانی عکس </span>
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
                    label="نام شهید"
                    variant="outlined"
                    value={dataForDialog.title}
                    onChange={handleNameChange}
                  />
                </div>
                <div>
                  <TextField
                    fullWidth
                    sx={{
                      width: "350px",
                      margin: "32px 0",
                    }}
                    label=" نام خانوادگی"
                    variant="outlined"
                    value={dataForDialog.alt}
                    onChange={handleFamilyChange}
                  />
                </div>
                <Button variant="outlined" color="secondary" component="label">
                  عکس شهید
                  <input type="file" hidden onChange={handleImageUpload} />
                </Button>
              </form>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={cancelDialog}>بستن</Button>
          {isInsertDialog == true ? (
            <Button onClick={saveInsertDialogHandler}>اضافه کردن</Button>
          ) : (
            <Button onClick={() => saveDialogUpdateHandle()}>
              به روز رسانی
            </Button>
          )}
        </DialogActions>
      </Dialog>
      {/* // ) : null // } */}
      <TablePagination
      style={{direction:'ltr'}}
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={tableData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
        


        </>
    )
}