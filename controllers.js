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
    });

exports.updateAviso = (req, res) =>
    Aviso.findOneAndUpdate(
    { _id: req.params.id },
    { $set: { tipo: req.body.tipo, descripcion: req.body.descripcion, fecha: req.body.fecha } }, 
    (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    }
);

exports.deleteAviso = (req, res) =>
    Aviso.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });

// ------- FENOMENO

exports.createFenomeno = (req, res) =>
    new Fenomeno({ tipo: req.body.tipo, intensidad: req.body.intensidad, 
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
    });

exports.updateFenomeno = (req, res) =>
    Fenomeno.findOneAndUpdate(
    { _id: req.params.id },
    { $set: { tipo: req.body.tipo, intensidad: req.body.intensidad, 
        descripcion: req.body.descripcion, fecha: req.body.fecha } }, 
    (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    }
);
        
exports.deleteFenomeno = (req, res) =>
    Fenomeno.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });
    
// ------- PREVISION

exports.createPrevision = (req, res) =>
    new Prevision({ descripcion: req.body.descripcion, fecha: req.body.fecha })
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
    });

exports.updatePrevision = (req, res) =>
    Prevision.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { descripcion: req.body.descripcion, fecha: req.body.fecha } }, 
        (err, data) => {
            if (err) res.json({ error: err });
            else     res.json(data);
        }
    );
                
exports.deletePrevision = (req, res) =>
    Prevision.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });
    