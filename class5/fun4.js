// return type of fuction 

function add(a, b) {
    // console.log("result :", a + b);
    let sum = a + b;
    // return "my name is khan";
    return sum;

}


function mutliply(sunOfadd, mutliplyOfNum) {
    console.log(sunOfadd * mutliplyOfNum);
}

// first approch to call a function
// const sumofAdd = add(3, 5); 
// mutliply(sumofAdd, 4)


// second approch to call a functinon
mutliply(add(3, 5), 4);
8, 4


// write a function to add two number then print the sum and again a fuction to multiply with the sum of two number i.e pass
// inside the fucntion add(a,b) and multply with any number;
