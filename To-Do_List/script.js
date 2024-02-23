const input=document.querySelector("#input");
const listcontainer=document.querySelector("#list");

function addtask(){
    if(input.value==="")
    {
        alert("Please Enter any task");
    }
    else{
        let li= document.createElement("li");
        li.innerHTML=input.value;
        li.style.backgroundColor="gray";
        listcontainer.appendChild(li);
        let span =document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    input.value="";
}

listcontainer.addEventListener("click",function(e)
{
    if( e.target.tagName==="li"){
        e.target.list.toggle("checked");
    }
else if (e.target.tagName==="span"){
    e.target.parentElement.remove();

}   
},false)