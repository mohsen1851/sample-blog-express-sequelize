let router = require('express').Router();
const {storePost, getPosts} = require("../controllers/PostController");
const {auth}= require("../middlewares/authMiddleware");
const {upload} = require("../middlewares/uploadMiddleware");



router.post('/',[auth,upload.single('image')], storePost)
router.get('/', getPosts)

module.exports = router;
