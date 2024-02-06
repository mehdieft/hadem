var cta = document.getElementById("cta");
var check = 0;
let imageArrow=document.getElementById('arrowImage')
// dom.event.clipboardevents.disabled

const pasteBox = document.getElementById("comment");
pasteBox.onpaste = (e) => {
    e.preventDefault();
    return false;
};
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

        createToast('error','لطفا نام خود را وارد کنید')
    }else if(family==''){
        createToast('error','لطفا نام خانوادگی خود را وارد کنید')
    }else if(comment==''){
        createToast('error','لطفا متن نظر خود را بنویسید.')

    }else{
        fetch('http://localhost:4848/api/user/insertComment',{
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({name: username, family: family,comment:comment})
        }).then((res)=>{
            return res.json()

        }).catch(err=>{
            console.log(err)
            createToast('error','خطایی رخ داده لطفا مجددا تلاش کنید')

        })
        .then((data)=>{
            createToast('success','نظر شما با موفقیت ثبت شد')
            document.getElementById('name-input').value=''
         document.getElementById('family').value=''
    document.getElementById('comment').value=''
            


        })

    }
}