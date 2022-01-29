const Prediction = require("../classes/prediction.class")

const getPrediction = (req, res) => {

    try {
        const { sequence } = req.body;

        const prediction = new Prediction(sequence)

        const predictionResponse = prediction.predict();

        if (predictionResponse.error) {
            return res.status(400).json(predictionResponse)
        }

        res.json(predictionResponse)

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