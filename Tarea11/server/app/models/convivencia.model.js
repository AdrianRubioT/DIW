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

    tipiLeve:{
        tipiLeve1: Boolean,
        tipiLeve2: Boolean,
        tipiLeve3: Boolean,
        tipiLeve4: Boolean,
        tipiLeve5: Boolean,
        tipiLeve6: Boolean,
        tipiLeve7: Boolean,
        tipiLeve8: Boolean,
        tipiLeve9: Boolean,
        tipiLeve10: Boolean,
        tipiLeve11: Boolean,
        tipiLeve12: Boolean,
        tipiLeve13: Boolean,
        tipiLeve14: Boolean,
        tipiLeve15: Boolean,
        tipiLeve16: Boolean,
        tipiLeve17: Boolean,
        tipiLeve18: Boolean

    },

    tipiLeve1: Boolean,
    tipiLeve2: Boolean,
    tipiLeve3: Boolean,
    tipiLeve4: Boolean,
    tipiLeve5: Boolean,
    tipiLeve6: Boolean,
    tipiLeve7: Boolean,
    tipiLeve8: Boolean,
    tipiLeve9: Boolean,
    tipiLeve10: Boolean,
    tipiLeve11: Boolean,
    tipiLeve12: Boolean,
    tipiLeve13: Boolean,
    tipiLeve14: Boolean,
    tipiLeve15: Boolean,
    tipiLeve16: Boolean,
    tipiLeve17: Boolean,
    tipiLeve18: Boolean,



    /* tipificacion grave */
    tipiGrave1: Boolean,
    tipiGrave2: Boolean,
    tipiGrave3: Boolean,
    tipiGrave4: Boolean,
    tipiGrave5: Boolean,
    tipiGrave6: Boolean,
    tipiGrave7: Boolean,
    tipiGrave8: Boolean,
    tipiGrave9: Boolean,
    tipiGrave10: Boolean,
    tipiGrave11: Boolean,
    tipiGrave12: Boolean,
    tipiGrave13: Boolean,
    tipiGrave14: Boolean,
    tipiGrave15: Boolean,


    telefono: String,
    correo: String,
    alumnoIntermediario: String,
    familiar: String,




}, {
        timestamps: true
    });


module.exports = mongoose.model('Incidencia', convivenciaSchema);