const Engineer = require("../lib/Engineer");

describe("Engineer", () => {

    describe("object", () => {
        it("should create an object from given inputs", () => {
            const testEngineer = new Engineer;

            expect(typeof (testEngineer)).toBe("object");
        })
    })

    describe("data", () => {
        it("should contain all data given through user inputs", () => {
            const testData = new Engineer("Valerie", 13, "vruss14@gmail.com", "vruss14");

            expect(testData.name).toBe("Valerie");
            expect(testData.id).toBe(13);
            expect(testData.email).toBe("vruss14@gmail.com");
            expect(testData.github).toBe("vruss14");
        })
    })

    describe("getGithub", () => {
        it("should return the engineer's github URL", () => {
            const correctValue = "https://github.com/vruss14";
            const testGetGithub = new Engineer("Valerie", 13, "vruss14@gmail.com", "vruss14");

            expect(testGetGithub.getGithub()).toBe(correctValue);
        })
    })

    describe("getRole", () => {
        it("should return 'Engineer' and NOT 'Employee'", () => {
            const correctValue = "Engineer";
            const testGetRole = new Engineer("Valerie", 13, "vruss14@gmail.com", "vruss14");

            expect(testGetRole.getRole()).toBe(correctValue);
        })
    })

});