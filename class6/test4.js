let student = {
    firstname: 'nitesh',
    lastname: 'arya',
    age: 27,
    fullname: function () {
        return this.firstname + " " + this.lastname;
    }
}

console.log(student.firstname);

console.log(student.fullname());