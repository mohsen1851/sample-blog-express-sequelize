let router = require('express').Router();
const {storeUser, getUsers, login} = require("../controllers/UserController");

router.post('/', storeUser)
router.post('/login', login)
router.get('/', getUsers)

module.exports = router;
