const {materias, OpcionesIncripcion} = require("./datos");
const fs = require("fs");
var express = require('express')
var app = express()

const argv = require('yargs')
.usage('Usage: $0 <command> [options]')
.command('inscribir', 'Inscripcion cursos', OpcionesIncripcion,
    ({IdCurso, nombreInteresado, cedula}) => {       
      let busqueda = materias.find(x=> x.idMateria === IdCurso)      
      if (busqueda !== undefined) {
          console.log("==============Información del curso============");
          console.log("   *Código: "+busqueda.idMateria);
          console.log("   *Nombre: "+busqueda.nombreMateria);
          console.log("   *Duración: "+busqueda.duracion);
          console.log("   *Valor: "+busqueda.valor); 
          
          // texto = "=============Información del interesado===========" +'\n'+
          //         '\n'+
          //         "Nombre: "+nombreInteresado +'\n'+
          //         "Cédula: "+cedula+'\n'+
          //         "=============Información del curso===========" +'\n'+
          //         '\n'+
          //         "Código: "+busqueda.idMateria +'\n'+
          //         "   *Nombre: "+busqueda.nombreMateria +'\n'+
          //         "   *Duración: "+busqueda.duracion +'\n'+
          //         "   *Valor: "+busqueda.valor
          texto = "<h1>=============Información del interesado===========</h1>"+
                  "<br/>"+
                  "<p><strong>Nombre: </strong>"+nombreInteresado+"</p> "+
                  "<br/>"+
                  "<p><strong>Cédula: </strong>"+cedula+"</p> "+
                  "<br/>"+
                  "<p><strong>Código: </strong>"+busqueda.idMateria+"</p> "+
                  "<br/>"+
                  "<p><strong>Duración: </strong>"+busqueda.duracion+"</p> "+
                  "<br/>"+
                  "<p><strong>Valor: </strong>"+busqueda.valor+"</p> ";


          app.get('/', function (req, res) {
            res.send(texto)
          })
        //   fs.writeFile('Informacion.txt', texto, (error)=>{
        //     if (error) throw (error);
        //     console.log('se ha creado el archivo');
        // })
      }
      else{
        console.error("El id no se encontro");
      }
    }
 ) 
.argv

let mostrarMaterias=()=>{
    
    if (!argv.IdCurso) {
        console.log("============Cursos disponibles===================");
        let i =0;
        materias.forEach(items => {
            setTimeout(function(){
                console.log("   *Código: "+items.idMateria);
                console.log("   *Nombre: "+items.nombreMateria);
                console.log("   *Duración: "+items.duracion);
                console.log("   *Valor: "+items.valor);
                console.log("");
                console.log("-----------------");            
            },2000*(i+1)); 
            i++;       
        });  
        console.log("Para matricularse ingrese la palabra inscribir") 
    }      
}

app.listen(3000);

mostrarMaterias();

