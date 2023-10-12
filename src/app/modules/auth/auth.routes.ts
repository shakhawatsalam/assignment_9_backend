import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { UserValidation } from '../user/user.validation';
import { AuthController } from './auth.controller';

const router = express.Router();
router.post(
  '/signup',
  validateRequest(UserValidation.create),
  AuthController.SignUP
);

router.post('/login', AuthController.loginUser);
export const AuthRouter = router;
