let boxes = document.querySelectorAll(".box");
let box1=document.querySelector("#box1");
let box2=document.querySelector("#box2");
let box3=document.querySelector("#box3");
let box4=document.querySelector("#box4");
let box5=document.querySelector("#box5");
let box6=document.querySelector("#box6");
let box7=document.querySelector("#box7");
let box8=document.querySelector("#box8");
let box9=document.querySelector("#box9");
let winner=document.querySelector(".winner");
let prompt=document.querySelector(".prompt");
const font=prompt.innerText;
let turn = 1;
boxes.forEach(box => {
box.addEventListener("click", () => {
if (box.innerText === "") { 
if (turn % 2 !== 0) {
box.innerText = "X";
} else if (turn %2==0) {
box.innerText = "O";
} 
if (box1.innerText.trim()!="" && box1.innerText===box2.innerText && box2.innerText===box3.innerText){
    winner.style.display="block";
    prompt.innerText=font;
    prompt.textContent=prompt.innerText + " " + box1.innerText;
    boxes.forEach(box=> {
        box.disabled="true";
        reset.disabled="true";
});
}
else if (box4.innerText.trim()!="" && box4.innerText===box5.innerText && box5.innerText===box6.innerText){
    winner.style.display="block";
    prompt.innerText=font;
    prompt.textContent=prompt.innerText + " " + box4.innerText;
    boxes.forEach(box=> {
        box.disabled="true";
        reset.disabled="true";
});
}
else if (box7.innerText.trim()!="" && box7.innerText===box8.innerText && box8.innerText===box9.innerText){
    winner.style.display="block";
    prompt.innerText=font;
    prompt.textContent=prompt.innerText + " " + box7.innerText;
    boxes.forEach(box=> {
        box.disabled="true";
        reset.disabled="true";
});
}
else if (box1.innerText.trim()!="" && box1.innerText===box4.innerText && box4.innerText===box7.innerText){
    winner.style.display="block";
    prompt.innerText=font;
    prompt.textContent=prompt.innerText + " " + box1.innerText;
    boxes.forEach(box=> {
        box.disabled="true";
        reset.disabled="true";
});
}
else if (box2.innerText.trim()!="" && box2.innerText===box5.innerText && box5.innerText===box8.innerText){
    winner.style.display="block";
    prompt.innerText=font;
    prompt.textContent=prompt.innerText + " " + box2.innerText;
    boxes.forEach(box=> {
        box.disabled="true";
        reset.disabled="true";
});
}
else if (box3.innerText.trim()!="" && box3.innerText===box6.innerText && box6.innerText===box9.innerText){
    winner.style.display="block";
    prompt.innerText=font;
    prompt.textContent=prompt.innerText + " " + box3.innerText;
    boxes.forEach(box=> {
        box.disabled="true";
        reset.disabled="true";
});
}
else if (box1.innerText.trim()!="" && box1.innerText===box5.innerText && box5.innerText===box9.innerText){
    winner.style.display="block";
    prompt.innerText=font;
    prompt.textContent=prompt.innerText + " " + box1.innerText;
    boxes.forEach(box=> {
        box.disabled="true";
        reset.disabled="true";
});
}
else if (box3.innerText.trim()!="" && box3.innerText===box5.innerText && box5.innerText===box7.innerText){
    winner.style.display="block";
    prompt.innerText=font;
    prompt.textContent=prompt.innerText + " " + box3.innerText;
    boxes.forEach(box=> {
        box.disabled="true";
        reset.disabled="true";
});
}
turn++; 
if (turn==10){
    winner.style.display="block";
    prompt.innerText=font;
    prompt.textContent="It's A Draw Game " ;
    boxes.forEach(box=> {
        box.disabled="true";
        reset.disabled="true";
});
}
}
});
});
let reset=document.querySelector(".reset");
reset.addEventListener("click",()=>{
    turn=1;
boxes.forEach(box=> {
 box.innerText="";
});
});
let renew=document.querySelector(".new");
renew.addEventListener("click",()=>{
boxes.forEach(box=> {
 box.innerText="";
 box.disabled=false ;
});
 winner.style.display="none";
 turn=1;
 reset.disabled=false ;

});
