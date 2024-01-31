const searchDialog=document.getElementsByClassName('modal__bg');
let cardWraper=document.getElementById('card-wraper')
let shahids=[]
console.log('djaskljhdkasjhdjkhkjfds')



const clickOPenSearchDialog=()=>{
    console.log('________<',searchDialog)
    console.log("im working")
    searchDialog[0].style.display='block'
}
const closeSearchDialog=()=>{
    searchDialog[0].style.display="none";
}
fetch('http://localhost:4848/api/user/getByDate').then(res=>{
    return res.json()

}).then(data=>{
    console.log(data.todayShahid)
    data.todayShahid.forEach((element ,index)=> {
        console.log(element.name);
        const cardWraper=document.getElementById('card-wraper')
        const cardContainer=document.createElement('div')
        cardContainer.classList.add('card-container')
        cardWraper.appendChild(cardContainer);
        const shahidImageContainer=document.createElement('div');
        shahidImageContainer.classList.add('shahid-image-container');
        const cardImage=document.createElement('div');
        cardImage.classList.add('card-image');
        const imgg=document.createElement('img');
        imgg.src="./assets/Image/defaultShahid.jpg"
        imgg.height="120px";
        imgg.width="120px";
        cardImage.append(imgg);
        shahidImageContainer.appendChild(cardImage);
        shahidNameAndFamily=document.createElement('span');
        shahidNameAndFamily.classList.add('shahid-name')
        shahidNameAndFamily.innerText=`شهید ${element.name}  ${element.family}`;
        shahidImageContainer.append(shahidNameAndFamily)
        cardContainer.append(shahidImageContainer);
        const cardDetail=document.createElement('div');
        cardDetail.classList.add('card-detail');
        //create birthdate span
        spanOne=document.createElement('span');
        spanOne.innerText="تاریخ تولد :"
        spanTwo=document.createElement('span');
        spanTwo.classList.add('shahid-detail-span')
        spanTwo.classList.add('rotate')
        spanTwo.innerText=(element.birthdate !==''&& element.birthdate &&element.birthdate !==''&& element.birthdate ?element.birthdate.split('T')[0].replaceAll('-','/'):'____')
        spanOne.append(spanTwo);
        cardDetail.append(spanOne);
        cardContainer.append(cardDetail);
        const card=document.getElementsByClassName('card-container')[index]
        console.log('card__><>><>',card)
        //create bornPlace span
        spanOne=document.createElement('span');
        spanOne.innerText="زادگاه:"
        spanTwo=document.createElement('span');
        spanTwo.classList.add('shahid-detail-span')
        spanTwo.classList.add('rotate')
        spanTwo.innerText=element.birthdayPlace !=='' || element.birthdayPlace !==''?element.birthdayPlace:'____'
        spanOne.append(spanTwo);
        cardDetail.append(spanOne);
        //ساختن تاریخ شهادت
        spanOne=document.createElement('span');
        spanOne.innerText="تاریخ شهادت:"
        spanTwo=document.createElement('span');
        spanTwo.classList.add('shahid-detail-span')
        spanTwo.classList.add('rotate')
        spanTwo.innerText=element.dieDate !=='' && element.dieDate? `${element.dieYear}/${element.dieMonth}/${element.dieDay}`:'____'
        spanOne.append(spanTwo);
        cardDetail.append(spanOne);
        //ساختن نحوه شهادت
        spanOne=document.createElement('span');
        spanOne.innerText="نحوه شهادت:"
        spanTwo=document.createElement('span');
        spanTwo.classList.add('shahid-detail-span')
        spanTwo.innerText=element.wayOfDie !==''?element.wayOfDie:'____'
        spanOne.append(spanTwo);
        cardDetail.append(spanOne);
        //ساختن اخرین محل خدمت
        spanOne=document.createElement('span');
        spanOne.innerText= "آخرین محل خدمت :"
        spanTwo=document.createElement('span');
        spanTwo.classList.add('shahid-detail-span')
        spanTwo.innerText=element.lastServePlace !==''?element.lastServePlace:'____'
        spanOne.append(spanTwo);
        cardDetail.append(spanOne);

        //محل اضافه کردن تحصیلات نظامی
        spanOne=document.createElement('span');
        spanOne.innerText="تحصیلات نظامی:"
        spanTwo=document.createElement('span');
        spanTwo.classList.add('shahid-detail-span')
        spanTwo.innerText=element.militiryEducation !==''?element.militiryEducation:'____'
        spanOne.append(spanTwo);
        cardDetail.append(spanOne);

        //محل اضافه کردن محل آرامگاه
        spanOne=document.createElement('span');
        spanOne.innerText="محل آرامگاه:"
        spanTwo=document.createElement('span');
        spanTwo.classList.add('shahid-detail-span')
        spanTwo.innerText=element.cemeteryPlace !==''?element.cemeteryPlace:'____'
        spanOne.append(spanTwo);
        cardDetail.append(spanOne);
        
    });
})
  
