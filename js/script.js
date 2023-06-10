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
    form.reset();
    let output = document.getElementById("output");
    output.innerHTML = "The output will appear here"
    form.addEventListener("submit", submitFunction);
    function submitFunction(event) {
        event.preventDefault();
        let inputNumber = document.getElementById("input").value;
        for (let index = 0; index <= inputNumber; index++) {
            numberAr.push(index);
            test = numberAr.join('-');
            output.innerHTML = test.toString().replaceAll("1","Beep").replaceAll("2","Boop").replaceAll("3","Bop");
        }
                
        }
    }
