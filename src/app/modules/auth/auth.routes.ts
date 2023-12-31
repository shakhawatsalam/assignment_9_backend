import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AuthController } from './auth.controller';
import { authValidation } from './auth.validation';
// import { authValidation } from './auth.validation';

const router = express.Router();
router.post(
  '/signup',
  // validateRequest(UserValidation.create),
  AuthController.SignUP
);

router.post(
  '/login',
  validateRequest(authValidation.logIn),
  AuthController.loginUser
);
export const AuthRouter = router;
