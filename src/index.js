
const express = require('express')
const bodyParser = require('body-parser');
const path = require('path')
var cors = require('cors')

require('dotenv').config()
// const Host_URL='https://chiruhocdi.netlify.app';
// const Host_URL='http://localhost';

const db=require('./config/dbconfig')
const routes=require('./routes/routes')
const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
// app.use(cors({
//     origin: Host_URL,
//     methods: 'GET, POST, PUT, DELETE',
//     allowedHeaders: 'Content-Type, Authorization',
//     credentials: true
//   }));
app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));
routes(app)
const port = process.env.APP_port;
db.connect()
app.listen(port, () => console.log(`App listening at${port}}`))