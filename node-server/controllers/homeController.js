const { connection } = require('../config');
const MESSAGES = require('../utils/messages');

module.exports = {

    async index(req, res) {
        try {
            connection.connect(function(err) {
                if (err) throw err;
                connection.query("SELECT * FROM cursos", function (err, result, fields) {
                  if (err) throw err;
                  let cursos = []
                  for (it of result){
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