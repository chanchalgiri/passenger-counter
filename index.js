let count = 0;
let numm = document.getElementById("num");
let savedCont = document.getElementById("savedContent");

function increment(){
    count++;
    numm.innerText = count;
}

function reset(){
    count = 0;
    numm.innerText = 0;
    console.log(count);
    let strCount = 0;
}


function save(){
    console.log("Count is " + count);
    let strCount = count + " - ";
    savedCont.textContent += strCount;
}


