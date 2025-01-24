exports.success = (req, res, mensaje = '', status =  200)=>{
          const statusCode = status;
          const messageOk = mensaje;
          res.status(statusCode).send({
                    error: false,
                    status: statusCode,
                    body: messageOk,
          });
}

exports.error = function (req, res, mensaje =  'Internal server error', status = 500){
          const statusCode = status;
          const messageError = mensaje;
          res.status(statusCode).send({
                    error: true,
                    status: statusCode,
                    body: messageOk,
          });
}