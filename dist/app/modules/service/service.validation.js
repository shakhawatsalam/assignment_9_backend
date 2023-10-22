"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceValidation = void 0;
const zod_1 = require("zod");
const create = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({
            required_error: 'Title is Required',
        }),
        image: zod_1.z.string({
            required_error: 'Image is Required',
        }),
        description: zod_1.z.string({
            required_error: 'Description is Required',
        }),
        price: zod_1.z.number({
            required_error: 'Price is Required',
        }),
        availability: zod_1.z.enum(['upcoming', 'available'], {
            required_error: 'Availability is required',
        }),
    }),
});
const update = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().optional(),
        image: zod_1.z.string().optional(),
        description: zod_1.z.string().optional(),
        price: zod_1.z.number().optional(),
        availability: zod_1.z.enum(['upcomming', 'available']).optional(),
    }),
});
exports.serviceValidation = {
    create,
    update,
};
