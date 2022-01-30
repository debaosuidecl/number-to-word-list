const Prediction = require("../classes/prediction.class")
const { createWordsDatabase } = require("../services/wordList.service");

let TrieDataBase;
(
    async () => {
        try {
            TrieDataBase = await createWordsDatabase()

        } catch (error) {
            console.log(error)
            process.exit(1)
        }
    }
)()

const getPrediction = (req, res) => {
    try {
        const { sequence, filterForWords = true } = req.body;

        const prediction = new Prediction(sequence)

        const predictionResponseWithoutFilter = prediction.predict();





        if (predictionResponseWithoutFilter.error) {
            return res.status(400).json(predictionResponseWithoutFilter)
        }

        if (filterForWords) {

        }
        res.json(predictionResponseWithoutFilter)

    } catch (error) {
        return res.status(500).send({
            error: "true",
            message: "An Error Occured"
        })
    }
}
module.exports = {
    getPrediction
}