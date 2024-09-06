let yes = document.getElementById("yes");
let no = document.getElementById("no");
let message = document.getElementById("message");

no.addEventListener("mouseover", ()=>{
    no.style.position = "absolute"; // corrected typo: postion -> position
    no.style.top = Math.random()*40 + "vh";
    no.style.right = Math.random()*40 + "vw";
})

yes.addEventListener("click", ()=>{
    message.style.display = "block"; // corrected typo: dislay -> display
})

message.addEventListener("click", ()=>{
    message.style.display ="none";
})