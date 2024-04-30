const { Router, query } = require('express') // 
const CursoController = require('../controllers/CursoController')
const { auth } = require('../middleware/auth')
const cursoRoutes = new Router()

cursoRoutes.post('/', auth, CursoController.cadastrar);
    

cursoRoutes.get('/', auth, CursoController.listarTodos);


cursoRoutes.delete('/:id', auth, CursoController.deletar);


cursoRoutes.put('/:id', auth, CursoController.atualizar);

module.exports = cursoRoutes