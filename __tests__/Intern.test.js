const Intern = require("../lib/Intern");

describe("Intern", () => {

    describe("object", () => {
        it("should create an object from given inputs", () => {
            const testIntern = new Intern;

            expect(typeof (testIntern)).toBe("object");
        })
    })

    describe("data", () => {
        it("should contain all data given through user inputs", () => {
            const testData = new Intern("Valerie", 13, "vruss14@gmail.com", "Michigan State University");

            expect(testData.name).toBe("Valerie");
            expect(testData.id).toBe(13);
            expect(testData.email).toBe("vruss14@gmail.com");
            expect(testData.school).toBe("Michigan State University");
        })
    })

    describe("getSchool", () => {
        it("should return the name of the intern's school", () => {
            const correctValue = "Michigan State University";
            const testGetSchool = new Intern("Valerie", 13, "vruss14@gmail.com", "Michigan State University");

            expect(testGetSchool.getSchool()).toBe(correctValue);
        })
    })

    describe("getRole", () => {
        it("should return 'Intern' and NOT 'Employee'", () => {
            const correctValue = "Intern";
            const testGetRole = new Intern("Valerie", 13, "vruss14@gmail.com", "vruss14");

            expect(testGetRole.getRole()).toBe(correctValue);
        })
    })

});