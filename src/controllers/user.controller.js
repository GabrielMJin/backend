const UserModel = require("../models/user.model");

class User {
    async index(req, res) {
        const users = await UserModel.find();

        res.send({ data: users });
    }

    async getOne(req, res){
        const { id } = req.params;

        try{
            const user = await UserModel.findById(id);
            res.send({ data: user });
        } catch(error) {
            res.status(400).json({ message: error.message });
        }
    }

    async store(req, res){
        const body = req.body;

        const user= await UserModel.create(body);

        res.send({ data: user });
    }

    async remove(req, res) {
        const { id } = req.params;

        try{
            const user = await UserModel.findById(id);

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
        const {
            body,
            params: { id },
        } = req;

        const user = await UserModel.findByIdAndUpdate(id, body, { new: true });
        
        res.send({ data: user });
    }
}

module.exports = new User();