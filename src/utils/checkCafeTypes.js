const { request } = require("express");



const checkCafeTypes = (request, response , next) =>{

    const cafe = request.body;

    const arrayOfValidations = [];

    if(typeof cafe.variety!="string"){
         arrayOfValidations.push("variety debe ser un string");

    }

    if(typeof cafe.price !="number"){
         arrayOfValidations.push("price debe ser un number");
   
    } 
   
    if (arrayOfValidations,length > 0 ){
         return response . json ({
             statusCode:400,
             message: "Revisar el objeto enviado",
             arrayOfValidations

         } )

        next();


    }





}
module.exports = checkCafeTypes;