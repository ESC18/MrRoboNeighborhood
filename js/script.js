//Business Logic
let arr = [];

function arraySave(savedValue) {
    arr.push(savedValue);
    display(arr);
}

function tester (index) {
    if (index.toString().includes("3") === true) {
        index = " Won't you be my Neighbor? "
        let savedValue = index;
        arraySave(savedValue);
    } else if (index.toString().includes("2") === true) {
        index = " Beep";
        let savedValue = index;
        arraySave(savedValue);
    } else if (index.toString().includes("1") === true) {
        index = " Boop ";
        let savedValue = index;
        arraySave(savedValue);
    } else {
        let savedValue = index;
        arraySave(savedValue);
    }
}



//UI Logic
function counter (event) {
    arr = [];
    event.preventDefault();
    let value = document.getElementById("input").value; 
    for (let index = 0; index <= value; index++) {
        tester(index);
    }
}

window.onload = function () {
    let form = document.getElementById("form");
    form.addEventListener("submit",counter);
}

function display(arr) {
    let output = document.querySelector("p");
    output.innerHTML = arr.toString();
}