"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.closedaysRoutes = void 0;
const express_1 = __importDefault(require("express"));
const closedays_controller_1 = require("./closedays.controller");
const router = express_1.default.Router();
router.get('/', closedays_controller_1.CloseDaysController.getAllCloseDays);
router.post('/', closedays_controller_1.CloseDaysController.insertIntoDB);
router.delete('/', closedays_controller_1.CloseDaysController.deleteFromDB);
exports.closedaysRoutes = router;
