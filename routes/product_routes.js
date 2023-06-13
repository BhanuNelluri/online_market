import express from 'express';
import {body} from 'express-validator';
import { getAllProducts,createProduct } from '../controllers/product_controllers.js';
import {authentication} from '../middlewares/authentication.js';
import { validateInput } from '../middlewares/validate_input.js';

const router = express.Router();

router.get('/db-search',getAllProducts);
router.post('/db-save',authentication,[
    body('name').notEmpty().trim().escape(),
    body('price').notEmpty().isFloat({ min: 0 }),
  ],
  validateInput, createProduct);

export default router;