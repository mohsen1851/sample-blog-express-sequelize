let router = require('express').Router();
const {storeComment} = require("../controllers/CommentController");
const {auth} = require("../middlewares");

router.post('/:id',auth,storeComment)

module.exports = router;
