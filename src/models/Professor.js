const { connection } = require("../database/connection")
const { Sequelize, DataTypes } = require('sequelize');


const Professor = connection.define('professores', {
    nome: {
        type: DataTypes.STRING
    },
    salario_hora: {
        type: DataTypes.FLOAT
    },
    carga_horaria: {
        type: DataTypes.INTEGER
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'none'
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'none'
    }


})


module.exports = Professor