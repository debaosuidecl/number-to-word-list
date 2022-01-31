const Prediction = require("../classes/prediction.class")
const { createWordsDatabase } = require("../services/wordList.service");
const { validationResult } = require("express-validator")
let TrieDataBase;
(
    async () => {
        try {
            TrieDataBase = await createWordsDatabase()
            console.log('loaded trie database')
        } catch (error) {
            console.log(error)
            process.exit(1)
        }
    }
)()

const getPrediction = (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { sequence = "", filterForWords = true } = req.body;
        const prediction = new Prediction(sequence)
        const predictionResponseWithoutFilter = prediction.predict();

        if (predictionResponseWithoutFilter.error) {
            return res.status(400).json(predictionResponseWithoutFilter)
        }

        if (filterForWords && TrieDataBase) {
            console.log("filtering with trie")
            const predictionWithFilter = TrieDataBase.filter(predictionResponseWithoutFilter.data)
            return res.json({
                error: false,
                success: true,
                message: "Filtered word list",
                data: predictionWithFilter
            })
        }
        res.json(predictionResponseWithoutFilter)

    } catch (error) {
        return res.status(500).send({
            error: true,
            message: "An Error Occured"
        })
    }
}
module.exports = {
    getPrediction
}