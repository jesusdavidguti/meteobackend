const cors       = require('cors')
const express    = require("express");
const controller = require("./controllers.js");


const router = express.Router();


// --------------- API REST CRUD

router.get    ("/avisos",      cors(), controller.readAvisos);  // Read All
router.get    ("/avisos/:id",  cors(), controller.readAviso);   // Read
router.delete ("/avisos/:id",  cors(), controller.deleteAviso); // Delete
router.put    ("/avisos/:id",  cors(), controller.updateAviso); // Update
router.post   ("/avisos",      cors(), controller.createAviso); // Create

router.get    ("/fenomenos",     cors(), controller.readFenomenos);  // Read All
router.get    ("/fenomenos/:id", cors(), controller.readFenomeno);   // Read
router.delete ("/fenomenos/:id", cors(), controller.deleteFenomeno); // Delete
router.put    ("/fenomenos/:id", cors(), controller.updateFenomeno); // Update
router.post   ("/fenomenos",     cors(), controller.createFenomeno); // Create

router.get    ("/previsiones",      cors(), controller.readPrevisiones);    // Read All
router.get    ("/previsiones/:id",  cors(), controller.readPrevision);      // Read
router.delete ("/previsiones/:id",  cors(), controller.deletePrevision);    // Delete
router.put    ("/previsiones/:id",  cors(), controller.updatePrevision);    // Update
router.post   ("/previsiones",      cors(), controller.createPrevision);    // Create


module.exports = router;
