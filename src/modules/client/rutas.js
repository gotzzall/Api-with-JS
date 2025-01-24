const express = require('express');
const response = require('../../network/respuestas');
const controller = require('./controller');

const router = express.Router();

router.get('/', (req, res)=>{
          
          response.success(req, res, controller.getAll(), 200);
          // Nota: para ejecutar una función dentro de una varaible
          // también se utilizan los parentesis
})

module.exports = router;