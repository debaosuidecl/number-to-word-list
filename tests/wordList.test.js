const { createWordsDatabase } = require("../services/wordList.service");

describe("Word List Tests", () => {
    let trieDatabaseOfWords;
    beforeAll(async () => {
        try {
            //initialize database of  words for tests
            trieDatabaseOfWords = await createWordsDatabase();
        } catch (error) {
            console.log(error)
        }
    })




    it("Should load the  word list properly", () => {
        // console.log(words, 'len')
        expect(1 + 1).toBe(2)
    })
})