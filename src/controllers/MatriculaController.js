const Aluno = require("../models/Aluno")
const Matricula = require("../models/Matricula")

class MatriculaController {

    async cadastrar(req, res) {
        try {
            const aluno_id = req.body.aluno_id
            const curso_id = req.body.curso_id

            if (!curso_id || !aluno_id) {
                return res
                    .status(400)
                    .json({ mensagem: 'O ID do aluno e do curso são obrigatórios' })
            }

            const alunoExistente = await Aluno.findByPk(aluno_id)

            if(!alunoExistente) {
                return res.status(404).json({messagem: 'O aluno nao existe'})
            }

            const matricula = await Matricula.create({
                aluno_id,
                curso_id
            })

             /* Validar se o id do curso existe */

            /*   Nao permitir cadastrar um mesmo curso para um mesmo aluno    */

            res.status(201).json(matricula)
        } catch (error) {
            res.status(500).json({messagem: 'Houve um erro ao cadastrar ao matricula'})
        }
    }
}

module.exports = new MatriculaController()