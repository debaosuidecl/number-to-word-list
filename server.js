const express = require("express");
const cors = require("cors")
const dotenv = require("dotenv")
const app = express();
const predictionRoute = require("./routes/prediction.route")

// INITIALIZE ENVIRONMENT VARIABLES
dotenv.config();

// MIDDLE WARES

app.use(cors({ origin: "*" }));
app.use(express.json())


// ROUTES


app.use("/api/prediction", predictionRoute)

// INITIALIZE PORT
const port = process.env.PORT || 5000;


app.listen(port, () => {
    console.log(`listening on port ${port}`)
})