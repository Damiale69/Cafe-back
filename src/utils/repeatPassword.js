


const repeatPasswordMiddleware = (request, response, next) => {

    if(request.body.password !== request.body.repeatPassword){

        return response.status(400).json({message: "Las contraseñas no coinciden"})
    }


    next()
}

module.exports = repeatPasswordMiddleware;