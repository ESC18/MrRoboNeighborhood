/*function display(arr) {
    let output = document.getElementById("output").innerHTML;
    console.log(output);

}


WORK IN PROGRESS (WIP)




let arr = [];

function arraySave(savedValue) {
    arr.push(savedValue);
    display();
}
*/
function tester (index) {
    if (index.toString().includes("1") === true) {
        index = "Boop";
        savedValue = index;
        arraySave(savedValue);
    } else if (index.toString().includes("2") === true) {
        index = "Beep";
        savedValue = index;
        arraySave(savedValue);
    } else if (index.toString().includes("3") === true) {
        index = "Welcome to the Neighborhood"
        savedValue = index;
        arraySave(savedValue);
    } else {
        savedValue = index;
        arraySave(savedValue);
    }
}

function counter (event) {
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