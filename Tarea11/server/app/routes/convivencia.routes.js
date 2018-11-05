module.exports = (app) => {
    const convivencia = require('../controllers/convivencia.controller.js');

    // Create a new convivencia
    app.post('/convivencia', convivencia.create);

    // Retrieve all convivencia
    app.get('/convivencia', convivencia.findAll);

    // Retrieve a single convivencia with convivenciaId
    app.get('/convivencia/:convivenciaId', convivencia.findOne);

    // Update a convivencia with convivenciaId
    app.put('/convivencia/:convivenciaId', convivencia.update);

    // Delete a convivencia with convivenciaId
    app.delete('/convivencia/:convivenciaId', convivencia.delete);
}