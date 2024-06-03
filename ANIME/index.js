
 async function getdata(){
const response = await fetch("https://ai-art-maker.p.rapidapi.com/remix-art~");
    const data = await response.json();
    console.log(data);

}

getdata();