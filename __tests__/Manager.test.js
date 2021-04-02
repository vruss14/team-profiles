const Manager = require("../lib/Manager");

describe("Manager", () => {

    describe("object", () => {
        it("should create an object from given inputs", () => {
            const testManager = new Manager;

            expect(typeof (testManager)).toBe("object");
        })
    })

    describe("data", () => {
        it("should contain all data given through user inputs", () => {
            const testData = new Manager("Valerie", 13, "vruss14@gmail.com", 300);

            expect(testData.name).toBe("Valerie");
            expect(testData.id).toBe(13);
            expect(testData.email).toBe("vruss14@gmail.com");
            expect(testData.officeNumber).toBe(300);
        })
    })

    describe("getOfficeNumber", () => {
        it("should return the manager's office number", () => {
            const testNumber = 300;
            const testGetOfficeNumber = new Manager("Valerie", 13, "vruss14@gmail.com", 300);

            expect(testGetOfficeNumber.getOfficeNumber()).toBe(testNumber);
        })
    })

    describe("getRole", () => {
        it("should return 'Manager' and NOT 'Employee'", () => {
            const correctValue = "Manager";
            const testGetRole = new Manager("Valerie", 13, "vruss14@gmail.com", 300);

            expect(testGetRole.getRole()).toBe(correctValue);
        })
    })

});
