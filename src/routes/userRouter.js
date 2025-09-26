const express = require('express');
const {check}= require('express-validator');
const userRouter = express.Router();
const { createUserController } = require('../controller/userController');
const { validatorMiddleware } = require('../utils/validator');
const {repeatPasswordMiddleware}= require('../utils/repeatPassword');

userRouter.get('/saludar', (request , response )=>{
    response.send('hola desde ruta de prueba');
})


userRouter.post('/',
[
    check("email")
         .isEmail()
         .withMessage("El email debe ser un email valido"),
    check("age")
            .isInt({min: 18})
            .withMessage("La edad debe ser un numero y mayor de 18"),
    check("password")
         .isLength({min: 8, max:20})
         .withMessage("La contraseña debe tener entre 8 y 20 caracteres")
         .matches(/\d/)
         .withMessage("La contraseña debe contener al menos un numero"),

 ],
    validatorMiddleware,
    repeatPasswordMiddleware,
    createUserController,

);

module.exports = userRouter;