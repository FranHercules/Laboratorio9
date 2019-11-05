var express = require('express');
var router = express.Router();
const registerControler = require("./../controllers/RegisterContrrollers");
router.get("/", registerControler.getRegister);
router.get("/:id", registerControler.getOneRegister);
router.post("/", registerControler.insert);
module.exports = router;