function submitNameAndFamily(){
    const name=document.getElementById('name').value
    const family=document.getElementById('family').value
    if(name=='' && family==''){

        createToast('error','حداقل یکی از موارد نام و نام خانوادگی را پرکنید')
    }else{

        console.log(name,family);
        fetch('http://localhost:4848/api/search/searchByName', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({name: name, family: family})
  }).then((res)=>{
    return res.json()
    
}).then((data)=>{
      document.getElementById("card-wraper").innerHTML = '';
    console.log(data.searchedShahid)
    data.searchedShahid.forEach((element ,index)=> {
        console.log(element.name);
        const cardWraper=document.getElementById('card-wraper')
        const cardContainer=document.createElement('div')
        cardContainer.classList.add('card-container')
        cardWraper.appendChild(cardContainer);
        const shahidImageContainer=document.createElement('div');
        shahidImageContainer.classList.add('shahid-image-container');
        const cardImage=document.createElement('div');
        cardImage.classList.add('card-image');
        const imgg=document.createElement('img');
        imgg.src="./assets/Image/defaultShahid.jpg"
        imgg.height="120px";
        imgg.width="120px";
        cardImage.append(imgg);
        shahidImageContainer.appendChild(cardImage);
        shahidNameAndFamily=document.createElement('span');
        shahidNameAndFamily.classList.add('shahid-name')
        shahidNameAndFamily.innerText=`شهید ${element.name}  ${element.family}`;
        shahidImageContainer.append(shahidNameAndFamily)
        cardContainer.append(shahidImageContainer);
        const cardDetail=document.createElement('div');
        cardDetail.classList.add('card-detail');
        //create birthdate span
        spanOne=document.createElement('span');
        spanOne.innerText="تاریخ تولد :"
        spanTwo=document.createElement('span');
        spanTwo.classList.add('shahid-detail-span')
        spanTwo.classList.add('rotate')
        spanTwo.innerText=(element.birthdate !==''&& element.birthdate &&element.birthdate !==''&& element.birthdate ?element.birthdate.split('T')[0].replaceAll('-','/'):'____')
        spanOne.append(spanTwo);
        cardDetail.append(spanOne);
        cardContainer.append(cardDetail);
        const card=document.getElementsByClassName('card-container')[index]
        console.log('card__><>><>',card)
        //create bornPlace span
        spanOne=document.createElement('span');
        spanOne.innerText="زادگاه:"
        spanTwo=document.createElement('span');
        spanTwo.classList.add('shahid-detail-span')
        spanTwo.classList.add('rotate')
        spanTwo.innerText=element.birthdayPlace !=='' || element.birthdayPlace !==''?element.birthdayPlace:'____'
        spanOne.append(spanTwo);
        cardDetail.append(spanOne);
        //ساختن تاریخ شهادت
        spanOne=document.createElement('span');
        spanOne.innerText="تاریخ شهادت:"
        spanTwo=document.createElement('span');
        spanTwo.classList.add('shahid-detail-span')
        spanTwo.classList.add('rotate')
        spanTwo.innerText=element.dieDate !=='' && element.dieDate? `${element.dieYear}/${element.dieMonth}/${element.dieDay}`:'____'
        spanOne.append(spanTwo);
        cardDetail.append(spanOne);
        //ساختن نحوه شهادت
        spanOne=document.createElement('span');
        spanOne.innerText="نحوه شهادت:"
        spanTwo=document.createElement('span');
        spanTwo.classList.add('shahid-detail-span')
        spanTwo.innerText=element.wayOfDie !==''?element.wayOfDie:'____'
        spanOne.append(spanTwo);
        cardDetail.append(spanOne);
        //ساختن اخرین محل خدمت
        spanOne=document.createElement('span');
        spanOne.innerText= "آخرین محل خدمت :"
        spanTwo=document.createElement('span');
        spanTwo.classList.add('shahid-detail-span')
        spanTwo.innerText=element.lastServePlace !==''?element.lastServePlace:'____'
        spanOne.append(spanTwo);
        cardDetail.append(spanOne);

        //محل اضافه کردن تحصیلات نظامی
        spanOne=document.createElement('span');
        spanOne.innerText="تحصیلات نظامی:"
        spanTwo=document.createElement('span');
        spanTwo.classList.add('shahid-detail-span')
        spanTwo.innerText=element.militiryEducation !==''?element.militiryEducation:'____'
        spanOne.append(spanTwo);
        cardDetail.append(spanOne);

        //محل اضافه کردن محل آرامگاه
        spanOne=document.createElement('span');
        spanOne.innerText="محل آرامگاه:"
        spanTwo=document.createElement('span');
        spanTwo.classList.add('shahid-detail-span')
        spanTwo.innerText=element.cemeteryPlace !==''?element.cemeteryPlace:'____'
        spanOne.append(spanTwo);
        cardDetail.append(spanOne);
        closeSearchDialog()
        
    });
  })

        
    }

}
function searchByCityHandler(){
    const cityName=document.getElementById('city').value;
    console.log('_________________>city',cityName)
    if(cityName==''){
        createToast('error','نام شهر نباید خالی باشد')
    }else{
        fetch('http://localhost:4848/api/search/searchCity', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({city:cityName})
          }).then((res)=>{
            return res.json()

          }).then((data)=>{
            console.log('____________>',data)
            data.searchedShahid.forEach((element ,index)=> {
                console.log(element.name);
                const cardWraper=document.getElementById('card-wraper')
                const cardContainer=document.createElement('div')
                cardContainer.classList.add('card-container')
                cardWraper.appendChild(cardContainer);
                const shahidImageContainer=document.createElement('div');
                shahidImageContainer.classList.add('shahid-image-container');
                const cardImage=document.createElement('div');
                cardImage.classList.add('card-image');
                const imgg=document.createElement('img');
                imgg.src="./assets/Image/defaultShahid.jpg"
                imgg.height="120px";
                imgg.width="120px";
                cardImage.append(imgg);
                shahidImageContainer.appendChild(cardImage);
                shahidNameAndFamily=document.createElement('span');
                shahidNameAndFamily.classList.add('shahid-name')
                shahidNameAndFamily.innerText=`شهید ${element.name}  ${element.family}`;
                shahidImageContainer.append(shahidNameAndFamily)
                cardContainer.append(shahidImageContainer);
                const cardDetail=document.createElement('div');
                cardDetail.classList.add('card-detail');
                //create birthdate span
                spanOne=document.createElement('span');
                spanOne.innerText="تاریخ تولد :"
                spanTwo=document.createElement('span');
                spanTwo.classList.add('shahid-detail-span')
                spanTwo.classList.add('rotate')
                spanTwo.innerText=(element.birthdate !==''&& element.birthdate &&element.birthdate !==''&& element.birthdate ?element.birthdate.split('T')[0].replaceAll('-','/'):'____')
                spanOne.append(spanTwo);
                cardDetail.append(spanOne);
                cardContainer.append(cardDetail);
                const card=document.getElementsByClassName('card-container')[index]
                console.log('card__><>><>',card)
                //create bornPlace span
                spanOne=document.createElement('span');
                spanOne.innerText="زادگاه:"
                spanTwo=document.createElement('span');
                spanTwo.classList.add('shahid-detail-span')
                spanTwo.classList.add('rotate')
                spanTwo.innerText=element.birthdayPlace !=='' || element.birthdayPlace !==''?element.birthdayPlace:'____'
                spanOne.append(spanTwo);
                cardDetail.append(spanOne);
                //ساختن تاریخ شهادت
                spanOne=document.createElement('span');
                spanOne.innerText="تاریخ شهادت:"
                spanTwo=document.createElement('span');
                spanTwo.classList.add('shahid-detail-span')
                spanTwo.classList.add('rotate')
                spanTwo.innerText=element.dieDate !=='' && element.dieDate? `${element.dieYear}/${element.dieMonth}/${element.dieDay}`:'____'
                spanOne.append(spanTwo);
                cardDetail.append(spanOne);
                //ساختن نحوه شهادت
                spanOne=document.createElement('span');
                spanOne.innerText="نحوه شهادت:"
                spanTwo=document.createElement('span');
                spanTwo.classList.add('shahid-detail-span')
                spanTwo.innerText=element.wayOfDie !==''?element.wayOfDie:'____'
                spanOne.append(spanTwo);
                cardDetail.append(spanOne);
                //ساختن اخرین محل خدمت
                spanOne=document.createElement('span');
                spanOne.innerText= "آخرین محل خدمت :"
                spanTwo=document.createElement('span');
                spanTwo.classList.add('shahid-detail-span')
                spanTwo.innerText=element.lastServePlace !==''?element.lastServePlace:'____'
                spanOne.append(spanTwo);
                cardDetail.append(spanOne);
        
                //محل اضافه کردن تحصیلات نظامی
                spanOne=document.createElement('span');
                spanOne.innerText="تحصیلات نظامی:"
                spanTwo=document.createElement('span');
                spanTwo.classList.add('shahid-detail-span')
                spanTwo.innerText=element.militiryEducation !==''?element.militiryEducation:'____'
                spanOne.append(spanTwo);
                cardDetail.append(spanOne);
        
                //محل اضافه کردن محل آرامگاه
                spanOne=document.createElement('span');
                spanOne.innerText="محل آرامگاه:"
                spanTwo=document.createElement('span');
                spanTwo.classList.add('shahid-detail-span')
                spanTwo.innerText=element.cemeteryPlace !==''?element.cemeteryPlace:'____'
                spanOne.append(spanTwo);
                cardDetail.append(spanOne);
                closeSearchDialog()
                
            });

          })
    }
}