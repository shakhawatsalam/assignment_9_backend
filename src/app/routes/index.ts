import express from 'express';
import { BookingRoutes } from '../modules/Booking/booking.routes';
import { timeSlotsRoutes } from '../modules/TimeSlot/timeSlots.routes';
import { AuthRouter } from '../modules/auth/auth.routes';
import { dayRoutes } from '../modules/days/days.routes';
import { ServiceRouter } from '../modules/service/service.routes';
import { UserRoutes } from '../modules/user/user.routes';
import { closedaysRoutes } from '../modules/closeDays/closedays.routes';

const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: '/auth',
    route: AuthRouter,
  },
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/service',
    route: ServiceRouter,
  },
  {
    path: '/time-slots',
    route: timeSlotsRoutes,
  },
  {
    path: '/booking',
    route: BookingRoutes,
  },
  {
    path: '/day',
    route: dayRoutes,
  },
  {
    path: '/closedays',
    route: closedaysRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
