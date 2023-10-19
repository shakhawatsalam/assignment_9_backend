import express from 'express';
import { dayController } from './days.controller';

const router = express.Router();

router.get('/', dayController.getAllFromDb);
router.patch('/openingHours', dayController.updateOpeningHours);

export const dayRoutes = router;
