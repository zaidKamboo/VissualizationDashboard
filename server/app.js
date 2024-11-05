const express = require("express");
const app = express();
const { connectToDb } = require("./config/db");
const cors = require("cors");
const { default: mongoose } = require("mongoose");

app.use(express.json());
app.use(cors());

app.use("/analytics", require("./routes/economicImpactAnalysis"));

const start = () => {
    try {
        mongoose
            .connect(
                `mongodb+srv://zaidkamboo100:vzd8B1Jd48myKtdG@cluster0.iivai.mongodb.net/`
            )
            .then(() =>
                app.listen(5000, () =>
                    console.log("Connected To DB & listening on 5k.")
                )
            )
            .catch((err) => console.log("Error :", err));
    } catch (error) {
        console.log("Error ocurred ", error);
    }
};
start();
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something broke!");
});
