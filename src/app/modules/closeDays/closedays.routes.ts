import express from 'express';
import { CloseDaysController } from './closedays.controller';

const router = express.Router();

router.get('/', CloseDaysController.getAllCloseDays);
router.post('/', CloseDaysController.insertIntoDB);
router.delete('/', CloseDaysController.deleteFromDB);

export const closedaysRoutes = router;
