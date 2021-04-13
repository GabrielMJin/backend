const mongoose = require("mongoose");
const {UserSchema} = require("./user.model");

const AgendamentoSchema = new mongoose.Schema(
    {
        name: String,
        data: Date,
        agendamento8: [UserSchema,UserSchema],
        agendamento9: [UserSchema,UserSchema],
        agendamento10: [UserSchema,UserSchema],
        agendamento11: [UserSchema,UserSchema],
        agendamento13: [UserSchema,UserSchema],
        agendamento14: [UserSchema,UserSchema],
        agendamento15: [UserSchema,UserSchema],
        agendamento16: [UserSchema,UserSchema],
        agendamento17: [UserSchema,UserSchema],
        agendamento18: [UserSchema,UserSchema],
        estado: String
    },
    {
        timestamps: true,
    }
)

const AgendamentoModel = mongoose.model("agendamento", AgendamentoSchema);

module.exports = { AgendamentoSchema, AgendamentoModel };