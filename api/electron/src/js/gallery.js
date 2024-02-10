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


            // add the videos to the collectionب
            // data.photos.photo = data.photos.photo.concat(videos);
var myData = [
    { url: "./assets/images/old/shahids/ابراهیم خزائی.jpg", thumb: "./assets/images/old/shahids/ابراهیم خزائی.jpg",title:"شهید ابراهیم خزائی" },
    { url: "./assets/images/old/shahids/ابولفضل الیکایی قنبری.jpg",thumb: "./assets/images/old/shahids/ابولفضل الیکایی قنبری.jpg",title:"شهید ابولفضل الیکایی قنبری" },
    { url: "./assets/images/old/shahids/ابولقاسم تاجداران.jpg", thumb: "./assets/images/old/shahids/ابولقاسم تاجداران.jpg",title:"شهید ابولقاسم تاجداران" },
    { url: "./assets/images/old/shahids/ابولهادی حسین زاده.jpg",thumb: "./assets/images/old/shahids/ابولهادی حسین زاده.jpg",title:"شهید ابولهادی حسین زاده" },
    { url: "./assets/images/old/shahids/اسماعیل احمدنژاد.jpg", thumb: "./assets/images/old/shahids/اسماعیل احمدنژاد.jpg",title:"شهید اسماعیل احمدنژاد" },
    { url: "./assets/images/old/shahids/اصغر پورحسینی.jpg",thumb: "./assets/images/old/shahids/اصغر پورحسینی.jpg",title:"شهید اصغر پورحسینی" },
    { url: "./assets/images/old/shahids/الله رضا درتومی.jpg", thumb: "./assets/images/old/shahids/الله رضا درتومی.jpg",title:"شهید الله رضا درتومی" },
    { url: "./assets/images/old/shahids/برفعلی رمضانی.jpg",thumb: "./assets/images/old/shahids/برفعلی رمضانی.jpg",title:"شهید برفعلی رمضانی" },
    { url: "./assets/images/old/shahids/بهروز خاکسار.jpg", thumb: "./assets/images/old/shahids/بهروز خاکسار.jpg",title:"شهید بهروز خاکسار" },
    { url: "./assets/images/old/shahids/بهمن جهانیان.jpg",thumb: "./assets/images/old/shahids/بهمن جهانیان.jpg",title:"شهید بهمن جهانیان" },
    { url: "./assets/images/old/shahids/بیت الله رضائی.jpg", thumb: "./assets/images/old/shahids/بیت الله رضائی.jpg",title:"شهید بیت الله رضائی" },
    { url: "./assets/images/old/shahids/پارسا داراب.jpg",thumb: "./assets/images/old/shahids/پارسا داراب.jpg",title:"شهید پارسا داراب" },
    { url: "./assets/images/old/shahids/جعفر دیدگاه.jpg", thumb: "./assets/images/old/shahids/جعفر دیدگاه.jpg",title:"شهید جعفر دیدگاه" },
    { url: "./assets/images/old/shahids/جلیل بستاک چاپلقی.jpg",thumb: "./assets/images/old/shahids/جلیل بستاک چاپلقی.jpg",title:"شهید جلیل بستاک چاپلقی" },
    { url: "./assets/images/old/shahids/جمشید پرند آور.jpg", thumb: "./assets/images/old/shahids/جمشید پرند آور.jpg",title:"شهید جمشید پرند آور" },
    { url: "./assets/images/old/shahids/جواد حمیدی.jpg",thumb: "./assets/images/old/shahids/جواد حمیدی.jpg",title:"شهید جواد حمیدی" },
    { url: "./assets/images/old/shahids/حبیب الله پرخاری.jpg", thumb: "./assets/images/old/shahids/حبیب الله پرخاری.jpg",title:"شهید حبیب الله پرخاری" },
    { url: "./assets/images/old/shahids/حبیب الله جمالی باقلعه.jpg",thumb: "./assets/images/old/shahids/حبیب الله جمالی باقلعه.jpg",title:"شهید حبیب الله جمالی باقلعه" },
    { url: "./assets/images/old/shahids/حسن اعتباریان.jpg", thumb: "./assets/images/old/shahids/حسن اعتباریان.jpg",title:"شهید حسن اعتباریان" },
    { url: "./assets/images/old/shahids/حسن تیموری.jpg",thumb: "./assets/images/old/shahids/حسن تیموری.jpg",title:"شهید حسن تیموری" },
    { url: "./assets/images/old/shahids/حسنعلی رمضانلو.jpg", thumb: "./assets/images/old/shahids/حسنعلی رمضانلو.jpg",title:"شهید حسنعلی رمضانلو" },
    { url: "./assets/images/old/shahids/حسین بیدکی.jpg",thumb: "./assets/images/old/shahids/حسین بیدکی.jpg",title:"شهید حسین بیدکی" },
    { url: "./assets/images/old/shahids/حسین پکدانی.jpg", thumb: "./assets/images/old/shahids/حسین پکدانی.jpg",title:"شهید حسین پکدانی" },
    { url: "./assets/images/old/shahids/حسین خاکباز.jpg",thumb: "./assets/images/old/shahids/حسین خاکباز.jpg",title:"شهید حسین خاکباز" },
    { url: "./assets/images/old/shahids/حسین رجایی.jpg", thumb: "./assets/images/old/shahids/حسین رجایی.jpg",title:"شهید حسین رجایی" },
    { url: "./assets/images/old/shahids/حسین روحی اصل.jpg",thumb: "./assets/images/old/shahids/حسین روحی اصل.jpg",title:"شهید حسین روحی اصل" },
    { url: "./assets/images/old/shahids/حمید چرمی قمصری.jpg", thumb: "./assets/images/old/shahids/حمید چرمی قمصری.jpg",title:"شهید حمید چرمی قمصری" },
    { url: "./assets/images/old/shahids/حمید حیدری.jpg",thumb: "./assets/images/old/shahids/حمید حیدری.jpg",title:"شهید حمید حیدری" },
    { url: "./assets/images/old/shahids/حیدر باصولی.jpg", thumb: "./assets/images/old/shahids/حیدر باصولی.jpg",title:"شهید حیدر باصولی" },
    { url: "./assets/images/old/shahids/خانعلی دهمرده.jpg",thumb: "./assets/images/old/shahids/خانعلی دهمرده.jpg",title:"شهید خانعلی دهمرده" },
    { url: "./assets/images/old/shahids/خداقلی رجب لو.jpg", thumb: "./assets/images/old/shahids/خداقلی رجب لو.jpg",title:"شهید خداقلی رجب لو" },
    { url: "./assets/images/old/shahids/داوود اسماعیل غلام.jpg",thumb: "./assets/images/old/shahids/داوود اسماعیل غلام.jpg",title:"شهید داوود اسماعیل غلام" },
    { url: "./assets/images/old/shahids/رئوف اهوازیان.jpg", thumb: "./assets/images/old/shahids/رئوف اهوازیان.jpg",title:"شهید رئوف اهوازیان" },
    { url: "./assets/images/old/shahids/رجبعلی چرخنده.jpg",thumb: "./assets/images/old/shahids/رجبعلی چرخنده.jpg",title:"شهید رجبعلی چرخنده" },
    { url: "./assets/images/old/shahids/رحیم بنیادی.jpg", thumb: "./assets/images/old/shahids/رحیم بنیادی.jpg",title:"شهید رحیم بنیادی" },
    { url: "./assets/images/old/shahids/رحیم حردانیان.jpg",thumb: "./assets/images/old/shahids/رحیم حردانیان.jpg",title:"شهید رحیم حردانیان" },
    { url: "./assets/images/old/shahids/رزاق اسمی پور اصل.jpg", thumb: "./assets/images/old/shahids/رزاق اسمی پور اصل.jpg",title:"شهید رزاق اسمی پور اصل" },
    { url: "./assets/images/old/shahids/رضا جهان تیغی.jpg",thumb: "./assets/images/old/shahids/رضا جهان تیغی.jpg",title:"شهید رضا جهان تیغی" },
    { url: "./assets/images/old/shahids/رضا حاجی پور.jpg", thumb: "./assets/images/old/shahids/رضا حاجی پور.jpg",title:"شهید رضا حاجی پور" },
    { url: "./assets/images/old/shahids/رمضانعلی دشتبانی.jpg",thumb: "./assets/images/old/shahids/رمضانعلی دشتبانی.jpg",title:"شهید رمضانعلی دشتبانی" },
    { url: "./assets/images/old/shahids/سید ابراهیم ابراهیمی.jpg", thumb: "./assets/images/old/shahids/سید ابراهیم ابراهیمی.jpg",title:"شهید سید ابراهیم ابراهیمی" },
    { url: "./assets/images/old/shahids/سید حسین بهشتی.jpg",thumb: "./assets/images/old/shahids/سید حسین بهشتی.jpg",title:"شهید سید حسین بهشتی" },
    { url: "./assets/images/old/shahids/سید ضیا حسین زاده.jpg", thumb: "./assets/images/old/shahids/سید ضیا حسین زاده.jpg",title:"شهید سید ضیا حسین زاده" },
    { url: "./assets/images/old/shahids/سید محمد حسین حسینی.jpg",thumb: "./assets/images/old/shahids/سید محمد حسین حسینی.jpg",title:"شهید سید محمد حسین حسینی" },
    { url: "./assets/images/old/shahids/سیف الله رودگاه.jpg", thumb: "./assets/images/old/shahids/سیف الله رودگاه.jpg",title:"شهید سیف الله رودگاه" },
    { url: "./assets/images/old/shahids/شعبانعلی دلپسند کیاسرایی.jpg",thumb: "./assets/images/old/shahids/شعبانعلی دلپسند کیاسرایی.jpg",title:"شهید شعبانعلی دلپسند کیاسرایی" },
    { url: "./assets/images/old/shahids/شهریار رضاپور.jpg", thumb: "./assets/images/old/shahids/شهریار رضاپور.jpg",title:"شهید شهریار رضاپور" },
    // { url: "./assets/images/old/shahids/صادق سردرودي.jpg",thumb: "./assets/images/old/shahids/صادق سردرودي.jpg",title:"شهید صادق سردرودي" },
    { url: "./assets/images/old/shahids/طاهر حمید.jpg", thumb: "./assets/images/old/shahids/طاهر حمید.jpg",title:"شهید طاهر حمید" },
    { url: "./assets/images/old/shahids/عبدالعلی روح الهی.jpg",thumb: "./assets/images/old/shahids/عبدالعلی روح الهی.jpg",title:"شهید عبدالعلی روح الهی" },
    { url: "./assets/images/old/shahids/عبدلحمید بن رشید.jpg", thumb: "./assets/images/old/shahids/عبدلحمید بن رشید.jpg",title:"شهید عبدلحمید بن رشید" },
    { url: "./assets/images/old/shahids/علی اصغر درستکاری.jpg",thumb: "./assets/images/old/shahids/علی اصغر درستکاری.jpg",title:"شهید علی اصغر درستکاری" },
    { url: "./assets/images/old/shahids/علی اکبر رجبی.jpg", thumb: "./assets/images/old/shahids/علی اکبر رجبی.jpg",title:"شهید علی اکبر رجبی" },
    { url: "./assets/images/old/shahids/علی باشی زنده پی.jpg",thumb: "./assets/images/old/shahids/علی باشی زنده پی.jpg",title:"شهید علی باشی زنده پی" },
    { url: "./assets/images/old/shahids/علی کرم رکنیان.jpg", thumb: "./assets/images/old/shahids/علی کرم رکنیان.jpg",title:"شهید علی کرم رکنیان" },
    { url: "./assets/images/old/shahids/عمران رهیده.jpg",thumb: "./assets/images/old/shahids/عمران رهیده.jpg",title:"شهید عمران رهیده" },


    

    { url: "./assets/images/old/shahids/عیسی بیگلری.jpg", thumb: "./assets/images/old/shahids/عیسی بیگلری.jpg",title:"شهید عیسی بیگلری" },
    { url: "./assets/images/old/shahids/غضیان رضایی مهر.jpg",thumb: "./assets/images/old/shahids/غضیان رضایی مهر.jpg",title:"شهید غضیان رضایی مهر" },
    { url: "./assets/images/old/shahids/غلامحسین زارع مویدی.jpg", thumb: "./assets/images/old/shahids/غلامحسین زارع مویدی.jpg",title:"شهید غلامحسین زارع مویدی" },
    // { url: "./assets/images/old/shahids/غلامرضا بوستانی مطلق.jpg",thumb: "./assets/images/old/shahids/غلامرضا بوستانی مطلق.jpg",title:"شهید غلامرضا بوستانی مطلق" },
    { url: "./assets/images/old/shahids/غلامرضا پشم فروش.jpg", thumb: "./assets/images/old/shahids/غلامرضا پشم فروش.jpg",title:"شهید غلامرضا پشم فروش" },
    { url: "./assets/images/old/shahids/فریبرز زارع.jpg",thumb: "./assets/images/old/shahids/فریبرز زارع.jpg",title:"شهید فریبرز زارع" },
    { url: "./assets/images/old/shahids/قاسم ترابی پور.jpg", thumb: "./assets/images/old/shahids/قاسم ترابی پور.jpg",title:"شهید قاسم ترابی پور" },
    { url: "./assets/images/old/shahids/قدرت الله حسنی.jpg",thumb: "./assets/images/old/shahids/قدرت الله حسنی.jpg",title:"شهید قدرت الله حسنی" },
    { url: "./assets/images/old/shahids/قنبر خادمی.jpg", thumb: "./assets/images/old/shahids/قنبر خادمی.jpg",title:"شهید قنبر خادمی" },
    { url: "./assets/images/old/shahids/کریم اسلانی.jpg",thumb: "./assets/images/old/shahids/کریم اسلانی.jpg",title:"شهید کریم اسلانی" },
    { url: "./assets/images/old/shahids/کریم به پور دخت تبریزی.jpg", thumb: "./assets/images/old/shahids/کریم به پور دخت تبریزی.jpg",title:"شهید کریم به پور دخت تبریزی" },
    { url: "./assets/images/old/shahids/کورش زارعی راستگو.jpg",thumb: "./assets/images/old/shahids/کورش زارعی راستگو.jpg",title:"شهید کورش زارعی راستگو" },
    { url: "./assets/images/old/shahids/گداعلی رضاپورثانی.jpg", thumb: "./assets/images/old/shahids/گداعلی رضاپورثانی.jpg",title:"شهید گداعلی رضاپورثانی" },
    { url: "./assets/images/old/shahids/گودرز بابادی.jpg",thumb: "./assets/images/old/shahids/گودرز بابادی.jpg",title:"شهید گودرز بابادی" },
    { url: "./assets/images/old/shahids/ماشالله رخشانپور.jpg", thumb: "./assets/images/old/shahids/ماشالله رخشانپور.jpg",title:"شهید ماشالله رخشانپور" },
    { url: "./assets/images/old/shahids/مجتبی آوری.jpg",thumb: "./assets/images/old/shahids/مجتبی آوری.jpg",title:"شهید مجتبی آوری" },
    { url: "./assets/images/old/shahids/محسن خراقی.jpg",thumb: "./assets/images/old/shahids/محسن خراقی.jpg",title:"شهید محسن خراقی" },
    { url: "./assets/images/old/shahids/محمد بلوچ.jpg", thumb: "./assets/images/old/shahids/محمد بلوچ.jpg",title:"شهید محمد بلوچ" },
    { url: "./assets/images/old/shahids/محمد بهزادپناه.jpg",thumb: "./assets/images/old/shahids/محمد بهزادپناه.jpg",title:"شهید محمد بهزادپناه" },
    { url: "./assets/images/old/shahids/محمد بیاتی.jpg", thumb: "./assets/images/old/shahids/محمد بیاتی.jpg",title:"شهید محمد بیاتی" },
    { url: "./assets/images/old/shahids/محمد پروین زاده.jpg",thumb: "./assets/images/old/shahids/محمد پروین زاده.jpg",title:"شهید محمد پروین زاده" },
    { url: "./assets/images/old/shahids/محمد تقی پناهی.jpg", thumb: "./assets/images/old/shahids/محمد تقی پناهی.jpg",title:"شهید محمد تقی پناهی" },
    { url: "./assets/images/old/shahids/محمد حسین جوان بالغ.jpg",thumb: "./assets/images/old/shahids/محمد حسین جوان بالغ.jpg",title:"شهید محمد حسین جوان بالغ" },
    { url: "./assets/images/old/shahids/محمد حسینی اردکلو.jpg", thumb: "./assets/images/old/shahids/محمد حسینی اردکلو.jpg",title:"شهید محمد حسینی اردکلو" },
    { url: "./assets/images/old/shahids/محمد خرمی پیروز.jpg",thumb: "./assets/images/old/shahids/محمد خرمی پیروز.jpg",title:"شهید محمد خرمی پیروز" },
    { url: "./assets/images/old/shahids/محمد رنجبر.jpg", thumb: "./assets/images/old/shahids/محمد رنجبر.jpg",title:"شهید محمد رنجبر" },
    { url: "./assets/images/old/shahids/محمدباقر حسین زاده گرمسیری.jpg",thumb: "./assets/images/old/shahids/محمدباقر حسین زاده گرمسیری.jpg",title:"شهید محمدباقر حسین زاده گرمسیری" },
    { url: "./assets/images/old/shahids/محمدرضا خدا آبادیان.jpg",thumb: "./assets/images/old/shahids/محمدرضا خدا آبادیان.jpg",title:"شهید محمدرضا خدا آبادیان" },
    { url: "./assets/images/old/shahids/محمدرضا رستگاری.jpg", thumb: "./assets/images/old/shahids/محمدرضا رستگاری.jpg",title:"شهید محمدرضا رستگاری" },
    { url: "./assets/images/old/shahids/محمدرضا رضوانی نوغانی.jpg",thumb: "./assets/images/old/shahids/محمدرضا رضوانی نوغانی.jpg",title:"شهید محمدرضا رضوانی نوغانی" },
    { url: "./assets/images/old/shahids/محمدعلی رضایی.jpg", thumb: "./assets/images/old/shahids/محمدعلی رضایی.jpg",title:"شهید محمدعلی رضایی" },
    { url: "./assets/images/old/shahids/مسعود خلعتی.jpg",thumb: "./assets/images/old/shahids/مسعود خلعتی.jpg",title:"شهید مسعود خلعتی" },
    { url: "./assets/images/old/shahids/مسعود روستا زاده.jpg", thumb: "./assets/images/old/shahids/مسعود روستا زاده.jpg",title:"شهید مسعود روستا زاده" },
    { url: "./assets/images/old/shahids/مصطفی تاک شهر.jpg",thumb: "./assets/images/old/shahids/مصطفی تاک شهر.jpg",title:"شهید مصطفی تاک شهر" },
    { url: "./assets/images/old/shahids/مهدی ذبیحی.jpg", thumb: "./assets/images/old/shahids/مهدی ذبیحی.jpg",title:"شهید مهدی ذبیحی" },
    { url: "./assets/images/old/shahids/موسی حاج محمدی.jpg",thumb: "./assets/images/old/shahids/موسی حاج محمدی.jpg",title:"شهید موسی حاج محمدی" },
    { url: "./assets/images/old/shahids/میثم حجابی.jpg",thumb: "./assets/images/old/shahids/میثم حجابی.jpg",title:"شهید میثم حجابی" },
    { url: "./assets/images/old/shahids/نبی الله رضایی.jpg", thumb: "./assets/images/old/shahids/نبی الله رضایی.jpg",title:"شهید نبی الله رضایی" },
    { url: "./assets/images/old/shahids/هاشم رودکی.jpg",thumb: "./assets/images/old/shahids/هاشم رودکی.jpg",title:"شهید هاشم رودکی" },
    { url: "./assets/images/old/shahids/وحید باقری.jpg", thumb: "./assets/images/old/shahids/وحید باقری.jpg",title:"شهید وحید باقری" },
    { url: "./assets/images/old/shahids/یحیی بیات.jpg",thumb: "./assets/images/old/shahids/یحیی بیات.jpg",title:"شهید یحیی بیات" },
    { url: "./assets/images/old/shahids/یداله پیدایش.jpg", thumb: "./assets/images/old/shahids/یداله پیدایش.jpg",title:"شهید یداله پیدایش" },
    { url: "./assets/images/old/shahids/یعقوب خردمند.jpg",thumb: "./assets/images/old/shahids/یعقوب خردمند.jpg",title:"شهید یعقوب خردمند" },
    { url: "./assets/images/old/shahids/یوسف بهروزی.jpg",thumb: "./assets/images/old/shahids/یوسف بهروزی.jpg",title:"شهید یوسف بهروزی" },

    { url: "./assets/images/old/shahids/ابراهیم پیرسیاهکل.jpg", thumb: "./assets/images/old/shahids/ابراهیم پیرسیاهکل.jpg",title:"شهید ابراهیم پیرسیاهکل" },
    { url: "./assets/images/old/shahids/ابراهیم حر آبادی.jpg",thumb: "./assets/images/old/shahids/ابراهیم حر آبادی.jpg",title:"شهید ابراهیم حر آبادی" },
    { url: "./assets/images/old/shahids/ابولفضل عباسی.jpg",thumb: "./assets/images/old/shahids/ابولفضل عباسی.jpg",title:"شهید ابولفضل عباسی" },
    // { url: "./assets/images/old/shahids/ابولقاسم تاجداران.jpg",thumb: "./assets/images/old/shahids/ابولقاسم تاجداران.jpg",title:"شهید ابولقاسم تاجداران" },
    { url: "./assets/images/old/shahids/احمد رخشانفر.jpg", thumb: "./assets/images/old/shahids/احمد رخشانفر.jpg",title:"شهیداحمد رخشانفر" },
    { url: "./assets/images/old/shahids/اسماعیل زهتابچی.jpg",thumb: "./assets/images/old/shahids/اسماعیل زهتابچی.jpg",title:"شهید اسماعیل زهتابچی" },
    { url: "./assets/images/old/shahids/حمید آگاه.jpg", thumb: "./assets/images/old/shahids/حمید آگاه.jpg",title:"شهیدحمید آگاه" },
    { url: "./assets/images/old/shahids/حمید رضا افتخاری نیا.jpg",thumb: "./assets/images/old/shahids/حمید رضا افتخاری نیا.jpg",title:"شهید حمید رضا افتخاری نیا" },
    { url: "./assets/images/old/shahids/حمید قهرمانی ارجاسبی.jpg",thumb: "./assets/images/old/shahids/حمید قهرمانی ارجاسبی.jpg",title:"شهید حمید قهرمانی ارجاسبی" },
    { url: "./assets/images/old/shahids/امیر دریاداردوم شهید محتاج.jpg",thumb: "./assets/images/old/shahids/امیر دریاداردوم شهید محتاج.jpg",title:"امیر دریاداردوم شهید محتاج" },  
    { url: "./assets/images/old/shahids/سعید محیط قرائی.jpg",thumb: "./assets/images/old/shahids/سعید محیط قرائی.jpg",title:"شهید سعید محیط قرائی" },
    { url: "./assets/images/old/shahids/سیامک درخشان.jpg",thumb: "./assets/images/old/shahids/سیامک درخشان.jpg",title:"شهید سیامک درخشان" },
    { url: "./assets/images/old/shahids/سید احمد میر ظفر جویان.jpg",thumb: "./assets/images/old/shahids/سید احمد میر ظفر جویان.jpg",title:"شهید سید احمد میر ظفر جویان" },
    { url: "./assets/images/old/shahids/علی اصغر معیری.jpg",thumb: "./assets/images/old/shahids/علی اصغر معیری.jpg",title:"شهید علی اصغر معیری" },
    { url: "    ‍",thumb: "./assets/images/old/shahids/علی زارع نعمتی.jpg",title:"شهید علی زارع نعمتی" },
    { url: "./assets/images/old/shahids/فرزین آقا جعفری.jpg",thumb: "./assets/images/old/shahids/فرزین آقا جعفری.jpg",title:"شهید فرزین آقا جعفری" },  
    { url: "./assets/images/old/shahids/فرشاد پاسدار.jpg", thumb: "./assets/images/old/shahids/فرشاد پاسدار.jpg",title:"شهید فرشاد پاسدار" },
    { url: "./assets/images/old/shahids/کاظم نظافت قره لو.jpg",thumb: "./assets/images/old/shahids/کاظم نظافت قره لو.jpg",title:"شهید کاظم نظافت قره لو" },
    { url: "./assets/images/old/shahids/محمد باقر اصغری.jpg",thumb: "./assets/images/old/shahids/محمد باقر اصغری.jpg",title:"شهید محمد باقر اصغری" },
    { url: "./assets/images/old/shahids/محمد علی صفا.jpg",thumb: "./assets/images/old/shahids/محمد علی صفا.jpg",title:"شهید محمد علی صفا" },
    { url: "./assets/images/old/shahids/محمد مختاری.jpg",thumb: "./assets/images/old/shahids/محمد مختاری.jpg",title:"شهید محمد مختاری" },
    { url: "./assets/images/old/shahids/محمدرضا مرادی ترشیزی.jpg",thumb: "./assets/images/old/shahids/محمدرضا مرادی ترشیزی.jpg",title:"شهید محمدرضا مرادی ترشیزی" },
    { url: "./assets/images/old/shahids/محمود رضا کوشا.jpg",thumb: "./assets/images/old/shahids/محمود رضا کوشا.jpg",title:"شهید محمود رضا کوشا" },
    { url: "./assets/images/old/shahids/آقامعلی میرزایی.jpg", thumb: "./assets/images/old/shahids/آقامعلی میرزایی.jpg",title:"شهید آقامعلی میرزایی" },
    { url: "./assets/images/old/shahids/ابراهیم سلیمی نبی.jpg",thumb: "./assets/images/old/shahids/ابراهیم سلیمی نبی.jpg",title:"شهید ابراهیم سلیمی نبی" },
    { url: "./assets/images/old/shahids/ابولحسن علیزاده باهمت.jpg",thumb: "./assets/images/old/shahids/ابولحسن علیزاده باهمت.jpg",title:"شهید ابولحسن علیزاده باهمت" },
    { url: "./assets/images/old/shahids/ابولفضل زینالی.jpg",thumb: "./assets/images/old/shahids/ابولفضل زینالی.jpg",title:"شهید ابولفضل زینالی" },
    { url: "./assets/images/old/shahids/ابولفضل شمالی.jpg",thumb: "./assets/images/old/shahids/ابولفضل شمالی.jpg",title:"شهید ابولفضل شمالی" },
    { url: "./assets/images/old/shahids/ابولقاسم لبافیان.jpg",thumb: "./assets/images/old/shahids/ابولقاسم لبافیان.jpg",title:"شهید ابولقاسم لبافیان" },
    { url: "./assets/images/old/shahids/ابولقاسم محمدی بیدهندی.jpg",thumb: "./assets/images/old/shahids/ابولقاسم محمدی بیدهندی.jpg",title:"شهید ابولقاسم محمدی بیدهندی" },
    { url: "./assets/images/old/shahids/احمد سید محسن.jpg",thumb: "./assets/images/old/shahids/احمد سید محسن.jpg",title:"شهید احمد سید محسن" },
    { url: "./assets/images/old/shahids/احمد شاه ولایتی.jpg",thumb: "./assets/images/old/shahids/احمد شاه ولایتی.jpg",title:"شهید احمد شاه ولایتی" },
    { url: "./assets/images/old/shahids/احمد شهبازی.jpg",thumb: "./assets/images/old/shahids/احمد شهبازی.jpg",title:"شهید احمد شهبازی" },
    { url: "./assets/images/old/shahids/احمد غفوری.jpg",thumb: "./assets/images/old/shahids/احمد غفوری.jpg",title:"شهید احمد غفوری" },
    { url: "./assets/images/old/shahids/احمد فتحی خاجانی.jpg",thumb: "./assets/images/old/shahids/احمد فتحی خاجانی.jpg",title:"شهید احمد فتحی خاجانی" },
    { url: "./assets/images/old/shahids/احمد گنجی.jpg",thumb: "./assets/images/old/shahids/احمد گنجی.jpg",title:"شهید احمد گنجی" },
    { url: "./assets/images/old/shahids/احمد مرادی.jpg", thumb: "./assets/images/old/shahids/احمد مرادی.jpg",title:"شهید احمد مرادی" },
    { url: "./assets/images/old/shahids/احمد مسعودی.jpg",thumb: "./assets/images/old/shahids/احمد مسعودی.jpg",title:"شهید احمد مسعودی" },
    { url: "./assets/images/old/shahids/احمد منفرد پور.jpg",thumb: "./assets/images/old/shahids/احمد منفرد پور.jpg",title:"شهید احمد منفرد پور" },
    { url: "./assets/images/old/shahids/احمد مهرابی.jpg",thumb: "./assets/images/old/shahids/احمد مهرابی.jpg",title:"شهید احمد مهرابی" },
    { url: "./assets/images/old/shahids/احمد مولود دوم محمودی نژاد.jpg",thumb: "./assets/images/old/shahids/احمد مولود دوم محمودی نژاد.jpg",title:"شهید احمد مولود دوم محمودی نژاد" },
    { url: "./assets/images/old/shahids/احمد واحدی پور.jpg",thumb: "./assets/images/old/shahids/احمد واحدی پور.jpg",title:"شهید احمد واحدی پور" },
    { url: "./assets/images/old/shahids/اردلان محمدی مزرعه.jpg",thumb: "./assets/images/old/shahids/اردلان محمدی مزرعه.jpg",title:"شهید اردلان محمدی مزرعه" },
    { url: "./assets/images/old/shahids/اسماعیل شعبانی.jpg",thumb: "./assets/images/old/shahids/اسماعیل شعبانی.jpg",title:"شهید اسماعیل شعبانی" },
    { url: "./assets/images/old/shahids/اصغر شکوهی پاک.jpg",thumb: "./assets/images/old/shahids/اصغر شکوهی پاک.jpg",title:"شهید اصغر شکوهی پاک" },
    { url: "./assets/images/old/shahids/اصغر شکوهی.jpg",thumb: "./assets/images/old/shahids/اصغر شکوهی.jpg",title:"شهید اصغر شکوهی" },
    { url: "./assets/images/old/shahids/اصغر قلندری سیاه اسطلخی.jpg",thumb: "./assets/images/old/shahids/اصغر قلندری سیاه اسطلخی.jpg",title:"شهید اصغر قلندری سیاه اسطلخی" },
    { url: "./assets/images/old/shahids/التفات زینال زاده.jpg",thumb: "./assets/images/old/shahids/التفات زینال زاده.jpg",title:"شهید التفات زینال زاده" },
    { url: "./assets/images/old/shahids/امیر ولیدآبادی.jpg",thumb: "./assets/images/old/shahids/امیر ولیدآبادی.jpg",title:"شهید امیر ولیدآبادی" },
    { url: "./assets/images/old/shahids/باقر صفری نودهی.jpg",thumb: "./assets/images/old/shahids/باقر صفری نودهی.jpg",title:"شهید باقر صفری نودهی" },
    { url: "./assets/images/old/shahids/بهروز قهرمانی.jpg",thumb: "./assets/images/old/shahids/بهروز قهرمانی.jpg",title:"شهید بهروز قهرمانی" },
    { url: "./assets/images/old/shahids/بهنام سلیمی.jpg", thumb: "./assets/images/old/shahids/بهنام سلیمی.jpg",title:"شهید بهنام سلیمی" },
    { url: "./assets/images/old/shahids/پرویز مهرجو.jpg",thumb: "./assets/images/old/shahids/پرویز مهرجو.jpg",title:"شهید پرویز مهرجو" },
    { url: "./assets/images/old/shahids/جمال صالحی کارونیان.jpg",thumb: "./assets/images/old/shahids/جمال صالحی کارونیان.jpg",title:"شهید جمال صالحی کارونیان" },
    { url: "./assets/images/old/shahids/جمشید شریفی.jpg",thumb: "./assets/images/old/shahids/جمشید شریفی.jpg",title:"شهید جمشید شریفی" },
    { url: "./assets/images/old/shahids/جمشید قهرکی.jpg",thumb: "./assets/images/old/shahids/جمشید قهرکی.jpg",title:"شهید جمشید قهرکی" },
    { url: "./assets/images/old/shahids/حاجی خان نوریزاده.jpg",thumb: "./assets/images/old/shahids/حاجی خان نوریزاده.jpg",title:"شهید حاجی خان نوریزاده" },
    { url: "./assets/images/old/shahids/حبیب الله طاهری.jpg",thumb: "./assets/images/old/shahids/حبیب الله طاهری.jpg",title:"شهید حبیب الله طاهری" },
    { url: "./assets/images/old/shahids/حبیب الله معمار.jpg",thumb: "./assets/images/old/shahids/حبیب الله معمار.jpg",title:"شهید حبیب الله معمار" },
    { url: "./assets/images/old/shahids/حبیب کوهینی.jpg",thumb: "./assets/images/old/shahids/حبیب کوهینی.jpg",title:"شهید حبیب کوهینی" },
    { url: "./assets/images/old/shahids/حجت الله قاسمی.jpg",thumb: "./assets/images/old/shahids/حجت الله قاسمی.jpg",title:"شهید حجت الله قاسمی" },
    { url: "./assets/images/old/shahids/حسنعلی نورسیده.jpg",thumb: "./assets/images/old/shahids/حسنعلی نورسیده.jpg",title:"شهید حسنعلی نورسیده" },
    { url: "./assets/images/old/shahids/حسین شادفر.jpg",thumb: "./assets/images/old/shahids/حسین شادفر.jpg",title:"شهید حسین شادفر" },
    { url: "./assets/images/old/shahids/حسین شبانی.jpg",thumb: "./assets/images/old/shahids/حسین شبانی.jpg",title:"شهید حسین شبانی" },
    { url: "./assets/images/old/shahids/حسین صدرخسروی.jpg",thumb: "./assets/images/old/shahids/حسین صدرخسروی.jpg",title:"شهید حسین صدرخسروی" },
    { url: "./assets/images/old/shahids/حسین عسکرنژاد.jpg",thumb: "./assets/images/old/shahids/حسین عسکرنژاد.jpg",title:"شهید حسین عسکرنژاد" },
    { url: "./assets/images/old/shahids/حسین غفوری.jpg",thumb: "./assets/images/old/shahids/حسین غفوری.jpg",title:"شهید  سید حسین غفوری" },
    { url: "./assets/images/old/shahids/حسین فروغی پور.jpg", thumb: "./assets/images/old/shahids/حسین فروغی پور.jpg",title:"شهید حسین فروغی پور" },
    { url: "./assets/images/old/shahids/حسین قلندری.jpg",thumb: "./assets/images/old/shahids/حسین قلندری.jpg",title:"شهید حسین قلندری" },
    { url: "./assets/images/old/shahids/حسین قیصری.jpg",thumb: "./assets/images/old/shahids/حسین قیصری.jpg",title:"شهید حسین قیصری" },
    { url: "./assets/images/old/shahids/حسین محسن غیشاوی.jpg",thumb: "./assets/images/old/shahids/حسین محسن غیشاوی.jpg",title:"شهید حسین محسن غیشاوی" },
    { url: "./assets/images/old/shahids/حسین مهنانی.jpg",thumb: "./assets/images/old/shahids/حسین مهنانی.jpg",title:"شهید حسین مهنانی" },
    { url: "./assets/images/old/shahids/حسین میرزائی.jpg",thumb: "./assets/images/old/shahids/حسین میرزائی.jpg",title:"شهید حسین میرزائی" },
    { url: "./assets/images/old/shahids/حمید صابری.jpg",thumb: "./assets/images/old/shahids/حمید صابری.jpg",title:"شهید حمید صابری" },
    { url: "./assets/images/old/shahids/حمید محبی پور.jpg",thumb: "./assets/images/old/shahids/حمید محبی پور.jpg",title:"شهید حمید محبی پور" },
    { url: "./assets/images/old/shahids/حمید یادگار اسلامی.jpg",thumb: "./assets/images/old/shahids/حمید یادگار اسلامی.jpg",title:"شهید حمید یادگار اسلامی" },
    { url: "./assets/images/old/shahids/خدابخش ملک محمدی.jpg",thumb: "./assets/images/old/shahids/خدابخش ملک محمدی.jpg",title:"شهید خدابخش ملک محمدی" },
    { url: "./assets/images/old/shahids/خداکرم مرادی.jpg",thumb: "./assets/images/old/shahids/خداکرم مرادی.jpg",title:"شهید خداکرم مرادی" },
    { url: "./assets/images/old/shahids/خدر صیدالی.jpg",thumb: "./assets/images/old/shahids/خدر صیدالی.jpg",title:"شهید خدر صیدالی" },
    { url: "./assets/images/old/shahids/خیرالله کریمی.jpg",thumb: "./assets/images/old/shahids/خیرالله کریمی.jpg",title:"شهید خیرالله کریمی" },
    { url: "./assets/images/old/shahids/دشتی ساسانی.jpg",thumb: "./assets/images/old/shahids/دشتی ساسانی.jpg",title:"شهید دشتی ساسانی" },
    { url: "./assets/images/old/shahids/رجبعلی کاری جعفری.jpg",thumb: "./assets/images/old/shahids/رجبعلی کاری جعفری.jpg",title:"شهید رجبعلی کاری جعفری" },
    { url: "./assets/images/old/shahids/رحمت الله مزارعی.jpg",thumb: "./assets/images/old/shahids/رحمت الله مزارعی.jpg",title:"شهید رحمت الله مزارعی" },
    { url: "./assets/images/old/shahids/رحمت ملایی جفرودی.jpg",thumb: "./assets/images/old/shahids/رحمت ملایی جفرودی.jpg",title:"شهید رحمت ملایی جفرودی" },
    { url: "./assets/images/old/shahids/رحیم صادقی آشتیانی.jpg",thumb: "./assets/images/old/shahids/رحیم صادقی آشتیانی.jpg",title:"شهید رحیم صادقی آشتیانی" },
    { url: "./assets/images/old/shahids/رسول محمدی آبیز.jpg", thumb: "./assets/images/old/shahids/رسول محمدی آبیز.jpg",title:"شهید رسول محمدی آبیز" },
    { url: "./assets/images/old/shahids/رشید صیدگر.jpg",thumb: "./assets/images/old/shahids/رشید صیدگر.jpg",title:"شهید رشید صیدگر" },
    { url: "./assets/images/old/shahids/رضا سلطانی.jpg",thumb: "./assets/images/old/shahids/رضا سلطانی.jpg",title:"شهید رضا سلطانی" },
    { url: "./assets/images/old/shahids/رضا عطاردی.jpg",thumb: "./assets/images/old/shahids/رضا عطاردی.jpg",title:"شهید رضا عطاردی" },
    { url: "./assets/images/old/shahids/رضا فلاح احمدزاده.jpg",thumb: "./assets/images/old/shahids/رضا فلاح احمدزاده.jpg",title:"شهید رضا فلاح احمدزاده" },
    { url: "./assets/images/old/shahids/رضا موسوی پور.jpg",thumb: "./assets/images/old/shahids/رضا موسوی پور.jpg",title:"شهید رضا موسوی پور" },
    { url: "./assets/images/old/shahids/رضاقلی شهسواری.jpg",thumb: "./assets/images/old/shahids/رضاقلی شهسواری.jpg",title:"شهید رضاقلی شهسواری" },
    { url: "./assets/images/old/shahids/رمضان سراج.jpg",thumb: "./assets/images/old/shahids/رمضان سراج.jpg",title:"شهید رمضان سراج" },
    { url: "./assets/images/old/shahids/رمضان لری نیاکرانی.jpg",thumb: "./assets/images/old/shahids/رمضان لری نیاکرانی.jpg",title:"شهید رمضان لری نیاکرانی" },
    { url: "./assets/images/old/shahids/زمان کاظم نژاد.jpg",thumb: "./assets/images/old/shahids/زمان کاظم نژاد.jpg",title:"شهید زمان کاظم نژاد" },
    { url: "./assets/images/old/shahids/سبزعلی عابدیان شهرکی.jpg",thumb: "./assets/images/old/shahids/سبزعلی عابدیان شهرکی.jpg",title:"شهید سبزعلی عابدیان شهرکی" },
    { url: "./assets/images/old/shahids/سعید سلیمانی.jpg",thumb: "./assets/images/old/shahids/سعید سلیمانی.jpg",title:"شهید سعید سلیمانی" },
    { url: "./assets/images/old/shahids/سعید عطاری.jpg",thumb: "./assets/images/old/shahids/سعید عطاری.jpg",title:"شهید سعید عطاری" },
    { url: "./assets/images/old/shahids/سعید مظاهری تیرانی.jpg",thumb: "./assets/images/old/shahids/سعید مظاهری تیرانی.jpg",title:"شهید سعید مظاهری تیرانی" },
    { url: "./assets/images/old/shahids/سهراب سلامی.jpg",thumb: "./assets/images/old/shahids/سهراب سلامی.jpg",title:"شهید سهراب سلامی" },
    { url: "./assets/images/old/shahids/سید مصطفی عزیزی.jpg",thumb: "./assets/images/old/shahids/سید مصطفی عزیزی.jpg",title:"شهید سید مصطفی عزیزی" },
    { url: "./assets/images/old/shahids/سیدتوفیق موسوی.jpg",thumb: "./assets/images/old/shahids/سیدتوفیق موسوی.jpg",title:"شهید سیدتوفیق موسوی" },
    { url: "./assets/images/old/shahids/سیدمحمود موسوی زاده.jpg",thumb: "./assets/images/old/shahids/سیدمحمود موسوی زاده.jpg",title:"شهید سیدمحمود موسوی زاده" },
    { url: "./assets/images/old/shahids/سیف الله نجفی.jpg",thumb: "./assets/images/old/shahids/سیف الله نجفی.jpg",title:"شهید سیف الله نجفی" },
    { url: "./assets/images/old/shahids/شاهپور محمدی.jpg",thumb: "./assets/images/old/shahids/شاهپور محمدی.jpg",title:"شهید شاهپور محمدی" },
    { url: "./assets/images/old/shahids/شعبانعلی واله آزادی.jpg",thumb: "./assets/images/old/shahids/شعبانعلی واله آزادی.jpg",title:"شهید شعبانعلی واله آزادی" },
    { url: "./assets/images/old/shahids/شنبه صادقی زلفی.jpg",thumb: "./assets/images/old/shahids/شنبه صادقی زلفی.jpg",title:"شهید شنبه صادقی زلفی" },
    { url: "./assets/images/old/shahids/صفرعلی میزاشایان.jpg",thumb: "./assets/images/old/shahids/صفرعلی میزاشایان.jpg",title:"شهید صفرعلی میزاشایان" },
    { url: "./assets/images/old/shahids/طالب فیوج فغانی.jpg",thumb: "./assets/images/old/shahids/طالب فیوج فغانی.jpg",title:"شهید طالب فیوج فغانی" },
    { url: "./assets/images/old/shahids/ظهراب وظیفه دان.jpg",thumb: "./assets/images/old/shahids/ظهراب وظیفه دان.jpg",title:"شهید ظهراب وظیفه دان" },
    { url: "./assets/images/old/shahids/عباس شاهوردی.jpg",thumb: "./assets/images/old/shahids/عباس شاهوردی.jpg",title:"شهید عباس شاهوردی" },
    { url: "./assets/images/old/shahids/عباس قلعه حق.jpg",thumb: "./assets/images/old/shahids/عباس قلعه حق.jpg",title:"شهید عباس قلعه حق" },
    { url: "./assets/images/old/shahids/عباس مفخمی.jpg",thumb: "./assets/images/old/shahids/عباس مفخمی.jpg",title:"شهید عباس مفخمی" },
    { url: "./assets/images/old/shahids/عباس میرکاظمی.jpg",thumb: "./assets/images/old/shahids/عباس میرکاظمی.jpg",title:"شهید عباس میرکاظمی" },
    { url: "./assets/images/old/shahids/عباس میرمعینی.jpg",thumb: "./assets/images/old/shahids/عباس میرمعینی.jpg",title:"شهید عباس میرمعینی" },
    { url: "./assets/images/old/shahids/عباسعلی نصراله زاده.jpg",thumb: "./assets/images/old/shahids/عباسعلی نصراله زاده.jpg",title:"شهید عباسعلی نصراله زاده" },
    { url: "./assets/images/old/shahids/عبدالحسین محمدطاهری.jpg",thumb: "./assets/images/old/shahids/عبدالحسین محمدطاهری.jpg",title:"شهید عبدالحسین محمدطاهری" },
    { url: "./assets/images/old/shahids/عبدالرسول عزیزی.jpg",thumb: "./assets/images/old/shahids/عبدالرسول عزیزی.jpg",title:"شهید عبدالرسول عزیزی" },
    { url: "./assets/images/old/shahids/عبدالرضا فارسی مرودشتی.jpg",thumb: "./assets/images/old/shahids/عبدالرضا فارسی مرودشتی.jpg",title:"شهید عبدالرضا فارسی مرودشتی" },

    { url: "./assets/images/old/shahids/عبدالرضا مجردی.jpg",thumb: "./assets/images/old/shahids/عبدالرضا مجردی.jpg",title:"شهید عبدالرضا مجردی" },
    { url: "./assets/images/old/shahids/عبدالعلی قاسمی بنه.jpg",thumb: "./assets/images/old/shahids/عبدالعلی قاسمی بنه.jpg",title:"شهید عبدالعلی قاسمی بنه" },
    { url: "./assets/images/old/shahids/عبدالله شکری.jpg",thumb: "./assets/images/old/shahids/عبدالله شکری.jpg",title:"شهید عبدالله شکری" },
    { url: "./assets/images/old/shahids/عزیز عزیزی.jpg",thumb: "./assets/images/old/shahids/عزیز عزیزی.jpg",title:"شهید عزیز عزیزی" },
    { url: "./assets/images/old/shahids/علی اصغر سلیمانی.jpg",thumb: "./assets/images/old/shahids/علی اصغر سلیمانی.jpg",title:"شهید علی اصغر سلیمانی" },
    { url: "./assets/images/old/shahids/علی اصغر محبی چوکانی.jpg",thumb: "./assets/images/old/shahids/علی اصغر محبی چوکانی.jpg",title:"شهید علی اصغر محبی چوکانی" },
    { url: "./assets/images/old/shahids/علی اصغر نظری.jpg",thumb: "./assets/images/old/shahids/علی اصغر نظری.jpg",title:"شهید علی اصغر نظری" },
    { url: "./assets/images/old/shahids/علی اکبر زندی.jpg",thumb: "./assets/images/old/shahids/علی اکبر زندی.jpg",title:"شهید علی اکبر زندی" },
    { url: "./assets/images/old/shahids/علی اکبر محمدزاده.jpg",thumb: "./assets/images/old/shahids/علی اکبر محمدزاده.jpg",title:"شهید علی اکبر محمدزاده" },
    { url: "./assets/images/old/shahids/علی زنگویی فرد.jpg",thumb: "./assets/images/old/shahids/علی زنگویی فرد.jpg",title:"شهید علی زنگویی فرد" },
    { url: "./assets/images/old/shahids/علی شادی ترقان.jpg",thumb: "./assets/images/old/shahids/علی شادی ترقان.jpg",title:"شهید علی شادی ترقان" },
    { url: "./assets/images/old/shahids/علی شایق.jpg",thumb: "./assets/images/old/shahids/علی شایق.jpg",title:"شهید علی شایق" },
    { url: "./assets/images/old/shahids/علی صالحی.jpg",thumb: "./assets/images/old/shahids/علی صالحی.jpg",title:"شهید علی صالحی" },
    { url: "./assets/images/old/shahids/علی عارفی بصیر.jpg",thumb: "./assets/images/old/shahids/علی عارفی بصیر.jpg",title:"شهید علی عارفی بصیر" },
    { url: "./assets/images/old/shahids/علی عبدالهی نانواپیشه.jpg",thumb: "./assets/images/old/shahids/علی عبدالهی نانواپیشه.jpg",title:"شهید علی عبدالهی نانواپیشه" },
    { url: "./assets/images/old/shahids/علی قنبر.jpg",thumb: "./assets/images/old/shahids/علی قنبر.jpg",title:"شهید علی قنبر" },
    { url: "./assets/images/old/shahids/علی کریمیان.jpg",thumb: "./assets/images/old/shahids/علی کریمیان.jpg",title:"شهید علی کریمیان" },


 
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
            //   { url: "./assets/images/old/IMG_3512.jpg",thumb: "./old/IMG_3512.jpg",title:"دفاع مقدس" },
            //   { url: "./assets/images/old/IMG_3581.jpg",thumb: "./old/IMG_3581.jpg",title:"دفاع مقدس" },
            //   { url: "./assets/images/old/IMG_4197.jpg",thumb: "./old/IMG_4197.jpg",title:"دفاع مقدس" },
            //   { url: "./assets/images/old/IMG_4269.jpg",thumb: "./old/IMG_4269.jpg",title:"دفاع مقدس" },
            //   { url: "./assets/images/old/IMG_4318.jpg",thumb: "./old/IMG_4318.jpg",title:"دفاع مقدس" },
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
            //   { url: "./assets/images/old/Hafte_Defa'_Moghadas_Behesht.info.jpg",thumb: "./old/Hafte_Defa'_Moghadas_Behesht.info.jpg",title:"متفرقه" },
            //   { url: "./assets/images/old/shahid.jpg",thumb: "./old/shahid.jpg",title:"متفرقه" },
            //   { url: "./assets/images/old/shohada1.jpg",thumb: "./old/shohada1.jpg",title:"متفرقه" },
            //   { url: "./assets/images/old/defa-nagsh.ir-37.jpg",thumb: "./old/defa-nagsh.ir-37.jpg",title:"متفرقه" },
            //   { url: "./assets/images/old/defe-moghadas-copy.jpg",thumb: "./old/defe-moghadas-copy.jpg",title:"متفرقه" },
            //   { url: "./assets/images/old/87.jpg",thumb: "./old/87.jpg",title:"متفرقه" },
            //   { url: "./assets/images/old/5984_orig.jpg",thumb: "./old/5984_orig.jpg",title:"متفرقه" },
            //   { url: "./assets/images/old/562311251322121821286310269241641796415191.jpg",thumb: "./old/562311251322121821286310269241641796415191.jpg",title:"متفرقه" },
              
              


              



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