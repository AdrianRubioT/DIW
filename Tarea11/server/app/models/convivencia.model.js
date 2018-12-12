const mongoose = require('mongoose');

const convivenciaSchema = mongoose.Schema({

    /* datos Basicos */
    alumno: String,
    grupo: String,
    profesor: String,
    fechaIncidente: Date,
    horaAtencioProfesor: Date,

    /* castigos */
    castigo1: Boolean,

    castigo2: Boolean,
    castigo2Aparell: String,

    castigo3: Boolean,
    castigo3inicioCastigo: String,
    castigo3finCastigo: String,

    castigo4: Boolean,
    castigo4tarea4: String,
    castigo4inicioTarea4: String,

    castigo5: Boolean,
    castigo5inicioCastigo5: String,
    castigo5finCastigo5: String,

    descripcionIncidente: String,

    /* tipificacion leve */


    
    tipiLeve: [
        
        Boolean,
        Boolean,
        Boolean,
        Boolean,
        Boolean,
        Boolean,
        Boolean,
        Boolean,
        Boolean,
        Boolean,
        Boolean,
        Boolean,
        Boolean,
        Boolean,
        Boolean,
        Boolean,
        Boolean,
        Boolean
    ],


    /* tipificacion grave */
    tipiGrave: [
        
        Boolean,
        Boolean,
        Boolean,
        Boolean,
        Boolean,
        Boolean,
        Boolean,
        Boolean,
        Boolean,
        Boolean,
        Boolean,
        Boolean,
        Boolean,
        Boolean,
        Boolean,
    ],

    telefono: String,
    correo: String,
    alumnoIntermediario: String,
    familiar: String,




}, {
        timestamps: true
    });


module.exports = mongoose.model('Incidencia', convivenciaSchema);