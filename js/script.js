//Business Logic
/*function numberLoop () {
    let numberAr = [];
    for (let number = parseInt(document.getElementById("input").value);number != 0;number-=1) {
        numberAr = [number];


        console.log(numberAr);
    }
}
window.onload = function () {
    let form = document.getElementById("form");

    form.addEventListener("submit", numberLoop);    
}

        //if (string.includes("1")) {
          //  console.log(string);

            //string.replace("1","Hello"); 
            //console.log(string);

        //}*/


window.onload = function () {
    numberAr = [];
    let form = document.getElementById("form");
    let output = document.getElementById("output").innerText;
    form.addEventListener("submit", submitFunction);
    function submitFunction(event) {
        event.preventDefault();
        let inputNumber = document.getElementById("input").value;
        let savedNumber = inputNumber;
        for (index = 0; index < inputNumber; index++) {
            savedNumber = numberAr.push(index);
            stringNumber = savedNumber.toString();
            if (stringNumber.includes("1")) {
                replaceNumber = stringNumber.replace("1","hello")
                console.log(replaceNumber);
            }
            output = replaceNumber;
        }
    }


}