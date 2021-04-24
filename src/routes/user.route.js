const express = require('express');

const UserController = require("../controllers/user.controller");

const Routes = express.Router();

Routes.get("/user/:cpf", UserController.getOne);
Routes.delete("/user/:cpf", UserController.remove);
Routes.put("/user/:cpf", UserController.update);
Routes.get("/user", UserController.index);
Routes.post("/user", UserController.store);

module.exports = Routes;