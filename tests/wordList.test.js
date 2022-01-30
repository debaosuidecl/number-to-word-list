const { createWordsDatabase, buildWordsArray } = require("../services/wordList.service");
const Trie = require("../classes/trieWords.class")
const Prediction = require("../classes/prediction.class");

describe("Word List Tests", () => {
    let trieDatabaseOfWords = null;
    beforeAll(async () => {
        try {
            //initialize database of  words before running tests tests
            trieDatabaseOfWords = await createWordsDatabase();
        } catch (error) {
            console.log(error)
        }
    })



    it("Trie Database has been initialized", () => {
        expect(trieDatabaseOfWords).toBeInstanceOf(Trie)
        expect(trieDatabaseOfWords).not.toBeNull()
    })


    it("array of words length should be equal to  the size of the trie", async () => {
        const wordsArrayLength = (await buildWordsArray()).length
        let trieLength = 0;
        if (trieDatabaseOfWords) {
            trieLength = trieDatabaseOfWords.size()
        }

        expect(trieLength).toBe(wordsArrayLength)
    })

    it("Should filter an array of none words to form an array of real words", () => {
        const prediction = new Prediction("5683")
        expect(trieDatabaseOfWords.filter(prediction.predict().data)).toEqual(["jove", "lote", "loud", "love"])
    })

})