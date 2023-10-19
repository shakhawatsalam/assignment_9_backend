import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { UserController } from './user.controller';
import { UserValidation } from './user.validation';

const router = express.Router();
router.get(
  '/:id',
  // auth(ENUM_USER_ROLE.ADMIN),
  UserController.getSingleUserFromDB
);
router.get('/', UserController.getAllUserFromDB);
router.patch(
  '/:id',
  // auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(UserValidation.update),
  UserController.updateSingleUserFromDB
);

router.delete(
  '/:id',
  // auth(ENUM_USER_ROLE.ADMIN),
  UserController.deleteSingleUserFromDB
);

export const UserRoutes = router;
