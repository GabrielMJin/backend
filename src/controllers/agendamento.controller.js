const { AgendamentoModel } = require("../models/agendamento.model.js");
const UserModel = require("../models/user.model");

class AgendamentoController {
    async index(req, res) {
        const agendamento = await AgendamentoModel.find();
        console.log(agendamento);
        res.send({ data: agendamento })
    }

    async getOne(req, res) {
        const {
            params: { _id }
        } = req;

        const agendamento = await AgendamentoModel.findOne({ _id })

        res.json({ data: agendamento })
    }

    async getByDate(req, res){
        const {body} = req;

        const agendamento = await AgendamentoModel.findOne({data});
        res.send({data: agendamento});
    }

    async putOne(req, res) {
        const{
            params: { _id },
            body
        } = req

        const dia = await AgendamentoModel.findByIdAndUpdate(_id,body);

    }

    async agendar(_id, agendamento, user) {
        var flag = true;
        var body = {}
        let getAgendamento = await AgendamentoModel.findById(_id);
        body = getAgendamento['agendamento'+agendamento];
        if(body[0]== null){
            body[0] = user;
        }
        else if(body[1]== null){
            body[1]= user
        }
        else if(user.idade>=70){
            if(body[0].idade<70){
                body[0] = user;
            }
            else if(body[1].idade<70){
                body[1] = user;
            }
        }
        else{
            flag = false;
            throw new Error("Ocorreu um erro!")
        }

        if(flag == true){
            getAgendamento['agendamento'+agendamento] = body;
            let alterar = await AgendamentoModel.findByIdAndUpdate(_id,getAgendamento);
        }
        
        
    }

    async store(req, res) {
        const { agendar } = req.body;
        const agendado = new Date(agendar);
        const agendamento = await AgendamentoModel.create({
            data: agendado,
            agendamento8: [, ],
            agendamento9: [, ],
            agendamento10: [, ],
            agendamento11: [, ],
            agendamento13: [, ],
            agendamento14: [, ],
            agendamento15: [, ],
            agendamento16: [, ],
            agendamento17: [, ],
            agendamento18: [, ],
            estado: 'ATIVO'
        })

        res.send({ data: agendamento });
    }
}

module.exports = new AgendamentoController();