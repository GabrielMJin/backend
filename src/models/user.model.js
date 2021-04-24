const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        nome: String,
        email: String,
        numeroTelefone: String,
        vacinado: String,
        idade: Number,
        cpf: String
    },
    {
        timestamps: true,
    }
);

const UserModel = mongoose.model("user", UserSchema);

module.exports = { UserModel, UserSchema };