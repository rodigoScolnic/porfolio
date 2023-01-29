const express = require('express');
const router = express.Router()
const controller = require('../controllers/controller');

router.get('/' , controller.index);
router.get('/abaut' , controller.abautme);
router.get('/skills' , controller.skills);
router.get('/work' , controller.work);
router.get('/contact' , controller.contact);

module.exports = router