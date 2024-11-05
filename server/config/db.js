// vzd8B1Jd48myKtdG
const mongoose = require("mongoose");

const connectToDb = () => {
    try {
        mongoose
            .connect(
                `mongodb+srv://zaidkamboo100:vzd8B1Jd48myKtdG@cluster0.iivai.mongodb.net/`
            )
            .then(() => console.log("Connected to DB."))
            .catch((err) => console.log("Error :", err));
    } catch (error) {
        console.log("Error ocurred ", error);
    }
};

module.exports = {
    connectToDb,
};
