const joi = require("joi");

function storeCommentValidation(data) {
    return joi.object({
        body: joi.string().required().messages({
            'any.required': 'فیلد متن کامنت خالی است'
        }),
    }).validate(data,{allowUnknown:true})
}

module.exports = {storeCommentValidation}