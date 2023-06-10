window.onload = function () {
    numberAr = [];
    let form = document.getElementById("form");
    let output = document.getElementById("output");
    form.addEventListener("submit", submitFunction);
    function submitFunction(event) {
        event.preventDefault();
        let inputNumber = document.getElementById("input").value;
        for (let index = 0; index <= inputNumber; index++) {
            numberAr.push(index);
            test = numberAr.join(' - ');
            test = test.toString().replaceAll("1", "Beep").replaceAll("2", "Boop").replaceAll("3", "Welcome to the neighborhood");
            ui(test);
        }

    }
    function ui(test) {
        output.innerHTML = test;
    }
}
