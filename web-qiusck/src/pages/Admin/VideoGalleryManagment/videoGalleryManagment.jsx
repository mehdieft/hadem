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
import CancelIcon from "@mui/icons-material/Cancel";
import AddIcon from "@mui/icons-material/Add";
import { useEffect } from "react";
import { TextField } from "@mui/material";
import { fetchData } from "../../../api/videoGalleryRequest";
import { useNotification } from "../../../context/NotificationProvider";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { insertVideo } from "../../../api/videoGalleryRequest";
import {deleteVideoRequest} from '../../../api/videoGalleryRequest'

export const VideoGalleryManagment = () => {
  const { openNotification } = useNotification();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [openDialog, setOPenDialog] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  let [tableData, setDataTable] = useState([]);
  const [error, setErorr] = useState("");
  const [isInsertDialog, setIsInsertDialog] = useState(false);
  const [idForDelete, setIdForDelete] = useState(null);
  const [dialogData, setDialogData] = useState([]);
  const [openVideoDialog, setOpenVideoDialog] = useState(false);
  const [videoDialogUrl, setVideoDialogUrl] = useState("");
  const[isUpdateDialog,setIsUpdateDialog]=useState(false);



  const [videoUrl,setVideoUrl]=useState('')
  const [dataForDialog, setDataForDialog] = useState({
    title: "",
    alt: "",
    id: "",
  });
  useEffect(() => {
    fetchVideoData();
  }, []);
  const fetchVideoData = async () => {
    const result = await fetchData();
    console.log("result", result);

    if (result.data !== null) {
      tableData = result.data;
      setDataTable(tableData);
      console.log("__________", tableData);
    } else {
      openNotification(result.error, "error");
      setErorr(result.error);
    }
  };
  const videoPlayHandler = (url) => {
    setVideoDialogUrl(url);

    setOpenVideoDialog(true);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    console.log("what the fuck is this");
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const openDialogIcon = () => {
    setOPenDialog(true);
    setIsInsertDialog(true);
  };
  const changeVideoTitleHandler = (e) => {
    setDataForDialog({ ...dataForDialog, title: e.target.value });
  };
  const changeVideoAlt = (e) => {
    setDataForDialog({ ...dataForDialog, alt: e.target.value });
  };
  const videoUploadHandler = async(event) => {
    if(event.target.files[0] !==null){

      setSelectedVideo(event.target.files[0]);
      console.log("this is eventt",event.target.files)
      console.log("this is setvideo",selectedVideo)
    }
  };
  const saveVideoInsert = async() => {
    console.log("***************");
    if (dataForDialog.alt !== "") {
      if (dataForDialog.title.length !== "") {
      } else openNotification("عنوان ویدیو نباید خالی باشد", "error");
      if (selectedVideo !== null) {
        insertVideo(dataForDialog.alt, dataForDialog.title, selectedVideo);
        setDataForDialog({ title: "", alt: "", id: "" });
        setSelectedVideo(null);
        const response=await fetchVideoData();
        console.log("response on front _____>",await fetchVideoData())
        if(response ){

          setOPenDialog(false);
          window.location.reload();
          openNotification("ویدیو با موفقیت اضافه شد", "success");
        }

      } else openNotification("ویدیو باید انتخاب شود", "error");
    } else openNotification("متن جایگزین ویدیو نباید خالی باشد", "error");
  };
  const handleDeleteVideo=async(id)=>{
    console.log("this is id",id)
    setIdForDelete(id)
    const response=await deleteVideoRequest(id)
    if (response &&response.data){
      openNotification(response.data.message,'success')
      window.location.reload();
      console.log(response);
    }
  }
  const updateVideoHandler=async(item)=>{
    setVideoUrl(item.url)
    setDataForDialog(item)
    setIsUpdateDialog(true)
    setOPenDialog(true)
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
      <Dialog open={openVideoDialog}>
        <DialogTitle style={{ padding: 0 }}>
          <IconButton
            style={{ padding: 0 }}
            onClick={() => {
              setOpenVideoDialog(false);
              setVideoDialogUrl("");
            }}
            color="secondary"
          >
            <CancelIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <video width="320" height="240" preload="none" controls>
              <source
                src={`http://localhost:4848/static/uploads/video/${videoDialogUrl}`}
                type="video/mp4"
              />
            </video>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setOpenVideoDialog(false);
              setVideoDialogUrl("");
            }}
          >
            بستن
          </Button>
        </DialogActions>
      </Dialog>
      <TableContainer sx={{ maxHeight: "600px", direction: "rtl" }}>
        <Table stickyHeader aria-label="test for image Gallery">
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
                    <IconButton onClick={openDialogIcon}>
                      <AddIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
              {columns.map((index, column) => {
                // <TableCell key={Math.random() * 1000}>
                //   {column.label}
                // </TableCell>;
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
                          <div>
                            <IconButton
                              onClick={() => {
                                videoPlayHandler(item.url);
                              }}
                            >
                              <YouTubeIcon className="video-icon" />
                            </IconButton>
                          </div>
                        </div>

                        {/* <video preload="metadata" width="120" height="120" controls>
                          <source src={`http://localhost:4848/static/uploads/video/${item.url}#t=15`} type="video/mp4"></source>
                        </video> */}
                        {/* {item.url + index} */}
                      </TableCell>

                      <TableCell align="right" width={300}>
                        <Tooltip title="ویرایش ">
                          <IconButton onClick={()=>{updateVideoHandler(item)}}
                            key={Math.random() * 1000}
                            aria-label="delete"
                          >
                            <EditIcon sx={{ color: "#d1670c" }} />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="حذف کردن">
                          <IconButton onClick={()=>{handleDeleteVideo(item._id)}}>
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
            <IconButton
              onClick={() => {
                setOPenDialog(false);
              }}
              color="secondary"
            >
              <CancelIcon />
            </IconButton>
            {isInsertDialog == true ? (
              <span>اضافه کردن ویدیو جدید</span>
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
                      maxWidth: "350px",
                      overFlow: "hidden",
                      marginTop: "32px",
                    }}
                    label="متن جایگزین"
                    variant="outlined"
                    value={dataForDialog.alt}
                    onChange={changeVideoAlt}
                  />
                </div>
                <div>
                  <TextField
                    fullWidth
                    sx={{
                      width: "350px",
                      margin: "32px 0",
                    }}
                    label="عنوان ویدیو"
                    variant="outlined"
                    value={dataForDialog.title}
                    onChange={changeVideoTitleHandler}
                  />
                </div>
                <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'64px'}}>

                {
                  isUpdateDialog==true ? <div
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
                  <div>
                    <IconButton
                      onClick={() => {
                        videoPlayHandler(videoUrl);
                      }}
                    >
                      <YouTubeIcon className="video-icon" />
                    </IconButton>
                  </div>
                </div>:<></>
                }
                <Button variant="outlined" color="secondary" component="label">
                  Upload Video
                  <input type="file" onChange={videoUploadHandler} hidden />
                </Button>
                </div>
              </form>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button >بستن</Button>
          {isInsertDialog == true ? (
            <Button onClick={saveVideoInsert}>اضافه کردن</Button>
          ) : (
            <Button >به روز رسانی</Button>
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
