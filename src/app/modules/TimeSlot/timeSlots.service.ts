import { TimeSlots } from '@prisma/client';
import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import prisma from '../../../shared/prisma';

const createTimeSlot = async (timeSlot: TimeSlots): Promise<TimeSlots> => {
  const { startTime, date } = timeSlot;
  const isExist = await prisma.timeSlots.findFirst({
    where: {
      startTime: startTime,
      date: date,
    },
  });
  if (isExist) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'This Slot is Already Created');
  }
  const result = await prisma.timeSlots.create({
    data: timeSlot,
  });
  return result;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getAllTimeSlots = async (date: any): Promise<TimeSlots[] | any> => {
  const result = await prisma.timeSlots.findMany({
    where: {
      date: date,
    },
  });
  const total = await prisma.timeSlots.count();
  return {
    meta: {
      total,
    },
    data: result,
  };
};
// const getAllTimeSlots = async (date: any): Promise<TimeSlots[] | any> => {
//   try {
//     const selectedDateTime = new Date(
//       Date.UTC(
//         parseInt(date.substring(0, 4)), // Year
//         parseInt(date.substring(5, 7)) - 1, // Month (0-based)
//         parseInt(date.substring(8, 10)), // Day
//         parseInt(date.substring(11, 13)), // Hours
//         parseInt(date.substring(14, 16)), // Minutes
//         parseInt(date.substring(17, 19)) // Seconds
//       )
//     );
//     console.log(selectedDateTime);
//     const result = await prisma.timeSlots.findMany({
//       where: {
//         date: selectedDateTime.toISOString(),
//       },
//     });
//     const total = await prisma.timeSlots.count();
//     return {
//       meta: {
//         total,
//       },
//       data: result,
//     };
//   } catch (error) {
//     console.error(error);
//     // Handle the error as needed
//     return error.message;
//   }
// };

const getSingleTimeSlot = async (id: string): Promise<TimeSlots | null> => {
  const result = await prisma.timeSlots.findUnique({
    where: {
      id: id,
    },
  });
  return result;
};

const updateTimeSlot = async (
  id: string,
  timeSlot: TimeSlots
): Promise<TimeSlots> => {
  const result = await prisma.timeSlots.update({
    where: {
      id: id,
    },
    data: timeSlot,
  });
  return result;
};

const deleteTimeSlot = async (id: string): Promise<TimeSlots> => {
  const result = await prisma.timeSlots.delete({
    where: {
      id: id,
    },
  });
  return result;
};

export const timeSlotsServices = {
  createTimeSlot,
  getAllTimeSlots,
  getSingleTimeSlot,
  updateTimeSlot,
  deleteTimeSlot,
};
