// array of object 
let person = [
    {
        name: "ram",
        age: 20,
        address: "delhi"
    },
    {
        name: "shyam",
        age: 30,
        address: "delhi"
    },
    {
        name: "shusmta",
        age: 45,
    },
    {
        name: "shyam",
        address: "delhi"
    },
]


for (let i = 0; i < person.length; i++) {
    // console.log(person[i].age);

    if (person[i].hasOwnProperty("age")) {
        console.log(person[i].age);
    }
}