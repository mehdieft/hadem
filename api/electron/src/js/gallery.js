//-------------------------------------------
// THIS IS NOT A PART OF THE PLUGIN. 
// ONLY FOR THE DEMO.
//-------------------------------------------
!(function () {
    'use strict';

    var numOfImages = window.location.search ? parseInt(window.location.search.match(/\d+$/)[0]) : 70,
        gallery = $('#gallery')
      

    // Get some photos from Flickr for the demo
    $.ajax({
        url: 'https://api.fldsadasdsaickr.com/services/rest/',
        data: {
            format: 'json',
            method: 'flickr.interestingness.getList',
            per_page: numOfImages,
            api_key: 'b51d3a7c3988ba6052e25cb152aecba2' // this is my own API key, please use yours
        },
        dataType: 'jsonp',
        jsonp: 'jsoncallback'
    })
        .fail(function (data) {
            var loadedIndex = 1, isVideo;


            // add the videos to the collection
            // data.photos.photo = data.photos.photo.concat(videos);
var myData = [

    { url: "./assets/images/old/shahids/ابراهیم پیرسیاهکل.jpg", thumb: "./assets/images/old/shahids/ابراهیم پیرسیاهکل.jpg",title:"شهید ابراهیم پیرسیاهکل" },
    { url: "./assets/images/old/shahids/ابراهیم حر آبادی.jpg",thumb: "./assets/images/old/shahids/ابراهیم حر آبادی.jpg",title:"شهید ابراهیم حر آبادی" },
    { url: "./assets/images/old/shahids/ابولفضل عباسی.jpg",thumb: "./assets/images/old/shahids/ابولفضل عباسی.jpg",title:"شهید ابولفضل عباسی" },
    { url: "./assets/images/old/shahids/ابولقاسم تاجداران.jpg",thumb: "./assets/images/old/shahids/ابولقاسم تاجداران.jpg",title:"شهید ابولقاسم تاجداران" },
    { url: "./assets/images/old/shahids/احمد رخشانفر.jpg", thumb: "./assets/images/old/shahids/احمد رخشانفر.jpg",title:"شهیداحمد رخشانفر" },
    { url: "./assets/images/old/shahids/اسماعیل زهتابچی.jpg",thumb: "./assets/images/old/shahids/اسماعیل زهتابچی.jpg",title:"شهید اسماعیل زهتابچی" },
    { url: "./assets/images/old/shahids/اسماعیل شعبانی.jpg",thumb: "./assets/images/old/shahids/ابولفضل عباسی.jpg",title:"شهید ابولفضل عباسی" },
    { url: "./assets/images/old/shahids/امیر دریاداردوم شهید محتاج.jpg",thumb: "./assets/images/old/shahids/امیر دریاداردوم شهید محتاج.jpg",title:"امیر دریاداردوم شهید محتاج" },
    { url: "./assets/images/old/shahids/حمید آگاه.jpg", thumb: "./assets/images/old/shahids/حمید آگاه.jpg",title:"شهیدحمید آگاه" },
    { url: "./assets/images/old/shahids/حمید رضا افتخاری نیا.jpg",thumb: "./assets/images/old/shahids/حمید رضا افتخاری نیا.jpg",title:"شهید حمید رضا افتخاری نیا" },
    { url: "./assets/images/old/shahids/حمید قهرمانی ارجاسبی.jpg",thumb: "./assets/images/old/shahids/حمید قهرمانی ارجاسبی.jpg",title:"شهید حمید قهرمانی ارجاسبی" },
    { url: "./assets/images/old/shahids/امیر دریاداردوم شهید محتاج.jpg",thumb: "./assets/images/old/shahids/امیر دریاداردوم شهید محتاج.jpg",title:"امیر دریاداردوم شهید محتاج" },  
    { url: "./assets/images/old/shahids/رمضان سراج.jpg", thumb: "./assets/images/old/shahids/رمضان سراج.jpg",title:"شهید رمضان سراج" },
    { url: "./assets/images/old/shahids/سعید محیط قرائی.jpg",thumb: "./assets/images/old/shahids/سعید محیط قرائی.jpg",title:"شهید سعید محیط قرائی" },
    { url: "./assets/images/old/shahids/سیامک درخشان.jpg",thumb: "./assets/images/old/shahids/سیامک درخشان.jpg",title:"شهید سیامک درخشان" },
    { url: "./assets/images/old/shahids/سید احمد میر ظفر جویان.jpg",thumb: "./assets/images/old/shahids/سید احمد میر ظفر جویان.jpg",title:"شهید سید احمد میر ظفر جویان" },
    { url: "./assets/images/old/shahids/علی اصغر معیری.jpg",thumb: "./assets/images/old/shahids/علی اصغر معیری.jpg",title:"شهید علی اصغر معیری" },
    { url: "./assets/images/old/shahids/علی زارع نعمتی.jpg",thumb: "./assets/images/old/shahids/علی زارع نعمتی.jpg",title:"شهید علی زارع نعمتی" },
    { url: "./assets/images/old/shahids/فرزین آقا جعفری.jpg",thumb: "./assets/images/old/shahids/فرزین آقا جعفری.jpg",title:"شهید فرزین آقا جعفری" },  
    { url: "./assets/images/old/shahids/فرشاد پاسدار.jpg", thumb: "./assets/images/old/shahids/فرشاد پاسدار.jpg",title:"شهید فرشاد پاسدار" },
    { url: "./assets/images/old/shahids/کاظم نظافت قره لو.jpg",thumb: "./assets/images/old/shahids/کاظم نظافت قره لو.jpg",title:"شهید کاظم نظافت قره لو" },
    { url: "./assets/images/old/shahids/محمد باقر اصغری.jpg",thumb: "./assets/images/old/shahids/محمد باقر اصغری.jpg",title:"شهید محمد باقر اصغری" },
    { url: "./assets/images/old/shahids/محمد علی صفا.jpg",thumb: "./assets/images/old/shahids/محمد علی صفا.jpg",title:"شهید محمد علی صفا" },
    { url: "./assets/images/old/shahids/محمد مختاری.jpg",thumb: "./assets/images/old/shahids/محمد مختاری.jpg",title:"شهید محمد مختاری" },
    { url: "./assets/images/old/shahids/محمدرضا مرادی ترشیزی.jpg",thumb: "./assets/images/old/shahids/محمدرضا مرادی ترشیزی.jpg",title:"شهید محمدرضا مرادی ترشیزی" },
    { url: "./assets/images/old/shahids/محمود رضا کوشا.jpg",thumb: "./assets/images/old/shahids/محمود رضا کوشا.jpg",title:"شهید محمود رضا کوشا" },

              { url: "./assets/images/old/(183).jpg", thumb: "./old/(183).jpg",title:"دفاع مقدس" },
              { url: "./assets/images/old/9.jpg",thumb: "./old/9.jpg",title:"دفاع مقدس" },
              { url: "./assets/images/old/13_3.jpg",thumb: "./old/13_3.jpg",title:"دفاع مقدس" },
              { url: "./assets/images/old/13_3.jpg",thumb: "./old/13_3.jpg",title:"دفاع مقدس" },
              { url: "./assets/images/old/43ad06d5-7025-400a-b715-84162a6e2caa.jpg" ,thumb: "./old/43ad06d5-7025-400a-b715-84162a6e2caa.jpg",title:"دفاع مقدس"},
              { url: "./assets/images/old/045.jpg",thumb: "./old/045.jpg",title:"دفاع مقدس" },
              { url: "./assets/images/old/2058.jpg",thumb: "./old/2058.jpg",title:"دفاع مقدس" },
              { url: "./assets/images/old/106503_565.jpg",thumb: "./old/106503_565.jpg",title:"دفاع مقدس" },
              { url: "./assets/images/old/130489_985.jpg",thumb: "./old/130489_985.jpg",title:"دفاع مقدس" },
              { url: "./assets/images/old/179480_149_565.jpg",thumb: "./old/1065179480_149.jpg",title:"دفاع مقدس" },
              { url: "./assets/images/old/286846_748.jpg",thumb: "./old/286846_748.jpg",title:"دفاع مقدس" },
              { url: "./assets/images/old/1624217_360.jpg",thumb: "./old/1624217_360.jpg",title:"دفاع مقدس" },
              { url: "./assets/images/old/13900501_2316754.jpg",thumb: "./old/13900501_2316754.jpg",title:"بازدید رهبری" },
              { url: "./assets/images/old/14787785_628 (1).jpg",thumb: "./old/14787785_628 (1).jpg",title:"دفاع مقدس" },
              { url: "./assets/images/old/57562904.jpg",thumb: "./old/57562904.jpg",title:"دفاع مقدس" },
              { url: "./assets/images/old/IMG_3512.jpg",thumb: "./old/IMG_3512.jpg",title:"دفاع مقدس" },
              { url: "./assets/images/old/IMG_3581.jpg",thumb: "./old/IMG_3581.jpg",title:"دفاع مقدس" },
              { url: "./assets/images/old/IMG_4197.jpg",thumb: "./old/IMG_4197.jpg",title:"دفاع مقدس" },
              { url: "./assets/images/old/IMG_4269.jpg",thumb: "./old/IMG_4269.jpg",title:"دفاع مقدس" },
              { url: "./assets/images/old/IMG_4318.jpg",thumb: "./old/IMG_4318.jpg",title:"دفاع مقدس" },
              { url: "./assets/images/old/IMG_6588.jpg",thumb: "./old/IMG_6589.jpg",title:"دفاع مقدس" },
              { url: "./assets/images/old/IMG_6589.jpg",thumb: "./old/IMG_6588.jpg",title:"دفاع مقدس" },
              { url: "./assets/images/old/Picture 011.jpg",thumb: "./old/Picture 011.jpg",title:"دفاع مقدس" },
              { url: "./assets/images/old/Picture 018.jpg",thumb: "./old/Picture 018.jpg",title:"دفاع مقدس" },
              { url: "./assets/images/old/resized_530621_432.jpg",thumb: "./old/resized_530621_432.jpg",title:"دفاع مقدس" },
              { url: "./assets/images/old/resized_530622_496.jpg",thumb: "./old/resized_530622_496.jpg",title:"دفاع مقدس" },
              { url: "./assets/images/old/resized_530631_240.jpg",thumb: "./old/resized_530631_240.jpg",title:"دفاع مقدس" },
              { url: "./assets/images/old/rr (27).jpg",thumb: "./old/rr (27).jpg",title:"دفاع مقدس" },
              { url: "./assets/images/oldshahid beheshti m2 daryaee 1359).jpg",thumb: "./old/shahid beheshti m2 daryaee 1359.jpg",title:"دفاع مقدس" },
              { url: "./assets/images/old/SKMBT_C552D17020405041.jpg",thumb: "./old/SKMBT_C552D17020405041.jpg",title:"دفاع مقدس" },
              { url: "./assets/images/old/خرمشهر 4.jpg",thumb: "./old/خرمشهر 4.jpg",title:"دفاع مقدس" },
              { url: "./assets/images/old/دفاع مقدس 5 سبز.jpg",thumb: "./old/دفاع مقدس 5 سبز.jpg",title:"دفاع مقدس" },
              { url: "./assets/images/old/دفاع مقدس 6 سبز.jpg",thumb: "./old/دفاع مقدس 6 سبز.jpg",title:"دفاع مقدس" },
              { url: "./assets/images/old/سکوی-نفتی-الامیه-عراق-بعد-از-عملیات-دریایی-شهید-صفری-1024x742.jpg",thumb: "./old/سکوی-نفتی-الامیه-عراق-بعد-از-عملیات-دریایی-شهید-صفری-1024x742.jpg",title:"دفاع مقدس" },
              { url: "./assets/images/old/نخلستان‌هاي آبادان.jpg",thumb: "./old/نخلستان‌هاي آبادان.jpg",title:"دفاع مقدس" },
              { url: "./assets/images/old/Hafte_Defa'_Moghadas_Behesht.info.jpg",thumb: "./old/Hafte_Defa'_Moghadas_Behesht.info.jpg",title:"متفرقه" },
              { url: "./assets/images/old/shahid.jpg",thumb: "./old/shahid.jpg",title:"متفرقه" },
              { url: "./assets/images/old/shohada1.jpg",thumb: "./old/shohada1.jpg",title:"متفرقه" },
              { url: "./assets/images/old/defa-nagsh.ir-37.jpg",thumb: "./old/defa-nagsh.ir-37.jpg",title:"متفرقه" },
              { url: "./assets/images/old/defe-moghadas-copy.jpg",thumb: "./old/defe-moghadas-copy.jpg",title:"متفرقه" },
              { url: "./assets/images/old/87.jpg",thumb: "./old/87.jpg",title:"متفرقه" },
              { url: "./assets/images/old/5984_orig.jpg",thumb: "./old/5984_orig.jpg",title:"متفرقه" },
              { url: "./assets/images/old/562311251322121821286310269241641796415191.jpg",thumb: "./old/562311251322121821286310269241641796415191.jpg",title:"متفرقه" },
              
              


              



            ]

            $.each(myData, function (index, photo) {
                console.log(photo)
                isVideo = photo.thumb ? true : false;
                // http://www.flickr.com/services/api/misc.urls.html
                var url = photo.url,
                    img = document.createElement('img');

                // lazy show the photos one by one
                img.onload = function (e) {
                    img.onload = null;
                    var link = document.createElement('a'),
                        li = document.createElement('li')
                    link.href = this.largeUrl;

                    link.appendChild(this);
                    if (this.isVideo) {
                        link.rel = 'video';
                        li.className = 'video'
                    }
                    li.appendChild(link);
                    gallery[0].appendChild(li);

                    setTimeout(function () {
                        $(li).addClass('loaded');
                    }, 25 * loadedIndex++);
                };

                img['largeUrl'] = isVideo ? photo.url : url + '_b.jpg';
                // img['isVideo'] = isVideo;
                img.src = photo.url;
                img.title =photo.title
            });

            // finally, initialize photobox on all retrieved images
            $('#gallery').photobox('a', { thumbs: true }, callback);
            // using setTimeout to make sure all images were in the DOM, before the history.load() function is looking them up to match the url hash
            setTimeout(window._photobox.history.load, 1000);
            function callback() {
                console.log('callback for loaded content:', this);
            };
        });
})();