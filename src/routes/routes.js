const express = require('express');
const router = express.Router();
const {addCafeController,getAllCafeController,getCafeByIdController,updateCafeController,deleteCafeController} = require ('../controller/cafeContoller')
const checkCafeTypes = require('../utils/checkCafeTypes')
const validatorMiddleware = require('../utils/validator')


router.get('/', (request, response)=>{
    response.send("Bienvenidos a mi servidor");
})


router.post('/cafe', checkCafeTypes ,addCafeController)

router.get('/cafe', getAllCafeController)

router.get('/cafe/:id', getCafeByIdController)

router.put('/cafe/:id', updateCafeController)

router.delete('/cafe/:id' , deleteCafeController)

module.exports = router;