

function getMydata() {
    let name = document.getElementById("name").value;

    console.log(name);
    document.getElementById("result").innerHTML = name;
}


function getNameData(event) {
    console.log(event);
    document.getElementById("result").innerHTML = event;

    if (event.length < 5) {
        document.getElementById("showError").innerHTML = "please enter more than 5 character";
        document.getElementById("showError").style.color = "red";
    } else {
        document.getElementById("showError").innerHTML = "Oh! yes That's good";
        document.getElementById("showError").style.color = "green";
    }
}



function getData(event) {


    console.log(event);



}