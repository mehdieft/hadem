let position;
let images=['./assets/images/gallery/khoramshahr/(1).jpg',
'./assets/images/gallery/khoramshahr/(2).jpg',
'./assets/images/gallery/khoramshahr/(3).jpg',
'./assets/images/gallery/khoramshahr/(4).jpg',
'./assets/images/gallery/khoramshahr/(6).jpg',
'./assets/images/gallery/khoramshahr/(7).jpg',
'./assets/images/gallery/khoramshahr/(8).jpg',
'./assets/images/gallery/khoramshahr/(12).jpg',

]
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
function createKhoramShahrImages(){
    const container=document.getElementById('khoramshahr');
    const grid=document.getElementsByClassName('grid');
    console.log(grid);
    for(j=0;j<=images.length%7;j++){
        const column=document.createElement('div');
        column.classList.add('column')

        for(i=0;i<= images.length;i++){
            let image=new Image();
            image.src=images[i];
            console.log('imagee',image);
            column.append(image);
           
        }
        grid[0].append(column)
    }

}
createKhoramShahrImages()