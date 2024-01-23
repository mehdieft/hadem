function showconsole(){
    console.log("hello me")
   let video= document.createElement('video');
   video.style.height="100%";
   video.style.width="800px";
   video.controls=true;
   let source=document.createElement('source');
   source.src="./assets/video/amir-sayari.mp4";
   source.type="video/mp4";
   video.append(source);
   let modal=document.getElementsByClassName('modal__bg ')[0];
   modal.style.display="block";
   modalContent=document.getElementsByClassName('modal__content')[0]
   modalContent.append(video);


}