// compare three numbers and check whether a number is greatest;

// a= 20, b=40, c= 10

// step 1 -> we are compare a and b
// step 2 -> we are compare a and c

let a = 120;
let b = 90;
let c = 130;


// if (a > b && a > c) {
//     console.log("a is greate");
// } else if (b > a && b > c) {
//     console.log("b is greater");
// } else {
//     console.log("c is gerater");
// }


if (a > b) {
    if (a > c) {
        console.log("a is gerater");
    } else {
        console.log("c is greater");
    }
} else {
    if (b > c) {
        console.log("b is greater");
    } else {
        console.log("c is greater");
    }
}