const { Cliente, Articulo, 
        Aviso, Fenomeno, Prevision } = require("./models.js");

// ------- AVISO

exports.createAviso = (req, res) =>
    new Aviso({ tipo: req.body.tipo, descripcion: req.body.descripcion, fecha: req.body.fecha })
    .save((err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });

exports.readAvisos = (req, res) =>
    Aviso.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });

exports.readAviso = (req, res) =>
    Aviso.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);

exports.deleteAviso = (req, res) =>
    Aviso.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });

// ------- FENOMENO

exports.createFenomeno = (req, res) =>
    new Aviso({ tipo: req.body.tipo, intensidad: req.body.intensidad, 
                descripcion: req.body.descripcion, fecha: req.body.fecha })
    .save((err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });

exports.readFenomenos = (req, res) =>
    Fenomeno.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });

exports.readFenomeno = (req, res) =>
    Fenomeno.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);

exports.deleteFenomeno = (req, res) =>
    Fenomeno.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });
    
// ------- PREVISION

exports.createPrevision = (req, res) =>
    new Aviso({ descripcion: req.body.descripcion, fecha: req.body.fecha })
    .save((err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });

exports.readPrevisiones = (req, res) =>
    Prevision.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });

exports.readPrevision = (req, res) =>
    Prevision.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);

exports.deletePrevision = (req, res) =>
    Prevision.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });
    

// ------- CLIENTES

exports.readClientes = (req, res) =>
    Cliente.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });


exports.readCliente = (req, res) =>
    Cliente.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });


exports.deleteCliente = (req, res) =>
    Cliente.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });


exports.updateCliente = (req, res) =>
    Cliente.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { nombre: req.body.nombre, apellidos: req.body.apellidos } }, 
        (err, data) => {
            if (err) res.json({ error: err });
            else     res.json(data);
        }
    );


exports.createCliente = (req, res) =>
    new Cliente({ nombre: req.body.nombre, apellidos: req.body.apellidos })
    .save((err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });



// ------ ARTÍCULOS

exports.readArticulos = (req, res) =>
    Articulo.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });


exports.readArticulo = (req, res) =>
    Articulo.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });


exports.deleteArticulo = (req, res) =>
    Articulo.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });



exports.updateArticulo = (req, res) =>
    Articulo.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { nombre: req.body.nombre, precio: req.body.precio } }, 
        (err, data) => {
            if (err) res.json({ error: err });
            else     res.json(data);
        }
    );


exports.createArticulo = (req, res) =>
    new Articulo({ nombre: req.body.nombre, precio: req.body.precio })
    .save((err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });

