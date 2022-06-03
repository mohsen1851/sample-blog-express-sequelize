const {storeUserValidation, loginUserValidation} = require("../validations/users");
const {UserModel} = require("../models/user");
const {abort, generateAccessToken} = require("../helper");
const bcrypt = require("bcrypt");
const _ = require("lodash")
const {PostModel} = require("../models/post");

async function storeUser(req, res) {
    const {error} = storeUserValidation(req.body)

    if (error) return abort(res, 422, error.message)

    let user = await UserModel.create({
        name: req.body.name,
        mobile: req.body.mobile,
        password: await bcrypt.hash(req.body.password, 10)
    }).catch(err => console.log(err))
    res.send(user)
}

async function login(req, res) {
    const {error} = loginUserValidation(req.body)

    if (error) return abort(res, 422, error.message)

    // let user = await UserModel.findOne({mobile: req.body.mobile})
    let user = await UserModel.findOne({where: {mobile: req.body.mobile}})
    if (user && await bcrypt.compare(req.body.password, user.password)) res.send(
        {token: generateAccessToken({id: user.id}), ..._.pick(user, ["name", "id", "mobile"])}
    )
    ;
    else
        abort(res, 404, 'کاربر پیدا نشد')
}

async function getUsers(req, res) {
    let users = await UserModel.findAll({include:PostModel});
    res.send({users})
}

module.exports = {storeUser, getUsers, login}