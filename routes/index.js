var express = require('express');
const IndexController = require("../controllers/index")
var router = express.Router();
router.post('/login', IndexController.login);
router.get('/user', IndexController.user);
module.exports = router;
