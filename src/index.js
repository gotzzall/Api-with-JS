const app = require('./app');

app.listen(app.get('port'), ()=>{
          console.log("puerto", app.get('port'));
})