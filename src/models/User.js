const { Model, DataTypes } = require('sequelize')

class User extends Model{
    static init(sequelize){
        super.init({
            nome: DataTypes.STRING,
            email: DataTypes.STRING,
            idade: DataTypes.INTEGER
        }, {
            sequelize
        })
    }
}

module.exports = User