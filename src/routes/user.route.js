const express = require('express');

const UserController = require("../controllers/user.controller");

const Routes = express.Router();

Routes.get("/user/:id", UserController.getOne);
Routes.delete("/user/:id", UserController.remove);
Routes.put("/user/:id", UserController.update);
Routes.get("/user", UserController.index);
Routes.get("/user/:id", UserController.getOne);
Routes.post("/user", UserController.store);

module.exports = Routes;