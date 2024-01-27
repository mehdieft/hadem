function showconsole(item) {
    console.log("hello me",item)
    let video = document.createElement('video');
    video.style.height = "88%";
    video.style.width = "700px";
    video.controls = true;
    let source = document.createElement('source');
    if (item == "samadi") {
        source.src = "./assets/video/houshangSamadi.mp4";
    } else if (item == "sayari") {
        source.src = "./assets/video/amir-sayari.mp4";
    } else if (item == "mahbubi") {
        source.src = "./assets/video/nakhoda-mahboobi.mp4";
    }
   
    source.type = "video/mp4";
    video.append(source);
    let modal = document.getElementsByClassName('modal__bg ')[0];
    modal.style.display = "block";
    modalContent = document.getElementsByClassName('modal__content')[0]
    modalContent.append(video);


}
function hiddenDialog(){
    let dialog=document.getElementsByClassName('modal__bg ')[0]
    dialog.style.display='none';
    modalContent = document.getElementsByClassName('modal__content')[0]
  
    let video=document.getElementsByTagName('video')[0]
    console.log("_______________>",video)
    video.remove()

}