import { Service } from '@prisma/client';
import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import prisma from '../../../shared/prisma';

const insertIntoDB = async (data: Service) => {
  const result = await prisma.service.create({
    data,
  });
  return result;
};

// * 🚀🚀 Get By Id service
const getSingleService = async (id: string) => {
  const result = await prisma.service.findUnique({
    where: {
      id,
    },
  });
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Service Not Found');
  }
  return result;
};
// * 🚀🚀 Update by Id
const updateService = async (id: string, data: Partial<Service>) => {
  const result = await prisma.service.update({
    where: {
      id,
    },
    data,
  });
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Service Not Found');
  }
  return result;
};
// * 🚀🚀 Delete By Id service
const deleteService = async (id: string) => {
  const result = await prisma.service.delete({
    where: {
      id,
    },
  });
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Service Not Found');
  }
  return result;
};

export const serviceService = {
  insertIntoDB,
  getSingleService,
  deleteService,
  updateService,
};
