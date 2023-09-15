// print all the 2D array using nested while loop

let arr = [[2, 4, 6], [5, 6], [5, 5, 6, 6]];

// console.log(arr.length);

let i = 0;
while (i < arr.length) {
    // console.log(arr[i]);  [2,4]

    let j = 0;
    while (j < arr[i].length) {
        console.log(arr[i][j]);
        j++
    }

    i++;
}



