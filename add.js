const Joi = require("joi");
const validPass = Joi.string().min(3).max(10).alphanum();
console.log(validPass.validate("424141"));