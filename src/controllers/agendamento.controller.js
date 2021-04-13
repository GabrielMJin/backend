const { AgendamentoModel } = require("../models/agendamento.model");
const UserModel = require("../models/user.model");

class AgendamentoController {
    async index(req, res) {
        const { page = 1, limit = 10, search = "" } = req.query;

        const count = await AgendamentoModel.countDocuments();

        const Agendamento = await AgendamentoModel.find({
            name: { $regex: search, $options: "i"},
        })
        .sort({ id: 1 })
        .limit(limit * 1)
        .skip((page - 1) * limit)
        .exec();

        res.json({
            data: Agendamento,
            total: count,
            limit,
            totalPages: Math.ceil(count / limit),
            currentPage: Number(page),
        });
    }

    async getOne(req, res){
        const {
            params: { name }
        } = req;
    
        const agendamento = await AgendamentoModel.findOne({ name })
    
        res.json({ data: pokedex})
    }

}