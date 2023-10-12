import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ServiceController } from './service.controller';
import { serviceValidation } from './service.validation';

const router = express.Router();

router.post(
  '/create-service',
  validateRequest(serviceValidation.create),
  ServiceController.insertIntoDB
);

export const ServiceRouter = router;
