var a = [
    {
        name: "ram",
        roll: "22",
        sub: ["math", "geography", "bengali", "english", "science"],
        marks: [20, 30, 50, 60, 70],
        class: "4A",
    },
    {
        name: "Shyam",
        roll: "23",
        sub: ["math", "geography", "bengali", "english", "science"],
        marks: [30, 40, 60, 70, 80],
        class: "4A",
    },
    {
        name: "jodhu",
        roll: "24",
        sub: ["math", "geography", "bengali", "english", "science"],
        marks: [45, 32, 54, 23, 86],
        class: "4A",
    },
];



let studentRecord = [
    {
        name: "Shyam",
        roll: "23",
        sub: {
            math: 30,
            geography: 40,
            bengali: 60,
            english: 70,
            science: 80
        },
        class: "4A",
        totalMarks: function () {
            return this.sub.math + this.sub.geography + this.sub.bengali + this.sub.english + this.sub.science;
        }
    },
    {
        name: "todu",
        roll: "23",
        sub: {
            math: 60,
            geography: 70,
            bengali: 70,
            english: 20,
            science: 90
        },
        class: "4A",
        totalMarks: function () {
            return this.sub.math + this.sub.geography + this.sub.bengali + this.sub.english + this.sub.science;
        }
    },
]

for (let i = 0; i < studentRecord.length; i++) {
    console.log("Studen Name : " + studentRecord[i].name + '---------------------------');
    console.log("Math :" + studentRecord[i].sub.math);
    console.log("Geography :" + studentRecord[i].sub.geography);
    console.log("Bengali :" + studentRecord[i].sub.bengali);
    console.log("English :" + studentRecord[i].sub.english);
    console.log("Science :" + studentRecord[i].sub.science);
    console.log("..........................................")
    console.log("Total Marks :" + studentRecord[i].totalMarks());

}