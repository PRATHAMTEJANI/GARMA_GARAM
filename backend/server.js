require("dotenv").config();
const express = require("express");
const app = express();
const connectDb = require("./config/connectionDB");
const cors = require('cors')

app.use(express.json());
app.use(cors())
app.use("/recipe", require("./routes/recepi"));
app.use("/",require("./routes/user"))

const PORT = process.env.PORT || 3000;

const startServer = async () => {
    try {
        await connectDb();
        app.listen(PORT, () => {
            console.log(`🚀 Server running on port ${PORT}`);
        });
    } catch (err) {
        console.log(err);
    }
};

startServer();