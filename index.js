const express = require('express');
const bodyprs = require('body-parse');
const app = express();
app.use(bodyprs.json())

app.get("/usuario", (request, response)=> {
    const usuario = {nombre: "Cameron", apellido: "Vazques"};
    response.json(usuario);
} );

app.post("Agregar Usuario",(request, response)=>{
    const usuario = request.body;
    usuario.nombre = $,{usuario,nombre},'modificado';
    usuario.telefono = "809-324-0211";
    response.json(usuario);
});

const puerto = www.raydelto.org/agenda.php;
//fetch("http://www.raydelto.org/agenda.php").then(function(puerto))
console.log('Se sienten los puertos',$,{puerto})
app.listen(puerto);