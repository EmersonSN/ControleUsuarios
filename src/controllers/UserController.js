const User = require('../models/User')

module.exports = {
    async index(req, res) {
        const users = await User.findAll()

        return res.json(users)
    },
    async store(req, res) {
        const {nome, idade, email} = req.body

        const user = await User.create({nome, idade, email})

        return res.json(user)
    }
}