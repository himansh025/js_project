let quote= "https://api.quotable.io/random";
        let author =document.getElementById("author");
        let add=document.querySelector("blockquote");
        async function getquote(url){
            const response = await fetch(url);
            var data = await response.json();
            // console.log(data);
add.innerHTML=data.content;
author.innerHTML=data.author;

        }
        getquote(quote);

        
function postontweeter(){
    window.open("https://twitter.com/intent/tweet?text=" + add.innerHTML+ "       -----by "+ author.innerHTML,"tweet Window","width=600,height=300")

}