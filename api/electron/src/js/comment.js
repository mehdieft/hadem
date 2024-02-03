var cta = document.getElementById("cta");
var check = 0;
let imageArrow=document.getElementById('arrowImage')

cta.addEventListener('click', function(e){
    var text = e.target.nextElementSibling;
    var loginText = e.target.parentElement;
    text.classList.toggle('show-hide');
    loginText.classList.toggle('expand');
    if(check == 0)
    {
        cta.style.background="url('./assets/icon/up-arrow.svg')";
        
        // cta.innerHTML = "<i class=\"fas fa-chevron-up\"></i>";
        check++;
    }
    else
    {
       
        cta.style.background="url('./assets/icon/down-arrow.svg')";
        check = 0;
    }
})
function submit(){
    const username=document.getElementById('name-input').value;
    const family=document.getElementById('family').value
    const comment=document.getElementById('comment').value
    console.log("--------------.",username)
    console.log('family--------------.',family)

    if(username==''){

        createToast('error','نام شهر نباید خالی باشد')
    }else if(family==''){
        createToast('error','نام شهر نباید خالی باشد')
    }else{

    }
}