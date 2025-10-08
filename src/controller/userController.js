const { response } = require("express")
const { createUserService } = require("../services/userService")



const createUserController = async (request , response) => {
     const newUser = await createUserService(request)

     response.json(newUser)

}
module.exports = {
     createUserController
    
    }