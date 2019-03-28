const materias=[
    { 
        idMateria: 1,
        nombreMateria: "Matematicas",
        duracion: "3 horas",
        valor: "30.000"
    },
    { 
        idMateria: 2,
        nombreMateria: "Español",
        duracion: "2 horas",
        valor: "20.000"
    },
    { 
        idMateria: 3,
        nombreMateria: "Programacion",
        duracion: "4 horas",
        valor: "40.000"
    }
]

const OpcionesIncripcion = {
    IdCurso:{
        demand: true,
        alias: 'Id'
    },
    nombreInteresado:{
        demand: true,
        alias: 'n'
    },
    cedula: {
        demand: true,
        alias: 'c'
    }

}

module.exports = {
    materias,
    OpcionesIncripcion
}