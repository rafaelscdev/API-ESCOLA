const { Router } = require('express');
const { auth } = require('../middleware/auth');
const AlunoController = require('../controllers/AlunoController');
const alunoRoutes = new Router();

alunoRoutes.post('/', AlunoController.cadastrar);
alunoRoutes.get('/', auth, AlunoController.listarTodos);
alunoRoutes.get('/:id', auth, AlunoController.listarUm);
alunoRoutes.put('/:id', auth, AlunoController.atualizar); 
alunoRoutes.delete('/:id', auth, AlunoController.deletar); 
module.exports = alunoRoutes;