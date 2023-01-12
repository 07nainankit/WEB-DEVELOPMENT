//exersize for event listner
// let box=document.getElementById("box");
// box.addEventListener("click",function(){
//     box.innerText+="i want ot open the box";
// })

//we will store data in array
let myLeads=[];

//let const -> are dependent on cases
const inputEl=document.getElementById("input-el");
const inputbtn=document.getElementById("input");
const ulEl= document.getElementById("ul-el");

inputbtn.addEventListener("click",function(){
    // console.log("button clicked");
    myLeads.push(inputEl.value);
    inputEl.value="";
    renderLeads();
})

function renderLeads(){
    let listItems="";
    for(let i=0;i < myLeads.length;i++){
        //create html using js
        // ulEl.innerHTML +="<li>"+ myLeads[i]+"</li>";
        listItems+="<li>"+ myLeads[i]+"</li>";
    }
    ulEl.innerHTML=listItems;
}
