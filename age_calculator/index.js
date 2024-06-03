let userinput = document.getElementById("date");
userinput.max = new Date().toISOString().split("T")[0];
let btn= document.querySelector("button");
function calculateage(){
    let birthdate = new Date(userinput.value);
    let date = birthdate.getDate();
    let month = birthdate.getMonth() +1;
    let year = birthdate.getFullYear();

    let today= new Date();
    let date2 = birthdate.getDate();
    let month2 = birthdate.getMonth() +1;
    let year2 = birthdate.getFullYear();

    let d3,m3,y3;
    y3 = year2 - year;
     if(month2>= month)
     {
        m3 = month2 - month ;

     }
     else{
        y3--;
        m3 = 12+month2 - month;
         }
         if(date2 >= date)
         {
            d3= d2 - d1;
         }
         else{
            m3 --;
            d3 getdaysinmonth(year,month,0).getDate();
         }

        }


        function getdaysinmonth(){

        }

// btn.addEventListener("click",(){
    

// })