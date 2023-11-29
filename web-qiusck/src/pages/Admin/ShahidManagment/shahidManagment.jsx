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
import AddIcon from "@mui/icons-material/Add";
import { useNotification } from "../../../context/NotificationProvider";
import defaultShahid from "../../../assets/Image/defaultShahid.jpg";
import {insertShahidManagementData,deleteShahid} from '../../../api/shahidDetailRequest';
import {updateShahidManagment} from '../../../api/updateShahidDetailRequest';
import { fetchData } from "../../../api/shahidDetailRequest";
import { SearchDialog } from "./searchDialog";
import { DatePicker } from "jalaali-react-date-picker";
import "jalaali-react-date-picker/lib/styles/index.css";

// import {
//   DatePicker,
//   DateTimePicker,
//   DateRangePicker,
//   DateTimeRangePicker,
// } from "react-advance-jalaali-datepicker";

export const ShahidManagament = () => {
  const { openNotification } = useNotification();

  const [tableData, setDataTable] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [openDialog, setOpenDialog] = useState(false);
  const [isInsertDialog, setIsInsertDialog] = useState(true);
  const [error, setErorr] = useState("");
  const [showDetailtOfshahid, setShowDetailtOfshahid] = useState(false);
  const [shahidDetail, setShahidDetail] = useState({
    name: "",
    family: "",
    lastServePlace: "",
    placeOfDeath: "",
    militiryEducation: "",
    wayOfDie: "",
    birthdate: "",
    cemeteryPlace: "",
    birthdayPlace: "",
    dieDate: "",
    fatherName:''
  });

  const [dataForDialog, setDataForDialog] = useState({
    _id: "",
    name: "",
    image: "",
    family: "",
    lastServePlace: "",
    placeOfDeath: "",
    militiryEducation: "",
    wayOfDie: "",
    birthdate: "",
    cemeteryPlace: "",
    birthdayPlace: "",
    dieDate: "",
    dieDay:"",
    dieMonth:'',
    fatherName:""
  });
useEffect(()=>{

  fetchAndSetData();
},[])
 
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
  const [selectedImage, setSelectedImage] = useState(null);

  const openDialogHandler = () => {
    setOpenDialog(true);
  };
  const clearForms = () => {
   setDataForDialog({  id: "",
   name: "",
   image: "",
   family: "",
   lastServePlace: "",
   placeOfDeath: "",
   militiryEducation: "",
   wayOfDie: "",
   birthdate: "",
   cemeteryPlace: "",
   birthdayPlace: "",
   dieDate: "",
   dieDay:"",
   dieMonth:'',
   fatherName:""
 })
  };

  const editButtonHandler = (item) => {
    setIsInsertDialog(false);
    setOpenDialog(true)
    setDataForDialog(item);
    console.log("_______________update>",item._id)
  };
  // const deleteShahid = (item) => {
  //   console.log("this is delete",item._id);
  
  // };
  const cancelDialog = () => {
    setIsInsertDialog(true);
    clearForms();
    setOpenDialog(false);
  };
  const handleNameChange = (e) => {
    setDataForDialog({ ...dataForDialog, name: e.target.value });
  };
  const handleFamilyChange = (e) => {
    setDataForDialog({ ...dataForDialog, family: e.target.value });
  };
  const handleFatherNameChange=(e)=>{
    setDataForDialog({ ...dataForDialog, fatherName: e.target.value });
  }
  const handleBirthPlaceChange=(e)=>{
    setDataForDialog({ ...dataForDialog, birthdayPlace: e.target.value });
  }

  const handleLastServePlace=(e)=>{
    setDataForDialog({ ...dataForDialog, lastServePlace: e.target.value });
  }
  const birthdayDateChange = (unix, formatted) => {
    console.log('birthday datepicker------->',formatted);
    setDataForDialog({ ...dataForDialog, birthdate: formatted });
    setTimeout(() => {
      
      console.log("%%%%%%%%%%%%%",dataForDialog)
    }, 5000);
  };
  const dieDateChange = (unix,shamsi) => {
    console.log('------die kiriiiiiii>',shamsi);
    // setDataForDialog({ ...dataForDialog, dieDay: day });
    // setDataForDialog({ ...dataForDialog, dieMonth: month });
    setDataForDialog({ ...dataForDialog, dieDate: shamsi });
    console.log("this is ------->",dataForDialog)
        
  };
  const handleMilitiryEducation=(e)=>{
 setDataForDialog({...dataForDialog,militiryEducation:e.target.value})
  }
  const handleWayOfDieChange=(e)=>{
    setDataForDialog({ ...dataForDialog, wayOfDie: e.target.value});
  }
  const handleCemeteryPlaceChange=(e)=>{
    setDataForDialog({ ...dataForDialog, cemeteryPlace: e.target.value});


  }

  const handleImageUpload = (event) => {
    console.log("************", event.target.files[0]);
    setDataForDialog({...dataForDialog, image :  event.target.files[0]});
    console.log("tthis is file", selectedImage);
  };
  const saveInsertDialogHandler = () => {
    if(dataForDialog.name !==""){
      if(dataForDialog.family !==""){
        if(dataForDialog.fatherName !==""){
          if(dataForDialog.lastServePlace !==""){
            if(dataForDialog.birthdayPlace !==""){
              if(dataForDialog.cemeteryPlace !==""){
                if(dataForDialog.birthdate !==""){
                  if(dataForDialog.dieDate !==""){
                    if(dataForDialog.wayOfDie !==""){
                      if(dataForDialog.militiryEducation !==""){

                        insertShahidManagementData(  
                          dataForDialog.name,
                          dataForDialog.family,
                          dataForDialog.image,
                          dataForDialog.lastServePlace,
                          dataForDialog.placeOfDeath,
                          dataForDialog.militiryEducation,
                          dataForDialog.wayOfDie,
                          dataForDialog.birthdate,
                          dataForDialog.cemeteryPlace,
                          dataForDialog.birthdayPlace,
                          dataForDialog.dieDay,
                          dataForDialog.dieMonth,
                          dataForDialog.fatherName,
                          dataForDialog.dieDate
                          )
                          window.location.reload();
                          cancelDialog()

                      }else openNotification("تحصیلات نظامی نباید خالی باشد","error") 

                    }else openNotification("نحوه شهادت نباید خالی باشد","error")

                  }else openNotification("تاریخ شهادت نباید خالی باشد","error")

                }else openNotification("تاریخ تولد نباید خالی باشد","error")

              }else openNotification("محل آرامگاه نباید خالی باشد","error")

            }else openNotification("محل تولد نباید خالی باشد","error")

          }else openNotification("آخرین محل خدمت نباید خالی باشد","error")
        }else openNotification("نام پدر نباید خالی باشد","error")
      }else openNotification("نام خانوادگی نباید خالی باشد","error")
    }else openNotification("نام نباید خالی باشد","error")
    console.log("hello ");
  };
  const saveDialogUpdateHandle = () => {
    if(dataForDialog.name !==""){
      if(dataForDialog.family !==""){
        if(dataForDialog.fatherName !==""){
          if(dataForDialog.lastServePlace !==""){
            if(dataForDialog.birthdayPlace !==""){
              if(dataForDialog.cemeteryPlace !==""){
                if(dataForDialog.birthdate !==""){
                  if(dataForDialog.dieDate !==""){
                    if(dataForDialog.wayOfDie !==""){
                      if(dataForDialog.militiryEducation !==""){

                        updateShahidManagment(  
                          dataForDialog._id,
                          dataForDialog.name,
                          dataForDialog.family,
                          dataForDialog.image,
                          dataForDialog.lastServePlace,
                          dataForDialog.placeOfDeath,
                          dataForDialog.militiryEducation,
                          dataForDialog.wayOfDie,
                          dataForDialog.birthdate,
                          dataForDialog.cemeteryPlace,
                          dataForDialog.birthdayPlace,
                          dataForDialog.dieDay,
                          dataForDialog.dieMonth,
                          dataForDialog.fatherName,
                          dataForDialog.dieDate
                          )
                          window.location.reload();

                      }else openNotification("تحصیلات نظامی نباید خالی باشد","error") 

                    }else openNotification("نحوه شهادت نباید خالی باشد","error")

                  }else openNotification("تاریخ شهادت نباید خالی باشد","error")

                }else openNotification("تاریخ تولد نباید خالی باشد","error")

              }else openNotification("محل آرامگاه نباید خالی باشد","error")

            }else openNotification("محل تولد نباید خالی باشد","error")

          }else openNotification("آخرین محل خدمت نباید خالی باشد","error")
        }else openNotification("نام پدر نباید خالی باشد","error")
      }else openNotification("نام خانوادگی نباید خالی باشد","error")
    }else openNotification("نام نباید خالی باشد","error")
   
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const shahidDetailHandler = (item) => {
    console.log("fucking item", item);
    setShowDetailtOfshahid(true);

    setShahidDetail(item);
    
   
    console.log("_________________>>>>", shahidDetail);

    console.log("312312312", shahidDetail);
  };
  const cancelDetailShahidDialog = () => {
    setShowDetailtOfshahid(false);
    // setShahidDetail([]);
  };
  const seacrhResult=(name,family,birthdate,diedate)=>{
    console.log("this is result from search------->",name,family,birthdate,diedate)

  }


  return (
    <>
      <TableContainer
        sx={{ maxHeight: "90vh", width: "89%", margin: "0 auto" }}
      >
        <Table
          sx={{
            minWidth: 850,
            direction: "rtl",
            backgroundColor: "white",
            height: "400px !important",
          }}
          stickyHeader
          aria-label="test for image Gallery"
        >
          <TableHead>
            <TableRow>
              <TableRow>
                <TableCell align="right" width={100}>
                  شماره
                </TableCell>
                {/* <TableCell align="right" width={200}>
                  عکس
                </TableCell> */}
                <TableCell align="right" width={200}>
                  نام
                </TableCell>
                <TableCell align="right" width={300}>
                  نام خانوادگی
                </TableCell>
                <TableCell align="right" width={300}>
                  تاریخ تولد{" "}
                </TableCell>
                <TableCell align="right" width={300}>
                  تاریخ شهادت{" "}
                </TableCell>
                <TableCell align="right" width={300}>
                  اقدامات
                </TableCell>

                <TableCell align="right" width={300}>
                  <Tooltip title="اضافه کردن">
                    <IconButton onClick={openDialogHandler}>
                      <AddIcon />
                    </IconButton>
                  </Tooltip>
                  <SearchDialog searchClickHandler={seacrhResult}  />

              
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
                    <TableRow
                      onClick={() => {
                        console.log("hjelloooo");
                      }}
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        flexDirection: "row",
                      }}
                    >
                      <TableCell align="right" scope="td">
                        {" "}
                        {index + 1 + page * 10}
                      </TableCell>
                      {/* <TableCell align="right">
                        <img
                          alt={item.alt}
                          src={`http://localhost:4848/static/uploads/${item.url}`}
                          style={{
                            borderRadius: "50%",
                            width: "100px",
                            height: "100px",
                          }}
                        />
                      </TableCell> */}
                      {/* {item.url + index} */}
                      <TableCell align="right">{item.name}</TableCell>
                      <TableCell align="right">{item.family}</TableCell>
                      <TableCell align="right">
                        {item.birthdate !==''&& item.birthdate?item.birthdate.split('T')[0].replaceAll('-','/'):'موجود نیست' }
                   
                       
                      </TableCell>
                      <TableCell align="right">
                      {item.dieDate !=='' && item.dieDate?item.dieDate.split('T')[0].replaceAll('-','/'):'موجود نیست'}

                      
                      </TableCell>

                      <TableCell align="right">
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
                                deleteShahid(item._id);
                                window.location.reload();
                              }}
                            />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                      <TableCell
                        align="right"
                        onClick={() => {
                          shahidDetailHandler(item);
                        }}
                        style={{ cursor: "pointer" }}
                      >
                        اطلاعات بیشتر
                      </TableCell>
                    </TableRow>
                  </div>
                );
              })}
          </TableBody>
        </Table>
        <TablePagination
          style={{ direction: "ltr", padding: "10px auto" }}
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={tableData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>

      {/* // ) : null // } */}
      <Dialog
        sx={{
          "& .MuiDialog-paper": {
            width: "100vw",
            height: "95vh",
            maxWidth: "100vw",
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
            {isInsertDialog === true ? (
              <span>اضافه کردن شهید</span>
            ) : (
              <span>به روز رسانی شهید </span>
            )}

            <div></div>
          </div>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <div className="dialog-container">
              <form style={{ direction: "rtl" }}>
                <div className="row ">
                  <div>
                    <TextField
                      className="rtl"
                      fullWidth
                      sx={{
                        width: "350px",
                      }}
                      label="نام شهید"
                      variant="outlined"
                      value={dataForDialog.name}
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
                      label="  نام خانوادگی شهید "
                      variant="outlined"
                      value={dataForDialog.family}
                      onChange={handleFamilyChange}
                    />
                  </div>
                </div>
                <div className="row">
                  <div>
                    {" "}
                    <TextField
                      fullWidth
                      sx={{
                        width: "350px",
                        margin: "32px 0",
                      }}
                      label="  نام پدر "
                      variant="outlined"
                      value={dataForDialog.fatherName}
                      onChange={handleFatherNameChange}
                    />
                  </div>
                  <div>
                    {" "}
                    <TextField
                      fullWidth
                      sx={{
                        width: "350px",
                        margin: "32px 0",
                      }}
                      label=" محل تولد "
                      variant="outlined"
                      value={dataForDialog.birthdayPlace}
                      onChange={handleBirthPlaceChange}
                    />
                  </div>
                </div>
                <div className="row">
                  <div>
                    <p>تاریخ تولد:{dataForDialog.birthdate}</p>
                    <DatePicker  
                      style={{ width: "212px" }}
                      placeholder=" انتخاب تاریخ تولد شهید"
                      format="jYYYY/jMM/jDD"
                      onChange={birthdayDateChange}
                      id="datePicker"
                      // preSelected="1396/05/15"
                    />
                  </div>
                  <div>
                    {" "}
                    <p>تاریخ شهادت:{dataForDialog.dieDate}</p>
                    <DatePicker
                      style={{ width: "212px" }}
                      placeholder=" انتخاب تاریخ تولد شهید"
                      format="jYYYY/jMM/jDD"
                      onChange={dieDateChange}
                      id="datePicker2"
                      // preSelected="1396/05/15"
                    />
                  </div>
                </div>
                <div className="row">
                  <div>
                    {" "}
                    <div>
                      {" "}
                      <TextField
                        fullWidth
                        sx={{
                          width: "350px",
                          margin: "32px 0",
                        }}
                        label="  اخرین محل خدمت "
                        variant="outlined"
                        value={dataForDialog.lastServePlace}
                        onChange={handleLastServePlace}
                      />
                    </div>
                  </div>
                  <div>
                    {" "}
                    <div>
                      {" "}
                      <TextField
                        fullWidth
                        sx={{
                          width: "350px",
                          margin: "32px 0",
                        }}
                        label=" نحوه شهادت "
                        variant="outlined"
                        value={dataForDialog.wayOfDie}
                        onChange={handleWayOfDieChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div>
                  <div>
                    {" "}
                    <div>
                      {" "}
                      <TextField
                        fullWidth
                        sx={{
                          width: "350px",
                          margin: "32px 0",
                        }}
                        label=" محل آرامگاه "
                        variant="outlined"
                        value={dataForDialog.cemeteryPlace}
                        onChange={handleCemeteryPlaceChange}
                      />
                    </div>
                  </div>
                  </div>
                  <div>
                  <div>
                    {" "}
                    <div>
                      {" "}
                      <TextField
                        fullWidth
                        sx={{
                          width: "350px",
                          margin: "32px 0",
                        }}
                        label=" تحصیلات نظامی "
                        variant="outlined"
                        value={dataForDialog.militiryEducation}
                        onChange={handleMilitiryEducation}
                      />
                    </div>
                  </div>
                  </div>

                </div>

                <Button variant="outlined" color="secondary" component="label">
                  عکس شهید
                  <input type="file" accept="jpg/png" hidden onChange={handleImageUpload} />
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

      <Dialog
        sx={{
          "& .MuiDialog-paper": {
            width: "60vw",
            height: "90vh",
            maxWidth: "100vw",
            direction: "rtl",
          },
        }}
        open={showDetailtOfshahid}
      >
        <DialogTitle sx={{ padding: 0, marginBottom: "12px" }}>
          <IconButton onClick={cancelDetailShahidDialog} color="secondary">
            <CancelIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <div className="main-dialog-container">
            <img
              width={"200px"}
              height={"200px"}
              style={{ borderRadius: "50%" }}
              src={
                shahidDetail.image !== null && shahidDetail.image !=='' ?  `http://localhost:4848/static/uploads/shahid/${shahidDetail.image}` : 
                defaultShahid
              }
              alt=""
            />
            <div className="row">
              <div>
                <p>نام:{shahidDetail.name}</p>
              </div>
              <div>
                <p>نام خانوادگی:{shahidDetail.family}</p>
              </div>
            </div>
            <div className="row">
              <p>
                تاریخ تولد:
                {shahidDetail.birthdate !== null ||
                shahidDetail.birthdate !== ""
                  ? shahidDetail.birthdate.split('T')[0]
                  : "موجود نیست"}
              </p>
              <p>تاریخ شهادت:
              {shahidDetail.dieDate !== null ||
                shahidDetail.dieDate !== ""
                  ? shahidDetail.dieDate.split('T')[0]
                  : "موجود نیست"}
                </p>
            </div>
            <div className="row">
              <p>تحصیلات نظامی:{shahidDetail.militiryEducation}</p>
              <p>آخرین مکان خدمت:{shahidDetail.lastServePlace}</p>
            </div>
            <div className="row">
              <p>محل شهادت:{shahidDetail.placeOfDeath}</p>
              <p>نحوه شهادت:{shahidDetail.wayOfDie}</p>
            </div>
            <div className="row"></div>
          </div>
        </DialogContent>

        <DialogActions>
          <Button onClick={cancelDetailShahidDialog}>بستن</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

function validateDate({item,index}){
  if(item !==null || item !==undefined || item !=="")
  return <span>{item.split('T')[index]}</span>

}