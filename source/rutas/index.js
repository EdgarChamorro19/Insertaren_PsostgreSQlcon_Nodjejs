const {Router}= require('express')
const router= Router()
const { getUsuario, createUsuario } = require('../controladores/controlador')

router.get('/users',getUsuario)
router.post('/users',createUsuario)

module.exports= router