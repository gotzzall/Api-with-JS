const db = require('../../BD/mysql');

const TABLA = 'clientes';

const getAll = () =>{
          return db.getAll(TABLA);
}

module.exports = {
          getAll,
}