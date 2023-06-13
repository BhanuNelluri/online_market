import express from 'express';
import {body} from 'express-validator';
import { getAllProducts,createProduct,deleteProduct } from '../controllers/product_controllers.js';
import {authentication} from '../middlewares/authentication.js';
import { validateInput } from '../middlewares/validate_input.js';

const router = express.Router();

router.get('/db-search',getAllProducts);
router.post('/db-sell',authentication,[
    body('name').notEmpty().trim().escape(),
    body('price').notEmpty().isFloat({ min: 0 }),
  ],
  validateInput, createProduct);
  router.delete('/:id/db-buy', authentication, deleteProduct);

export default router;