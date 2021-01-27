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

module.exports = router;
