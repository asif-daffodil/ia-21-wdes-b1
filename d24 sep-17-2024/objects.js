class kamal {
    //properties
    name = "kamal";
    age = 25;
    city = "Canada";

    //methods
    kamalDetails () {
        return "Name: " + this.name + " Age: " + this.age + " City: " + this.city;
    }

    // constructor
    constructor() {
        console.log("Constructor called");
    }
}

// instance of class
let obj = new kamal();
obj.name = "Jamal";
console.log(obj.name);
console.log(obj.kamalDetails());
