import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { dayService } from './days.service';

const getAllFromDb = catchAsync(async (req: Request, res: Response) => {
  const result = await dayService.getAllFromDb();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Service Booked Successfully',
    data: result,
  });
});
const updateOpeningHours = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;
  console.log(data, 'controller');
  const result = await dayService.updateOpeningHours(data);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Service Booked Successfully',
    data: result,
  });
});

export const dayController = {
  getAllFromDb,
  updateOpeningHours,
};
