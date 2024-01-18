const searchDialog=document.getElementsByClassName('modal__bg');




const clickOPenSearchDialog=()=>{
    console.log('________<',searchDialog)
    console.log("im working")
    searchDialog[0].style.display='block'
}
const closeSearchDialog=()=>{
    searchDialog[0].style.display="none";
}