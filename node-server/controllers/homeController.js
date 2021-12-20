const { config } = require('../config');
const MESSAGES = require('../utils/messages');
const mysql = require('mysql');

module.exports = {

    async index(req, res) {
        try {
            const pool = mysql.createPool(config);

            pool.getConnection(function (err, connection) {
                connection.query('SELECT * FROM cursos', function (err, result) {
                    connection.release();
                    if (err) throw err;
                    let cursos = []
                    for (it of result) {
                        cursos.push(it.name)
                    }
                    return res.status(200).json(cursos);
                });
            });
        } catch (error) {
            console.error(error)
            return res.status(500).send({ errors: [{ msg: MESSAGES.INTERNAL_SERVER_ERROR }] })
        }
    },
}