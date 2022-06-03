const {storePostValidation} = require("../validations/post");
const {PostModel} = require("../models/post");
const {abort} = require("../helper");
const __ = require("lodash");
const {UserModel} = require("../models/user");

async function storePost(req, res) {
    const {error} = storePostValidation(req.body)
    if (error) return abort(res,422, error.message)
    // let post = new PostModel({...__.pick(req.body,["title","body"]),user:req.body.user._id})
    let post = await PostModel.create({...__.pick(req.body,["title","body"]),user_id:req.body.user.id})
    res.send(post)
}

async function getPosts(req, res) {
    let posts = await PostModel.findAll({include:UserModel});
    res.send(posts)
}

module.exports = {storePost, getPosts}