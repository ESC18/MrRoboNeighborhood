//Business Logic
let arr = [];

function arraySave(savedValue) {
    arr.push(savedValue);
    display(arr);
}
//
function tester (index) {
    if (index.toString().includes("3") === true) {
        index = " Boop ";
        savedValue = index;
        arraySave(savedValue);
    } else if (index.toString().includes("2") === true) {
        index = " Beep";
        savedValue = index;
        arraySave(savedValue);
    } else if (index.toString().includes("1") === true) {
        index = " Won't you be my Neighbor? "
        savedValue = index;
        arraySave(savedValue);
    } else {
        savedValue = index;
        arraySave(savedValue);
    }
}
//
function counter (event, value) {
    event.preventDefault();
    for (let index = 0; index <= value; index++) {
        tester(index);
    }
}



//UI Logic
window.onload = function () {
    let form = document.getElementById("form");
    let value = document.getElementById("input").value;
    form.addEventListener("submit", (event) => counter(event, value));
}

function display(arr) {
    arr = [];
    let output = document.querySelector("p");
    output.innerHTML = arr.toString();
}