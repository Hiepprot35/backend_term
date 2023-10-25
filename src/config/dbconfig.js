const mysql = require('mysql2')
require('dotenv').config()
const dbconnection = mysql.createConnection(
    {
        host: process.env.DB_host,
        user: process.env.DB_user,
        password:"hiepprot35",
        port:"3306",
        database: process.env.DB_database
    }
)
console.log(process.env.DB_password)
async function connect() {
    try {

        await dbconnection.connect()
        console.log("Success!")

    } catch (err) {
        console.log("Error!")
    }

}
module.exports = {
    connect
    , dbconnection
}