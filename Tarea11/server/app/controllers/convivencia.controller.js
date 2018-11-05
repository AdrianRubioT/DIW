const Investigador = require('../models/convivencia.model.js');

// Crear y salvar
exports.create = (req, res) => {

    // Validamos el Investigador
    if (!req.body) {
        console.log(req.body);
        return res.status(400).send({
            message: "Investigador Vacio..."
        });
    }

    const investigador = new Investigador({

        /* datos Basicos */
        alumno: req.body.alumno,
        grupo: req.body.grupo,
        profesor: req.body.profesor,
        fechaIncidente: req.body.fechaIncidente,
        horaAtencioProfesor: req.body.horaAtencioProfesor,

        /* castigos */
        castigo1: req.body.castigo1,

        castigo2: req.body.castigo2,
        castigo3: req.body.castigo2Aparell,

        castigo3: req.body.castigo3,
        castigo3inicioCastigo: req.body.castigo3inicioCastigo,
        castigo3finCastigo: req.body.castigo3finCastigo,

        castigo4: req.body.castigo4,
        castigo4tarea4: req.body.castigo4tarea4,
        castigo4inicioTarea4: req.body.castigo4inicioTarea4,

        castigo5: req.body.castigo5,
        castigo5inicioCastigo5: req.body.castigo5inicioCastigo5,
        castigo5finCastigo5: req.body.castigo5finCastigo5,

        descripcionIncidente: req.body.descripcionIncidente,

        /* tipificacion leve */
        tipiLeve1: req.body.tipiLeve1,
        tipiLeve2: req.body.tipiLeve2,
        tipiLeve3: req.body.tipiLeve3,
        tipiLeve4: req.body.tipiLeve4,
        tipiLeve5: req.body.tipiLeve5,
        tipiLeve6: req.body.tipiLeve6,
        tipiLeve7: req.body.tipiLeve7,
        tipiLeve8: req.body.tipiLeve8,
        tipiLeve9: req.body.tipiLeve9,
        tipiLeve10: req.body.tipiLeve10,
        tipiLeve11: req.body.tipiLeve11,
        tipiLeve12: req.body.tipiLeve12,
        tipiLeve13: req.body.tipiLeve13,
        tipiLeve14: req.body.tipiLeve14,
        tipiLeve15: req.body.tipiLeve15,
        tipiLeve16: req.body.tipiLeve16,
        tipiLeve17: req.body.tipiLeve17,
        tipiLeve18: req.body.tipiLeve18,



        /* tipificacion grave */
        tipiGrave1: req.body.tipiGrave1,
        tipiGrave2: req.body.tipiGrave2,
        tipiGrave3: req.body.tipiGrave3,
        tipiGrave4: req.body.tipiGrave4,
        tipiGrave5: req.body.tipiGrave5,
        tipiGrave6: req.body.tipiGrave6,
        tipiGrave7: req.body.tipiGrave7,
        tipiGrave8: req.body.tipiGrave8,
        tipiGrave9: req.body.tipiGrave9,
        tipiGrave10: req.body.tipiGrave10,
        tipiGrave11: req.body.tipiGrave11,
        tipiGrave12: req.body.tipiGrave12,
        tipiGrave13: req.body.tipiGrave13,
        tipiGrave14: req.body.tipiGrave14,
        tipiGrave15: req.body.tipiGrave15,


        telfono: req.body.telfono,
        correo: req.body.correo,
        alumnoIntermediario: req.body.alumnoIntermediario,
        familiar:req.body.familiar,

/* 
        nombre: req.body.nombre || "Sin Nombre",
        profesion: req.body.profesion || "Sin profesion",
        puntosVida: req.body.vida || 42,
        puntosCordura: req.body.puntosCordura || 21 */
    })

    investigador.save().then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something was wrong creating investigador"
        });
    });
};



// Obtener todos los investigadores
exports.findAll = (req, res) => {

    Investigador.find().then(investigadores => {
        res.send(investigadores);
    }).catch(err => {
        res.status(500).send({
            message: err.message || " Algo fue mal mientras los capturabamos a todos"
        });
    });

};


// Obtener un investigador por Id
exports.findOne = (req, res) => {
    Investigador.findById(req.params.investigadorId)
        .then(investigador => {
            if (!investigador) {
                return res.status(404).send({
                    message: "Investigador NOT FOUND con ID " + req.params.investigadorId
                });
            }
            res.send(investigador);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Investigador no encontrado con ese id :" + req.params.investigadorId
                });
            }
            return res.status(500).send({
                message: "Tenemos NOSOTROS problemas con ese id :" + req.params.investigadorId
            });
        });
};




// Actualizar un investigador
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
        return res.status(400).send({
            message: "Investigador vacio"
        });
    }

    // Find note and update it with the request body
    Investigador.findByIdAndUpdate(req.params.investigadorId, {
        nombre: req.body.nombre || "Sin nombre",
        profesion: req.body.profesion || "Sin profesion",
        puntosVida: req.body.puntosVida || 0,
        puntosCordura: req.body.puntosCordura || 0
    }, { new: true })
        .then(investigador => {
            if (!investigador) {
                return res.status(404).send({
                    message: "Investigador not found with id " + req.params.investigadorId
                });
            }
            res.send(investigador);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Investigador not found with id " + req.params.investigadorId
                });
            }
            return res.status(500).send({
                message: "Error updating Investigador with id " + req.params.investigadorId
            });
        });
};

// Borrar un investigador 
exports.delete = (req, res) => {
    Investigador.findByIdAndRemove(req.params.investigadorId)
        .then(investigador => {
            if (!investigador) {
                return res.status(404).send({
                    message: "Investigador no encontrado " + req.params.investigadorId
                });
            }
            res.send({ message: "Cthulhu ha vencido !" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "Investigador not found with id " + req.params.investigadorId
                });
            }
            return res.status(500).send({
                message: "No podemos matar a ese Investigador with id " + req.params.investigadorId
            });
        });
};