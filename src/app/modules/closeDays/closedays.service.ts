import { CloseDay } from '@prisma/client';
import prisma from '../../../shared/prisma';

const insertIntoDB = async (data: CloseDay) => {
  const result = await prisma.closeDay.create({
    data: data,
  });
  return result;
};
const getAllCloseDays = async () => {
  const result = await prisma.closeDay.findMany();
  return result;
};
const deleteFromDB = async (data: any) => {
  const result = await prisma.closeDay.delete({
    where: {
      date: data.date,
    },
  });
  return result;
};

export const closeDayService = {
  insertIntoDB,
  getAllCloseDays,
  deleteFromDB,
};
