const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("object", () => {
        it("should create an object from given inputs", () => {
            const testEmployee = new Employee;

            expect(typeof (testEmployee)).toBe("object");
        })
    })

    describe("getName", () => {
        it("should return the name of the employee", () => {
            const firstName = "Valerie";
            const testGetName = new Employee(firstName, 13, "vruss14@gmail.com");

            expect(testGetName.getName()).toBe(firstName);
        })
    })

    describe("getId", () => {
        it("should return the employee's ID number", () => {
            const valerieID = 13;
            const testGetId = new Employee("Valerie", valerieID, "vruss14@gmail.com");

            expect(testGetId.getId()).toBe(valerieID);
        })
    })

    describe("getEmail", () => {
        it("should return the employee's email", () => {
            const valerieEmail = "vruss14@gmail.com";
            const testGetEmail = new Employee("Valerie", 13, valerieEmail);

            expect(testGetEmail.getEmail()).toBe(valerieEmail);
        })
    })

    describe("getRole", () => {
        it("should return a string that says 'Employee'", () => {
            const correctValue = "Employee";
            const testGetRole = new Employee("Valerie", 13, "vruss14@gmail.com");

            expect(testGetRole.getRole()).toBe(correctValue);
        })
    })

});