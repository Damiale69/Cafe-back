
const { request, response } = require('express')
const{addCafeService,getAllCafeService,getCafeByIdService,updateCafeService,deleteCafeService} =require ('../services/cafeService')

const addCafeController = async(request,response) =>{
   const newCafe = await addCafeService(request)

     response.json(newCafe)

}

const getAllCafeController = async (_, response) => {
    const allCafes = await getAllCafeService()

    response.json(allCafes)
}

const getCafeByIdController = async (request, response) => {
    const cafeById = await getCafeByIdService(request)

    response.json(cafeById)

}

const updateCafeController = async (request,response) =>{
    const cafeToEdit = await updateCafeService (request)


    response.json (cafeToEdit)

}

const deleteCafeController = async (request,response) =>{

    const cafeToDelete = await deleteCafeService (request)


    response.json (cafeToDelete)
}








module.exports = {
    addCafeController,
    getAllCafeController,
    getCafeByIdController,
    updateCafeController,
    deleteCafeController


}