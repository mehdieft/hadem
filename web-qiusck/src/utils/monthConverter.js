export default function monthConverter(month){
let monthName=''

   if(month ==1){
    monthName=" فروردین  "  

   }if(month ==2){return"  اردیبهشت   "
   }if(month ==3){return"  خرداد  "

   }if(month ==4){return"  تیر  " 

   }if(month ==5){return"  مرداد    "

   }if(month ==6){return"   شهریور   " 

   }if(month ==7){return"   مهر   "

   }if(month ==8){return"   آبان  "

   }if(month ==9){return"   آذر  "  

   }if(month ==10){return"  دی  "

   }if(month ==11){return"  بهمن  "

   }if(month ==12){return"  اسفند  "

   }else{
    monthName=''
   }
   return monthName

}