import { z } from 'zod';
const create = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is Required',
    }),
    image: z.string({
      required_error: 'Image is Required',
    }),
    description: z.string({
      required_error: 'Description is Required',
    }),
    price: z.number({
      required_error: 'Price is Required',
    }),
    availability: z.enum(['upcoming', 'available']),
  }),
});

export const serviceValidation = {
  create,
};
