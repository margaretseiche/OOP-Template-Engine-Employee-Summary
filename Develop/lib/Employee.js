// TODO: Write code to define and export the Employee class
const fs = require("fs");

class Employee {
    // Just like constructor functions, classes can accept arguments
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.role = "Employee"
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole(){
        return this.role;
    }
}

module.exports = Employee;