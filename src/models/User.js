const { Model, DataTypes  } = require('sequelize')

class User extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
            idade: DataTypes.INTEGER,
            email: DataTypes.STRING
        }, {
            sequelize //arquicos para conexão com o BD
        })
    }
}

module.exports = User