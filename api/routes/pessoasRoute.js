const { Router } = require('express');
const pessoaController = require('../controllers/PessoaController');

const router = Router();

router.get('/pessoas', pessoaController.pegaTodasAsPessoas);
router.get('/pessoas/:id', pessoaController.pegaUmaPessoa);
router.post('/pessoas', pessoaController.criaPessoa);
router.put('/pessoas/:id', pessoaController.atualizaPessoa);
router.delete('/pessoas/:id', pessoaController.apagaPessoa);

module.exports = router;