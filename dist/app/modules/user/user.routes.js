"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const user_controller_1 = require("./user.controller");
const user_validation_1 = require("./user.validation");
const router = express_1.default.Router();
router.get('/:id', 
// auth(ENUM_USER_ROLE.ADMIN),
user_controller_1.UserController.getSingleUserFromDB);
router.get('/', user_controller_1.UserController.getAllUserFromDB);
router.patch('/:id', 
// auth(ENUM_USER_ROLE.ADMIN),
(0, validateRequest_1.default)(user_validation_1.UserValidation.update), user_controller_1.UserController.updateSingleUserFromDB);
router.delete('/:id', 
// auth(ENUM_USER_ROLE.ADMIN),
user_controller_1.UserController.deleteSingleUserFromDB);
exports.UserRoutes = router;
