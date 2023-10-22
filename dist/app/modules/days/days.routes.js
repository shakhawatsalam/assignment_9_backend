"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dayRoutes = void 0;
const express_1 = __importDefault(require("express"));
const days_controller_1 = require("./days.controller");
const router = express_1.default.Router();
router.get('/', days_controller_1.dayController.getAllFromDb);
router.patch('/openingHours', days_controller_1.dayController.updateOpeningHours);
exports.dayRoutes = router;
