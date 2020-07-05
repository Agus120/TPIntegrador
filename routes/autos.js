const express = require('express');

const router = express.Router();

const autosController = require('../controller/autosController');


router.get('/', autosController.index);

router.get('/:idmarca', autosController.filtroAutos);

router.get('/:idmarca/:dato?', autosController.datoMarca);


module.exports = router;