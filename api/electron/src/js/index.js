let sound=false;
let videoOPtions=document.getElementById('header-video')
let iconImage=document.getElementsByClassName('image-icon')
let hiddenImage=document.getElementById('off-icon')
let showIcon=document.getElementById('on-icon')


document.getElementById('sound-button').addEventListener('click',()=>{
    console.log('im working',iconImage)

    sound=!sound
    console.log("sound",sound)
    if(sound==false){
        hiddenImage.classList.remove('hidden');
        showIcon.classList.add('hidden');
        videoOPtions.muted=true

    }else{

        showIcon.classList.remove('hidden')
        hiddenImage.classList.add('hidden')
        videoOPtions.muted=false

    }

})