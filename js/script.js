//Business Logic

function numberLoop () {
    let baseAr = [];
    for (input = parseInt(document.getElementById("input").value);input != 0;input-=1) {
        let push = input;
        let string = push.toString();
        console.log(string)
        //if (string.includes("1")) {
          //  console.log(string);

            //string.replace("1","Hello"); 
            //console.log(string);

        //}
    }
}
window.onload = function () {
    let form = document.getElementById("form");

    form.addEventListener("submit", numberLoop);    
}