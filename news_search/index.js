
let apikey= "b6715dd951724bb3ad0ccbeb0c9638c5";
const url= (`https://newsapi.org/v2/everything?q=tesla&from=2024-04-30&sortBy=publishedAt&apiKey=${apikey}`);

// async function getdata(){
// const response= await fetch(url);
// const data= await response.json();
// console.log(data);
// }
// getdata()


fetch("https://newsapi.org/v2/everything?q=tesla&from=2024-04-30&sortBy=publishedAt&apiKey=b6715dd951724bb3ad0ccbeb0c9638c5").then((response)=>{
     return response.json();
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.error("error");
})
