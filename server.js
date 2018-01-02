var express = require('express');
    bodyParser = require('body-parser');
//Crear el app de express
    app = express();
//pasar solicitud en formato de contenido application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended:true }))

//pasar pedidos de contenidos en formato json
app.use(bodyParser.json())

//defino una ruta simple

app.get('/', function(req, res){
    res.json({"mensaje": "Bienvenidos a GLunNotas"})
});

//escucha pedidos
app.listen(3000, function(){
    console.log('Servidor iniciado en puerto 3000')
});