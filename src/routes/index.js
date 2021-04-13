const express = require("express");

const AgendamentoRouter = require("./agendamento.route");
const UserRouter = require("./user.route");

const Routes = express.Router();

Routes.use("/api", UserRouter);
Routes.use("/api", AgendamentoRouter);

module.exports = Routes;