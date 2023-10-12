"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_routes_1 = require("../modules/auth/auth.routes");
const book_routes_1 = require("../modules/book/book.routes");
const category_routes_1 = require("../modules/category/category.routes");
const order_routes_1 = require("../modules/order/order.routes");
const profile_routes_1 = require("../modules/profile/profile.routes");
const reviewAndRating_routes_1 = require("../modules/reviewAndRating/reviewAndRating.routes");
const user_routes_1 = require("../modules/user/user.routes");
const router = express_1.default.Router();
const moduleRoutes = [
    // ... routes
    {
        path: '/auth',
        route: auth_routes_1.AuthRouter,
    },
    {
        path: '/profile',
        route: profile_routes_1.ProfileRoutes,
    },
    {
        path: '/user',
        route: user_routes_1.UserRoutes,
    },
    {
        path: '/categories',
        route: category_routes_1.CategoryRoutes,
    },
    {
        path: '/books',
        route: book_routes_1.BookRouter,
    },
    {
        path: '/reviewandrating',
        route: reviewAndRating_routes_1.ReviewAndRating,
    },
    {
        path: '/orders',
        route: order_routes_1.OrderRoutes,
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
