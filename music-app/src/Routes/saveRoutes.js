let express = require("express")
let mongoose = require('mongoose')
let router = express.Router()
let { list,show,create } = require (
   '../Controllers/saveController')

router.get('/saves', list)
router.get('/saves/:id',show)
router.post('/saves',create)

module.exports = router