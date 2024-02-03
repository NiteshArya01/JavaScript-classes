function myFunction() {
    // alert("hello world");

    document.getElementById("result").innerHTML = "Hello world";
}


function getName(event) {
    if (event.length < 5) {
        document.getElementById("error").innerHTML = "please enter more than 5 character";
    }
    else {
        document.getElementById("error").innerHTML = "Oh! yes That's good";
        document.getElementById("error").style.color = "green";
    }
}
function getNameData() {
    let name = document.getElementById("name").value;
    document.getElementById("result").innerHTML = name;
}

let calResult = '';
function buttonClicked(value) {
    if (value != '=') {
        document.getElementById("cal-result").innerHTML = calResult += value;
    } else {
        console.log(calResult.split(''));
    }

}