import prisma from '../../../shared/prisma';

const getAllFromDb = async () => {
  const result = await prisma.day.findMany({});

  return result;
};

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
type IOpeningHours = {
  id: string;
  name: string;
  openTime: string;
  closeTime: string;
}[];
const updateOpeningHours = async (data: any) => {
  // console.log(data, 'service');
  console.log(data.id, 'hello world');
  const result = await prisma.day.update({
    where: {
      id: data.id,
    },
    data: {
      openTime: data.openTime,

      closeTime: data.closeTime,
    },
  });

  return result;
};
export const dayService = {
  getAllFromDb,
  updateOpeningHours,
};
