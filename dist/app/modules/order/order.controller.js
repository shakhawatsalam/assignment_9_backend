'use strict';
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.OrderController = void 0;
const http_status_1 = __importDefault(require('http-status'));
const config_1 = __importDefault(require('../../../config'));
const ApiError_1 = __importDefault(require('../../../errors/ApiError'));
const jwtHelpers_1 = require('../../../helpers/jwtHelpers');
const catchAsync_1 = __importDefault(require('../../../shared/catchAsync'));
const sendResponse_1 = __importDefault(require('../../../shared/sendResponse'));
const order_service_1 = require('./order.service');
const insertIntoDB = (0, catchAsync_1.default)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const result = yield order_service_1.OrderService.insertIntoDB(req.body);
    (0, sendResponse_1.default)(res, {
      statusCode: http_status_1.default.OK,
      success: true,
      message: 'Order Created Successfully',
      data: result,
    });
  })
);
const getAllOrder = (0, catchAsync_1.default)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const token = req.headers.authorization;
    const { userId, role } = jwtHelpers_1.jwtHelpers.verifyToken(
      token,
      config_1.default.jwt.secret
    );
    const result = yield order_service_1.OrderService.getAllOrder(userId, role);
    (0, sendResponse_1.default)(res, {
      statusCode: http_status_1.default.OK,
      success: true,
      message: 'Order Fetched Successfully',
      data: result,
    });
  })
);
const getSingleOrder = (0, catchAsync_1.default)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const { orderId } = req.params;
    const token = req.headers.authorization;
    const { userId, role } = jwtHelpers_1.jwtHelpers.verifyToken(
      token,
      config_1.default.jwt.secret
    );
    const result = yield order_service_1.OrderService.getSingleOrder(
      orderId,
      userId,
      role
    );
    if (!result) {
      throw new ApiError_1.default(
        http_status_1.default.NOT_FOUND,
        'You are not Allow to watch this order'
      );
    }
    (0, sendResponse_1.default)(res, {
      statusCode: http_status_1.default.OK,
      success: true,
      message: 'Order Fetched Successfully',
      data: result,
    });
  })
);
exports.OrderController = {
  insertIntoDB,
  getAllOrder,
  getSingleOrder,
};
