const {UserModel} = require("../models/user.model.js");
const {AgendamentoModel} = require("../models/agendamento.model");
const AgendamentoController = require("../controllers/agendamento.controller");

class User {
    async index(req, res) {
        const users = await UserModel.find();

        res.send({ data: users });
    }

    async getOne(req, res){
        const { cpf } = req.params;

        try{
            const user = await UserModel.find({cpf});
            res.send({ data: user });
        } catch(error) {
            res.status(400).json({ message: error.message });
        }
    }

    async store(req, res){
        const body = req.body;
        const idAgendamento = req.body.idAgendamento; const agendamento = req.body.agendamento;
        delete body.idAgendamento;
        delete body.deleteagendamento;
        const user= await UserModel.create(body);

        try{
            var response = await AgendamentoController.agendar(idAgendamento, agendamento, user );
            res.send({ data: user });
        }catch(error){
            res.status(400).json({ message: error.message });
        }
    }

    async remove(req, res) {
        const { cpf } = req.params;

        try{
            const user = await UserModel.findOneAndRemove({cpf});

            if(!user) {
                return res.send({ message: "User not exist" })
            }

            await user.remove();
            res.send({ message: "User removed" });
        } catch(error) {
            res.status(400).send({ message: error.message });
        }
    }

    async update(req, res) {
        console.log("passou")
        const {
            body,
            params: { cpf },
        } = req;

        const user = await UserModel.findOneAndUpdate(cpf, body, { new: true });
        
        res.send({ data: user });
    }
}

module.exports = new User();