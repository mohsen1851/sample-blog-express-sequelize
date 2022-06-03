const {storeCommentValidation} = require("../validations/comments");
const {abort} = require("../helper");
const __ = require("lodash");
const {CommentModel} = require("../models/comment");
const {PostModel} = require("../models/post");

async function storeComment(req, res) {
    const {error} = storeCommentValidation(req.body)
    if (error) return abort(res, 422, error.message)
    await CommentModel.sync()
    let post=await PostModel.findByPk(req.params.id)
    if(!post)
        return abort(res,404,'پست یافت نشد')

    let comment = await CommentModel.create({
        ...__.pick(req.body, ["body"]),
        user_id: req.body.user.id,
        post_id: post.id,
    })
    res.send(comment)
}

module.exports={storeComment}