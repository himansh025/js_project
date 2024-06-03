let btn1=document.getElementById("btn");
let input1=document.getElementById("input");
let apikey="b5241457036d4b3ed7062a07616fc0b0";
let apiurl= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";






// async function details(city){
//     let response=  await fetch(apiurl + city + `&appid=${apikey}`);
//     console.log(response);
//     let data= await response.json();
//     console.log(data);
// }

btn1.addEventListener("click",() =>{
    let cityname = input1.value;
    
    // for async function
//    details(cityname); 

// for promises
getdetails(cityname)
}
)

function getdetails(city){
     return new Promise( function( resolve,reject){
   fetch(apiurl+city+`&appid=${apikey}`)
    .then(response=>{
        if(!response.ok){
            throw new Error(`response is not get`)
        }
        return response.json()
    }).then(data=>{
        console.log(data);
        resolve(data)
    }).catch(data=>{
        console.log("error");
        reject("error")});
    }).then(()=>{
        console.log("promise is consumed");
    }).catch(()=>{
        console.log("error");
    });
    }
