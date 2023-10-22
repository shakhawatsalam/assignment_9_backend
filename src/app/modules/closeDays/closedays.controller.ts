import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { closeDayService } from './closedays.service';

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;

  const result = await closeDayService.insertIntoDB(data);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Service Booked Successfully',
    data: result,
  });
});
const getAllCloseDays = catchAsync(async (req: Request, res: Response) => {
  const result = await closeDayService.getAllCloseDays();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Service Booked Successfully',
    data: result,
  });
});
const deleteFromDB = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;
  console.log(data);
  const result = await closeDayService.deleteFromDB(data);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Service Booked Successfully',
    data: result,
  });
});

export const CloseDaysController = {
  insertIntoDB,
  getAllCloseDays,
  deleteFromDB,
};
