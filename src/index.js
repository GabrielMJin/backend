const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");

require("dotenv").config();

const Routes = require("./routes");

const { MONGO_URL, HTTP_PORT } = process.env;

mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const app = express();

app.use(cors());
app.use(express.json({ limit: "3mb" }));
app.use(morgan("dev"));

app.use(Routes);

app.get("/", (request, response) => {
    response.send({ message: "Olá Mundo" });
});

app.listen(HTTP_PORT, () => {
    console.log(`Rodando na porta ${HTTP_PORT}`)
});