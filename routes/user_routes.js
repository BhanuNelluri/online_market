import express from 'express';
import {body} from 'express-validator';

import { signin, signup } from '../controllers/user_controllers.js';
import { validateInput } from '../middlewares/validate_input.js';

const router = express.Router();

router.get('/signin', signin);
router.post('/signup',[
    body('name').notEmpty().trim().isAlphanumeric(),
    body('email').notEmpty().trim().isEmail().normalizeEmail(),
    body('password').notEmpty().trim().isLength({ min: 6 }),
  ],
  validateInput, signup);

export default router;