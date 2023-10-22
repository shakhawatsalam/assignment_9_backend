import { NextFunction, Request, Response } from 'express';
import { timeSlotsServices } from './timeSlots.service';

const createTimeSlot = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { ...timeSlotData } = req.body;
    console.log(timeSlotData);
    // console.log(timeSlotData);
    const timeSlot = await timeSlotsServices.createTimeSlot(timeSlotData);
    res.status(200).json({
      status: 'success',
      message: 'Time Slot created successfully',
      data: timeSlot,
    });
  } catch (error) {
    next(error);
  }
};

const getAllTimeSlots = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { date } = req.query;
  console.log(date);
  try {
    const timeSlots = await timeSlotsServices.getAllTimeSlots(date);
    res.status(200).json({
      status: 'success',
      message: 'Time Slots fetched successfully',
      data: timeSlots.data,
    });
  } catch (error) {
    next(error);
  }
};

const getSingleTimeSlot = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const timeSlot = await timeSlotsServices.getSingleTimeSlot(id);
    res.status(200).json({
      status: 'success',
      message: 'Time Slot fetched successfully',
      data: timeSlot,
    });
  } catch (error) {
    next(error);
  }
};

const updateTimeSlot = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const { ...timeSlotData } = req.body;
    const timeSlot = await timeSlotsServices.updateTimeSlot(id, timeSlotData);
    res.status(200).json({
      status: 'success',
      message: 'Time Slot updated successfully',
      data: timeSlot,
    });
  } catch (error) {
    next(error);
  }
};

const deleteTimeSlot = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const timeSlot = await timeSlotsServices.deleteTimeSlot(id);
    res.status(200).json({
      status: 'success',
      message: 'Time Slot deleted successfully',
      data: timeSlot,
    });
  } catch (error) {
    next(error);
  }
};

export const timeSlotsController = {
  createTimeSlot,
  getAllTimeSlots,
  getSingleTimeSlot,
  updateTimeSlot,
  deleteTimeSlot,
};
