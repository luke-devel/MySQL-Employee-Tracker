class Employee {
    constructor(first_name, last_name, role, manager) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.role = role;
        this.manager = manager;
    }

    employeeToSQL() {
        console.log(`adding to sql`);
    }

}

module.exports = Employee;
