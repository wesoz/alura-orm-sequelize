const { Router } = require('express');
const pessoaController = require('../controllers/PessoaController');

const router = Router();

router.get('/pessoas', pessoaController.pegaTodasAsPessoas);
router.get('/pessoas/:id', pessoaController.pegaUmaPessoa);
router.get('/pessoas/:estudanteId/matricula/:matriculaId', pessoaController.pegaUmaMatricula);
router.get('/pessoas/:estudanteId/matriculas', pessoaController.pegaMatriculas);
router.post('/pessoas', pessoaController.criaPessoa);
router.post('/pessoas/:estudanteId/matricula', pessoaController.criaMatricula);
router.put('/pessoas/:id', pessoaController.atualizaPessoa);
router.put('/pessoas/:estudanteId/matricula/:matriculaId', pessoaController.atualizaMatricula);
router.delete('/pessoas/:id', pessoaController.apagaPessoa);
router.delete('/pessoas/:estudanteId/matricula/:matriculaId', pessoaController.apagaMatricula);

module.exports = router;