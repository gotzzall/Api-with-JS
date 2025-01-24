const mysql = require('mysql');
const config = require('../config');

const dbConfig = {
          host: config.mysq.host,
          user: config.mysq.user,
          password: config.mysq.password,
          database: config.mysq.database,
          // Nota: configurar eso de una constraseña para root cuando se
          // accede a una base de datos, lo pide.
          //ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'ChoosePassword';
          // FLUSH PRIVILEGES;
}

let conexion;

function conMysql(){
          conexion = mysql.createConnection(dbConfig);
          conexion.connect((err)=>{
                    if(err){
                              console.log('error:', err);
                              setTimeout(conMysql, 200);
                    }else{
                              console.log('db conectada');
                    }
          });

          conexion.on('error', err=>{
                    console.log('error:', err);
                    if(err.code === 'PROTOCOL_CONNECTION_LOST'){
                              conMysql();
                    }else{
                              throw err;
                    } 
          })
}

conMysql();

const getAll = (table)=>{

} 

const getById = (table, id)=>{

}

function create(table, data){

}

function deleteById(table, id){
          return 'eliminado';
}

module.exports = {
          getAll,
          getById,
          create,
          deleteById
}