import ProdController from "../controllers/product";
import authMiddleware from "../middleware/authenticate"
import express from "express"
 
const router = express.Router()
const controller = new ProdController()

router
    .route('/')
    .get(authMiddleware.authenticate, controller.get)

router
    .route('/')
    .post(authMiddleware.authenticate, controller.post)

router
    .route('/id/:id')
    .get(authMiddleware.authenticate, controller.getbyId)

router
    .route('/:id')
    .put(authMiddleware.authenticate, controller.put)

router
    .route('/:id')
    .delete(authMiddleware.authenticate, controller.delete)

router
    .route('/name/:name')
    .get(authMiddleware.authenticate, controller.getbyName)

router
    .route('/category/:category')
    .get(authMiddleware.authenticate, controller.getbyCategory)

router
    .route('/count')
    .get(authMiddleware.authenticate, controller.countProds)

export default router