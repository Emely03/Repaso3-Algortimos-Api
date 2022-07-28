const notasControllers = {};


notasControllers.create = (req, res) => {

    let promedio_edad = {};
    let nombrefemenina_joven = {};
    let contadormasculinos = 0;
    let contadorfemenino = 0;
    let promedio_total = {};
    let acumtotal = 0;
    let acummasculino = 0;
    let contadormasculinos2 = 0;
    let contotal = 0;
    let mayor = 100;

    let response = {};

    let array_personas = req.body.personas

    for (let i = 0; i < array_personas.length; i++) {
        const personas = array_personas[i];
        const edad2 = parseInt(personas.edad);
        acumtotal += edad2;
        contotal++;
        promedio_total = acumtotal/contotal;

        if (personas.genero == "m") {
            contadormasculinos++;
        }
        if ( personas.genero == "f"  && personas.edad > promedio_total ) {
            contadorfemenino++;

        }
        if (personas.genero == "m") {
            contadormasculinos2++;
            //const edad=parseInt(personas.edad);
            acummasculino+=personas.edad
            promedio_edad = acummasculino/contadormasculinos2;

        }
        if (personas.genero == "f" && personas.edad < mayor ) {
            mayor = personas.edad;
            nombrefemenina_joven['nombre'] =personas.nombre;
            nombrefemenina_joven['edad'] = mayor;
        }

    }
    response['Total personas masculinas'] = contadormasculinos;
    response['Total personas femeninas que superan la mayoria de edad'] = contadorfemenino;
    response['Promedio de edad de hombres'] = promedio_edad;
    response['Mujer mas joven'] = nombrefemenina_joven;



    res.json(response);
}

module.exports = notasControllers;