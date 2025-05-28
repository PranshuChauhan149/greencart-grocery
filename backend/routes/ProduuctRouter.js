import express from 'express'
import { upload } from '../config/multer.js';
import authSeller from '../middlewares/authSeller.js';
import { addProduct, changeStock, productById, productList } from '../controllers/ProductController.js';

const productRouter = express.Router();


productRouter.post("/add", upload.array('images'), authSeller, addProduct);
productRouter.get("/list",productById)
productRouter.get("/id",productList)
productRouter.get("/stock",authSeller,changeStock)


export default productRouter;