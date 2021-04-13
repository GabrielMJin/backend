const express = require('express');

const AgendamentoController = require("../controllers/agendamento.controller");

const Routes = express.Router();

// Routes.get("/agendamento/:name", AgendamentoController.getOne);
// Routes.get("/agendamento", AgendamentoController.index);
//Routes.delete("/agendamento/:id", AgendamentoController.remove);

module.exports = Routes;