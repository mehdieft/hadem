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
import { fetchData } from "../../../api/imageGalleryRequests";
import { insertImageManagamentData } from "../../../api/imageGalleryRequests";
import { deleteImage } from "../../../api/imageGalleryRequests";
import AddIcon from "@mui/icons-material/Add";
import { useNotification } from "../../../context/NotificationProvider";
import { updateImage } from "../../../api/imageGalleryRequests";

export const ImageGalleryManagment = () => {
  const { openNotification } = useNotification();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [openDialog, setOPenDialog] = useState(false);
  const [dataForDialog, setDataForDialog] = useState({
    id: "",
    title: "",
    alt: "",
  });
  const [selectedImage, setSelectedImage] = useState(null);
  const [tableData, setDataTable] = useState([]);
  const [error, setErorr] = useState("");
  const [isInsertDialog, setIsInsertDialog] = useState(false);
  const [idForDelete, setIdForDelete] = useState(null);

  useEffect(() => {
    fetchAndSetData();
  }, []);
  const fetchAndSetData = async () => {
    console.log("fuck you");
    const result = await fetchData();
    console.log("ress----->", result);
    if (result.data !== null) {
      setDataTable(result.data.data);
    } else {
      openNotification(result.error, "error");
      // openNotification("متن جایگزین نباید خالی باشد", "error");
      setErorr(result.error);
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  
  };

  const handleAltChange = (e) => {
    setDataForDialog({ ...dataForDialog, alt: e.target.value });
  };
  const handleTitleChange = (e) => {
    setDataForDialog({ ...dataForDialog, title: e.target.value });
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const openInsertDialog = () => {
    setOPenDialog(true);
    setIsInsertDialog(true);
    console.log("this is ", openInsertDialog);
  };

  const editButtonHandler = (item) => {
    console.log("this is data from function", item);
    setDataForDialog(item);
    console.log("item update selected", item);
    setOPenDialog(true);
  };
  const cancelDialog = () => {
    setOPenDialog(false);
    setIsInsertDialog(false);
    setDataForDialog({ name: "", alt: "", title: "" });
  };

  const handleImageUpload = (event) => {
    console.log("************", event.target.files[0]);
    setSelectedImage(event.target.files[0]);
    console.log("tthis is file", selectedImage);
  };

  const saveDialogUpdateHandle = async () => {
    const id = dataForDialog._id;
    const { data } = await updateImage(
      id,
      dataForDialog.title,
      dataForDialog.alt,
      selectedImage
    );
    console.log("data_____", data);
    if (data) {
      console.log("_________________>", data);
      // openNotification(res.data.message,'success')
      window.location.reload();
    }
    setIsInsertDialog(false);
    setOPenDialog(false);
    setDataForDialog({ title: "", alt: "" });

    console.log("this is update");
  };
  const deleteImageItem = async (item) => {
    const result = await deleteImage(item._id);

    console.log("result delete-----", result.data);
    if (result.data !== null) {
      openNotification(result.data.message, "success");
      window.location.reload();
    }
  };

  const saveInsertDialogHandler = () => {
    console.log("__________________>", dataForDialog, selectedImage);
    if (dataForDialog.alt !== "") {
      if (dataForDialog.title !== "") {
        if (selectedImage !== null) {
          insertImageManagamentData(
            dataForDialog.title,
            dataForDialog.alt,
            selectedImage
          );
          setIsInsertDialog(false);
          setOPenDialog(false);
          setDataForDialog({ title: "", alt: "" });
          fetchAndSetData();
          openNotification("با موفقیت اضافه شد", "success");
          window.location.reload();
        } else {
          openNotification("حداقل یک عکس انتخاب کنید", "error");
        }
      } else {
        openNotification("عنوان نباید خالی باشد");
      }
    } else {
      openNotification("متن جایگزین نباید خالی باشد", "error");
    }
  };
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
    <Paper
      sx={{
        margin: "100px auto ",
        width: "fit-content",
        overflow: "hidden",
        boxShadow: 4,
        direction: "rtl",
      }}
    >
      {/* {tableData.length > 0 && tableData.length !== undefined ? ( */}
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
                    <IconButton onClick={openInsertDialog}>
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
                                deleteImageItem(item);
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
                    label="عنوان عکس"
                    variant="outlined"
                    value={dataForDialog.title}
                    onChange={handleTitleChange}
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
                    onChange={handleAltChange}
                  />
                </div>
                <Button variant="outlined" color="secondary" component="label">
                  Upload Image
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
    </Paper>
  );
};
