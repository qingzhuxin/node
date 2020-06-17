var express = require('express');
const IndexController = require("../controllers/index")
var router = express.Router();
router.post('/login', IndexController.login);
router.get('/user', IndexController.user);
router.post("/adduser", IndexController.addUser);
module.exports = router;
