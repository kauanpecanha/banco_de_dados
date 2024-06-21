const express = require('express');
const router = express.Router();
const ufController = require('../controllers/ufController');
const { client, connectDb } = require('../db/db');
const rodoviaController = require('../controllers/rodoviaController');
const tipoRegiaoController = require('../controllers/tipoRegiaoController');
const classeTaxonomicaController = require('../controllers/classeTaxController');
const situacaoFinalAnimalController = require('../controllers/situFinalAnimalController');
const tipoPavimentoController = require('../controllers/tipoPavimentoController');
const especieController = require('../controllers/especieController');
const categoriaLocalController = require('../controllers/categoriaLocalController');

// rota root
router.get('/', ( req, res ) => {
    connectDb( req, res, client );
})

// ================= rotas uf =========================

router.get('/uf', async ( req, res ) => {
    ufController.getAll( req, res, client );
})

router.get('/uf/searchOne', async ( req, res ) => {
    ufController.searchOne( req, res, client );
})

// rota de adição de objetos
router.post('/uf/addOne', async ( req, res ) => {
    ufController.addOne( req, res, client );
});

// ================= fim rotas uf =========================
// ================= rotas rodovia =========================

router.get('/rodovia', async ( req, res ) => {
    rodoviaController.getAll( req, res, client );
})

router.get('/rodovia/searchOne', async ( req, res ) => {
    rodoviaController.searchOne( req, res, client );
})

// rota de adição de objetos
router.post('/rodovia/addOne', async ( req, res ) => {
    rodoviaController.addOne( req, res, client );
});
// ================= fim rotas rodovias =========================
// ================= rotas tipoRegiao =========================

router.get('/tipoRegiao', async ( req, res ) => {
    tipoRegiaoController.getAll( req, res, client );
})

router.get('/tipoRegiao/searchOne', async ( req, res ) => {
    tipoRegiaoController.searchOne( req, res, client );
})

// rota de adição de objetos
router.post('/tipoRegiao/addOne', async ( req, res ) => {
    tipoRegiaoController.addOne( req, res, client );
});

// ================= fim rotas rodovias =========================
// ================= rotas classeTaxonomica =========================

router.get('/classeTaxonomica', async ( req, res ) => {
    classeTaxonomicaController.getAll( req, res, client );
})

router.get('/classeTaxonomica/searchOne', async ( req, res ) => {
    classeTaxonomicaController.searchOne( req, res, client );
})

// rota de adição de objetos
router.post('/classeTaxonomica/addOne', async ( req, res ) => {
    classeTaxonomicaController.addOne( req, res, client );
});

// ================= fim rotas classeTaxonomica =========================
// ================= rotas situacaoFinalAnimal =========================

router.get('/situacaoFinalAnimal', async ( req, res ) => {
    situacaoFinalAnimalController.getAll( req, res, client );
})

router.get('/situacaoFinalAnimal/searchOne', async ( req, res ) => {
    situacaoFinalAnimalController.searchOne( req, res, client );
})

// rota de adição de objetos
router.post('/situacaoFinalAnimal/addOne', async ( req, res ) => {
    situacaoFinalAnimalController.addOne( req, res, client );
});

// ================= fim rotas situacaoFinalAnimal =========================
// ================= rotas tipoPavimento =========================

router.get('/tipoPavimento', async ( req, res ) => {
    tipoPavimentoController.getAll( req, res, client );
})

router.get('/tipoPavimento/searchOne', async ( req, res ) => {
    tipoPavimentoController.searchOne( req, res, client );
})

// rota de adição de objetos
router.post('/tipoPavimento/addOne', async ( req, res ) => {
    tipoPavimentoController.addOne( req, res, client );
});

// ================= fim rotas tipoPavimento =========================
// ================= rotas especie =========================

router.get('/especie', async ( req, res ) => {
    especieController.getAll( req, res, client );
})

router.get('/especie/searchOne', async ( req, res ) => {
    especieController.searchOne( req, res, client );
})

// rota de adição de objetos
router.post('/especie/addOne', async ( req, res ) => {
    especieController.addOne( req, res, client );
});

// ================= fim rotas especie =========================
// ================= rotas categoriaLocal =========================

router.get('/categoriaLocal', async ( req, res ) => {
    categoriaLocalController.getAll( req, res, client );
})

router.get('/categoriaLocal/searchOne', async ( req, res ) => {
    categoriaLocalController.searchOne( req, res, client );
})

// rota de adição de objetos
router.post('/categoriaLocal/addOne', async ( req, res ) => {
    categoriaLocalController.addOne( req, res, client );
});

module.exports = router;