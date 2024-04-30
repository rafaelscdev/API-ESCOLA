const { Router } = require("express")
const Professor = require("../models/Professor")

class ProfessorController {
    // construtor
    // metodos 
    // atributos

    async listarTodos(req, res) {
        try {
            const alunos = await Professor.findAll()
            res.json(Professor)
        } catch (error) {
            res.status(500).json({ error: 'Não possível listar os professores' })
        }
    }

    async listarUm(req, res) {
        try {

            const { id } = req.params

            const professor = await Aluno.findByPk(id)

            if (!professor) {
                return res.status(404).json({ message: "Usuário não encontrado!" })
            }

            res.json(professor)

        } catch (error) {
            console.log(error.message)
            res.status(500).json({
                error: 'Não possível listar o professor especifico',
                error: error
            })
        }
    }

    async cadastrar(req, res) {
        try {
            const { nome, salario_hora, carga_horaria, email, password } = req.body;

            if (!nome) {
                return res.status(400).json({ mensagem: "O nome é obrigatório." });
            }

            const novoProfessor = await Professor.create({ nome, salario_hora, carga_horaria, email, password });
            res.status(201).json(novoProfessor);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Não foi possível cadastrar o professor." });
        }
    }

    async atualizar(req, res){
    const { id } = req.params

    const professor = await Professor.findByPk(id)

    if (!professor) {
        return res.status(404).json({ message: 'Professor não encontrado' })
    }

    professor.update(req.body)

    await professor.save()

    res.json(professor)
}

    async deletar(req, res){
    const { id } = req.params

    Professor.destroy({
        where: {
            id: id
        }
    })

    res.status(204).json({})
    }
}


module.exports = new ProfessorController()