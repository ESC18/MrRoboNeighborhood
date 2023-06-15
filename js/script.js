function arraySave(savedValue) {
    arr = [];

}








function tester (index) {
    if (index.toString().includes("1") === true) {
        index = "Boop";
        savedValue = index;
        console.log(savedValue);
        arraySave();
    } else if (index.toString().includes("2") === true) {
        index = "Beep";
        savedValue = index;
        console.log(savedValue);
        arraySave();
    } else if (index.toString().includes("3") === true) {
        index = "Welcome to the Neighborhood"
        savedValue = index;
        console.log(savedValue);
        arraySave();
    } else {
        savedValue = index;
        console.log(savedValue);
        arraySave();
    }
}

function counter () {
    let value = document.getElementById("input").value;
    for (let index = 0; index <= value; index++) {
        tester(index);
    }
}

window.onload = function () {
    let form = document.getElementById("form");
    form.addEventListener("submit",counter);
}