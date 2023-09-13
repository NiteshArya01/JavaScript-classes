// if condition
// if else condtion
// if elseif else statement


let a = 10;

if (a == 10) {
    console.log("a is equal to 10");
}
else if (a == 20) {
    console.log("a is equal to 20");
}
else if (a == 30) {
    console.log("a is equal to 30");
} else {
    console.log("elase ")
}



// nested if condition 

let b = 20;
if (a == 10) {
    if (b == 30) {
        console.log("a is equal to 10 and b is equal to 20");
    } else {
        if (b == 20) {
            console.log("a is equal to 10 and b is equal to 20");
        }
    }

    console.log("i am compiler moving out to next line");
}

