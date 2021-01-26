const mongoose = require('mongoose');

/* const Cliente = mongoose.model('Cliente',
  new mongoose.Schema({ nombre: String, apellidos: String })
);
 */

const Aviso = mongoose.model('Aviso',
  new mongoose.Schema({ tipo: String, descripcion: String, fecha: Date })
);

const Fenomeno = mongoose.model('Fenomeno',
  new mongoose.Schema({ tipo: String, intensidad: Number, descripcion: String, fecha: Date })
);

const Prevision = mongoose.model('Prevision',
  new mongoose.Schema({ descripcion: String, fecha: Date })
);

module.exports = {
  Aviso: Aviso,
  Fenomeno: Fenomeno,
  Prevision: Prevision
}

// Otra forma más corta:
// module.exports = {
//     Aviso,
//     Fenomeno,
//     Prevision
// }
