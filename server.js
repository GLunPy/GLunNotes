var express = require('express');
    bodyParser = require('body-parser');
//Crear el app de express
    app = express();
//pasar solicitud en formato de contenido application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended:true }))

//pasar pedidos de contenidos en formato json
app.use(bodyParser.json())

//configurando la base de datos
var dbConfig = require('./config/database.config.js');
    mongoose = require('mongoose');
    mongoose.connect(dbConfig.url);

mongoose.connection.on('error', function(){
    console.log('no se pudo conectar a la base de datos. Cerrando...');
    process.exit();
});

mongoose.connection.once('open', function(){
    console.log('conectado con exito a la base de datos');
})

//defino una ruta simple

app.get('/', function(req, res){
    res.json({"mensaje": "Bienvenidos a GLunNotas"})
});

//requiere las rutas de las notas
require('./app/routes/note.routes.js')(app);

//escucha pedidos
app.listen(3000, function(){
    console.log('Servidor iniciado en puerto 3000')
});