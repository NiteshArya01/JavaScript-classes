// how to access object property

let student = {
    name: "ram",
    // age: 20,
    address: "delhi",
    isSubmittedForm: false,
    isActive: true,
}


/*

objectname.propertyname;

or 
objectName["propertyName"]

*/
console.log(student.name);

console.log(student.hasOwnProperty("name"));