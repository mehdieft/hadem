let position;
function clickme(item){
    console.log("im here",item)
   let selectedItem= document.getElementById(item);
   console.log("selected item",selectedItem.x)
  
   position=selectedItem.x
   console.log('fucking postion',position)
}
function cancelClick(){
    console.log('im working')
    setTimeout(()=>{
        console.log('fuck you')
        window.scrollTo(0,position)
},1000)
   
}