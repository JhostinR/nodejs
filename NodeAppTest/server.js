const express = require('express'); //Requerir Framework
const app = express(); //Crear instancia de express
const morgan = require('morgan');
//configuraciones
app.set('port', 4000);

//Middlewares
app.use(morgan('combined'));

//Rutas
app.get('/', (req, res)=>{
    res.send({Title: 'Hello ADSI 023'});
});

//start server
app.listen(app.get('port'), ()=>{
    console.log(`Server Running on port ${app.get('port')}`);
});