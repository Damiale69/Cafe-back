const { request, response } = require('express')
const CafeModel = require('../models/cafe.model')
const axios = require('axios');



const addCafeService = async (request) =>{
     
   const cafe = request.body

   try{
      const newCafe = new CafeModel(cafe)

      await newCafe.save()


      return{ message : "Cafe generado con exito", statusCode: 201}

   } catch (error){
      return{ message : "Ocurrio un error", statusCode : 400}
   }
   

}

const getAllCafeService = async() => {
    const allCafes = await CafeModel.find()

    return allCafes;

}

const getCafeByIdService = async (request,response) => {
   const{ id }  = request.params
   const carById = await CafeModel.findById(id)
   if (!carById) return {message: "Cafe no encontrado", statusCode: 404}
}

const updateCafeService = async (request,response) => {
    const { id } = request.params
    const cafeToEdit = request.body

    try {
         const carById = await CafeModel.findById(id)

         if (!carById) return {message: "Cafe no encontrado", statusCode: 404}
         
         cafeById.price = cafeById.price
         cafeById.variety = cafeById.variety
         cafeById.isNewCafe = cafeToEdit.hasOunProperty("isNewCafe")
             ? cafeToEdit.isNewCafe
             : cafeById.isNewCafe

         await cafeById.save()

         return {message: "Cafe editado con exito", statusCode: 200 }




    } catch (error) {
          return{ message : "Ocurrio un error", statusCode : 400}


    }

}

const deleteCafeService = async (request, response) => {
    const { id } = request.params

    try {
         const cafeToDelete = await CafeModel.delete({_id:id})



         if(carToDelete.deletedCount == 0) return  {message: "Cafe no encontrado", statusCode: 404}

         return {message: "Cafe eliminado con exito", statusCode: 200}

    } catch (error) {
          return{ message : "Ocurrio un error", statusCode : 400}
    }






}


const getExternalApiData = async () => {
    try {
        const response = await axios.get('https://api.externa.com/endpoint');
        return response.data;
    } catch (error) {
        return { message: "Error al conectar con la API externa", error: error.message };
    }
}




module.exports = {
    addCafeService,
    getAllCafeService,
    getCafeByIdService,
    updateCafeService,
    deleteCafeService,
    getExternalApiData

}