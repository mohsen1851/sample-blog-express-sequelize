let router = require('express').Router();
const {storePost, getPosts} = require("../controllers/PostController");
const {auth} = require("../middlewares");



router.post('/', auth, storePost)
router.get('/', getPosts)

module.exports = router;
