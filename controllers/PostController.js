const {storePostValidation} = require("../validations/post");
const {PostModel} = require("../models/post");
const {abort} = require("../helper");
const __ = require("lodash");
const {UserModel} = require("../models/user");
const {CommentModel} = require("../models/comment");

async function storePost(req, res) {
    const {error} = storePostValidation(req.body)
    if (error) return abort(res, 422, error.message)
    await PostModel.sync()
    let post = await PostModel.create({
        ...__.pick(req.body, ["title", "body"]),
        user_id: req.header.user.id,
        image: req.file ? req.file.filename : null
    })
    res.send(post)
}

async function getPosts(req, res) {
    let posts = await PostModel.findAll({include: [UserModel, CommentModel]});
    res.send(posts)
}

module.exports = {storePost, getPosts}