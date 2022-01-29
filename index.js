const express = require("express");
const cors = require("cors")

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json())
const port = 5000;

const CART = {}


app.get("/cart", (req, res) => {
    res.send(CART)
    console.log(CART, 'GET')

})

app.post("/cart", (req, res) => {
    console.log(req.body)

    try {

        CART = req.body;
        console.log(CART, 'POST')
        res.send(CART);
    } catch (error) {
        console.log(error)
        res.status(400).send({
            error: true,
            message: "An error occuredc"
        })
    }

})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})