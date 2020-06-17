var express = require('express');
const IndexController = require("../controllers/index")
var router = express.Router();
router.post('/login', IndexController.login);
router.get('/user', IndexController.user);
router.post("/adduser", IndexController.addUser);
router.delete("/deleteuser", IndexController.deleteUser);
router.get("/jp", function (req, res) {
    console.dir(req.originalUrl) // '/admin/new'
    console.dir(req.baseUrl) // '/admin'
    console.dir(req.protocol);
    console.dir(req.xhr);
})
module.exports = router;
