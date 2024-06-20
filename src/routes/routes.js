const express = require('express');
const router = express.Router();
const ufController = require('../controllers/ufController');
const { client, connectDb } = require('../db/db');
const rodoviaController = require('../controllers/rodoviaController');
const tipoRegiaoController = require('../controllers/tipoRegiaoController');

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
module.exports = router;