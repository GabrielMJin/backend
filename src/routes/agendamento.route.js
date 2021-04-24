const express = require('express');

const AgendamentoController = require("../controllers/agendamento.controller");

const Routes = express.Router();

Routes.get("/agendamento/:_id", AgendamentoController.getOne);
Routes.get("/agendamento", AgendamentoController.index);
Routes.post("/agendamento", AgendamentoController.store);
Routes.put("/agendamento/:_id", AgendamentoController.getOne);
Routes.get("/agendamento/:data", AgendamentoController.getByDate);

module.exports = Routes;