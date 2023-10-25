const express = require('express');
const TermRoutes = express.Router();
const multer = require('multer');
const upload=multer()
const TermController=require('../controller/term.controller')
TermRoutes.get('/allTerm',TermController.getAllTermController)
TermRoutes.post('/insertTerm',TermController.insertTermController)

module.exports = TermRoutes;