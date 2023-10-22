"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const booking_routes_1 = require("../modules/Booking/booking.routes");
const timeSlots_routes_1 = require("../modules/TimeSlot/timeSlots.routes");
const auth_routes_1 = require("../modules/auth/auth.routes");
const days_routes_1 = require("../modules/days/days.routes");
const service_routes_1 = require("../modules/service/service.routes");
const user_routes_1 = require("../modules/user/user.routes");
const closedays_routes_1 = require("../modules/closeDays/closedays.routes");
const router = express_1.default.Router();
const moduleRoutes = [
    // ... routes
    {
        path: '/auth',
        route: auth_routes_1.AuthRouter,
    },
    {
        path: '/users',
        route: user_routes_1.UserRoutes,
    },
    {
        path: '/service',
        route: service_routes_1.ServiceRouter,
    },
    {
        path: '/time-slots',
        route: timeSlots_routes_1.timeSlotsRoutes,
    },
    {
        path: '/booking',
        route: booking_routes_1.BookingRoutes,
    },
    {
        path: '/day',
        route: days_routes_1.dayRoutes,
    },
    {
        path: '/closedays',
        route: closedays_routes_1.closedaysRoutes,
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
