export default function monthConverter(month){
let monthName=''

   if(month ==1){
    monthName="فرویردین"

   }if(month ==2){
monthName="اردیبهشت"
   }if(month ==3){monthName="خرداد"

   }if(month ==4){monthName="تیر"

   }if(month ==5){monthName="مرداد"

   }if(month ==6){monthName="شهریور"

   }if(month ==7){monthName="مهر"

   }if(month ==8){monthName="آبان"

   }if(month ==9){monthName="آذر"

   }if(month ==10){monthName="دی"

   }if(month ==11){monthName="بهمن "

   }if(month ==12){monthName="اسفند"

   }else{
    monthName=''
   }
   return monthName

}