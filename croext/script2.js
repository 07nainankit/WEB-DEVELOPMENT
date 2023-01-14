//exersize for event listner
// let box=document.getElementById("box");
// box.addEventListener("click",function(){
//     box.innerText+="i want ot open the box";
// })

//we will store data in array
let myLeads=[];

//let const -> are dependent on cases
const inputEl=document.getElementById("input-el");
const inputbtn=document.getElementById("input-btn");
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
        
        // listItems+="<li>"+ myLeads[i]+"</li>";
        // listItems+="<li>"+"<a href='"+ myLeads[i]+"' target='_blank'>"+ myLeads[i]+"</a>"+"</li>";
       
        //template strings
        listItems+=`
                <li>
                    <a href='${myLeads[i]}' target='_blank'>
                             ${myLeads[i]}
                    </a>           
                </li>`;
        
        //process explained bellow
        // const li = document.createElement("li");
        // li.textContent=myLeads[i];
        // ulEl.append(li)
    }
    ulEl.innerHTML=listItems;
}

// inner html use example
const container=document.getElementById("container");
container.innerHTML="<button>buy</button>"
container.addEventListener("click",function(){
    container.textContent+=" thanky for buy"
})

//template string
// const heart1="hippo 🦛";
// const heart2="orangutan 🦧";

// const msg =`sorry sorry sorry
//             ${heart2}
//             ki loga jan kya 
//             sorry sorry sorry
//             ${heart1}
//             i love u yr haa!
//         `;

