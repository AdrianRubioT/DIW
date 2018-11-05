const Convivencia = require('../models/convivencia.model.js');

// Crear y salvar
exports.create = (req, res) => {

    // Validamos el convivencia
    if (!req.body) {
        console.log(req.body);
        return res.status(400).send({
            message: "convivencia Vacio..."
        });
    }

    const convivencia = new Convivencia({

        /* datos Basicos */
        alumno: req.body.alumno,
        grupo: req.body.grupo,
        profesor: req.body.profesor,
        fechaIncidente: req.body.fechaIncidente,
        horaAtencioProfesor: req.body.horaAtencioProfesor,

        /* castigos */
        castigo1: req.body.castigo1 || false,

        castigo2: req.body.castigo2 || false,
        castigo3: req.body.castigo2Aparell,

        castigo3: req.body.castigo3 || false,
        castigo3inicioCastigo: req.body.castigo3inicioCastigo,
        castigo3finCastigo: req.body.castigo3finCastigo,

        castigo4: req.body.castigo4 || false,
        castigo4tarea4: req.body.castigo4tarea4,
        castigo4inicioTarea4: req.body.castigo4inicioTarea4,

        castigo5: req.body.castigo5 || false,
        castigo5inicioCastigo5: req.body.castigo5inicioCastigo5,
        castigo5finCastigo5: req.body.castigo5finCastigo5,

        descripcionIncidente: req.body.descripcionIncidente,

        /* tipificacion leve */
        tipiLeve1: req.body.tipiLeve1 || false,
        tipiLeve2: req.body.tipiLeve2 || false,
        tipiLeve3: req.body.tipiLeve3 || false,
        tipiLeve4: req.body.tipiLeve4 || false,
        tipiLeve5: req.body.tipiLeve5 || false,
        tipiLeve6: req.body.tipiLeve6 || false,
        tipiLeve7: req.body.tipiLeve7 || false,
        tipiLeve8: req.body.tipiLeve8 || false,
        tipiLeve9: req.body.tipiLeve9 || false,
        tipiLeve10: req.body.tipiLeve10 || false,
        tipiLeve11: req.body.tipiLeve11 || false,
        tipiLeve12: req.body.tipiLeve12 || false,
        tipiLeve13: req.body.tipiLeve13 || false,
        tipiLeve14: req.body.tipiLeve14 || false,
        tipiLeve15: req.body.tipiLeve15 || false,
        tipiLeve16: req.body.tipiLeve16 || false,
        tipiLeve17: req.body.tipiLeve17 || false,
        tipiLeve18: req.body.tipiLeve18 || false,



        /* tipificacion grave */
        tipiGrave1: req.body.tipiGrave1 || false,
        tipiGrave2: req.body.tipiGrave2 || false,
        tipiGrave3: req.body.tipiGrave3 || false,
        tipiGrave4: req.body.tipiGrave4 || false,
        tipiGrave5: req.body.tipiGrave5 || false,
        tipiGrave6: req.body.tipiGrave6 || false,
        tipiGrave7: req.body.tipiGrave7 || false,
        tipiGrave8: req.body.tipiGrave8 || false,
        tipiGrave9: req.body.tipiGrave9 || false,
        tipiGrave10: req.body.tipiGrave10 || false,
        tipiGrave11: req.body.tipiGrave11 || false,
        tipiGrave12: req.body.tipiGrave12 || false,
        tipiGrave13: req.body.tipiGrave13 || false,
        tipiGrave14: req.body.tipiGrave14 || false,
        tipiGrave15: req.body.tipiGrave15 || false,


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

    convivencia.save().then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something was wrong creating convivencia"
        });
    });
};



// Obtener todos los convivenciaes
exports.findAll = (req, res) => {

    convivencia.find().then(convivencia => {
        res.send(convivencia);
    }).catch(err => {
        res.status(500).send({
            message: err.message || " Algo fue mal mientras los capturabamos a todos"
        });
    });

};


// Obtener un convivencia por Id
exports.findOne = (req, res) => {
    convivencia.findById(req.params.convivenciaId)
        .then(convivencia => {
            if (!convivencia) {
                return res.status(404).send({
                    message: "convivencia NOT FOUND con ID " + req.params.convivenciaId
                });
            }
            res.send(convivencia);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "convivencia no encontrado con ese id :" + req.params.convivenciaId
                });
            }
            return res.status(500).send({
                message: "Tenemos NOSOTROS problemas con ese id :" + req.params.convivenciaId
            });
        });
};




// Actualizar un convivencia
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
        return res.status(400).send({
            message: "convivencia vacio"
        });
    }

    // Find note and update it with the request body
    convivencia.findByIdAndUpdate(req.params.convivenciaId, {
        nombre: req.body.nombre || "Sin nombre",
        profesion: req.body.profesion || "Sin profesion",
        puntosVida: req.body.puntosVida || 0,
        puntosCordura: req.body.puntosCordura || 0
    }, { new: true })
        .then(convivencia => {
            if (!convivencia) {
                return res.status(404).send({
                    message: "convivencia not found with id " + req.params.convivenciaId
                });
            }
            res.send(convivencia);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "convivencia not found with id " + req.params.convivenciaId
                });
            }
            return res.status(500).send({
                message: "Error updating convivencia with id " + req.params.convivenciaId
            });
        });
};

// Borrar un convivencia 
exports.delete = (req, res) => {
    convivencia.findByIdAndRemove(req.params.convivenciaId)
        .then(convivencia => {
            if (!convivencia) {
                return res.status(404).send({
                    message: "convivencia no encontrado " + req.params.convivenciaId
                });
            }
            res.send({ message: "Cthulhu ha vencido !" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "convivencia not found with id " + req.params.convivenciaId
                });
            }
            return res.status(500).send({
                message: "No podemos matar a ese convivencia with id " + req.params.convivenciaId
            });
        });
};