const express = require('express');
const TermRoutes = express.Router();
const multer = require('multer');
const upload=multer()
const TermController=require('../controller/term.controller')
TermRoutes.get('/allTerm/:title',TermController.getAllTermController)
TermRoutes.post('/insertTerm',TermController.insertTermController)
TermRoutes.get('/allTitles',TermController.getAllTitleController)

module.exports = TermRoutes;