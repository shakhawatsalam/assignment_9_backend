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
exports.BookController = void 0;
const http_status_1 = __importDefault(require('http-status'));
const catchAsync_1 = __importDefault(require('../../../shared/catchAsync'));
const pick_1 = __importDefault(require('../../../shared/pick'));
const sendResponse_1 = __importDefault(require('../../../shared/sendResponse'));
const book_service_1 = require('./book.service');
const insertIntoDB = (0, catchAsync_1.default)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_service_1.BookService.insertIntoDB(req.body);
    (0, sendResponse_1.default)(res, {
      statusCode: http_status_1.default.OK,
      success: true,
      message: 'Book Inserted Successfully',
      data: result,
    });
  })
);
const getAllBookFromDB = (0, catchAsync_1.default)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const filter = (0, pick_1.default)(req.query, [
      'searchTerm',
      'title',
      'author',
      'genre',
      'maxPrice',
      'minPrice',
    ]);
    const options = (0, pick_1.default)(req.query, [
      'limit',
      'page',
      'sortBy',
      'sortOrder',
    ]);
    const result = yield book_service_1.BookService.getAllBookFromDB(
      filter,
      options
    );
    (0, sendResponse_1.default)(res, {
      statusCode: http_status_1.default.OK,
      success: true,
      message: 'Books fetched successfully',
      meta: result.meta,
      data: result.data,
    });
  })
);
const getSingleBookFromDB = (0, catchAsync_1.default)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield book_service_1.BookService.getSingleBookFromDB(id);
    (0, sendResponse_1.default)(res, {
      statusCode: http_status_1.default.OK,
      success: true,
      message: 'Single Book Fetched Successfully',
      data: result,
    });
  })
);
const getByCategoryIDFromDB = (0, catchAsync_1.default)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const { categoryId } = req.params;
    const result = yield book_service_1.BookService.getByCategoryIDFromDB(
      categoryId
    );
    (0, sendResponse_1.default)(res, {
      statusCode: http_status_1.default.OK,
      success: true,
      message: 'Book Fetched By Category Successfully',
      data: result,
    });
  })
);
const updateSingleBookFromDB = (0, catchAsync_1.default)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const data = req.body;
    const result = yield book_service_1.BookService.updateSingleBookFromDB(
      id,
      data
    );
    (0, sendResponse_1.default)(res, {
      statusCode: http_status_1.default.OK,
      success: true,
      message: 'Book Updated Successfully',
      data: result,
    });
  })
);
const deleteSingleBookFromDB = (0, catchAsync_1.default)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield book_service_1.BookService.deleteSingleBookFromDB(id);
    (0, sendResponse_1.default)(res, {
      statusCode: http_status_1.default.OK,
      success: true,
      message: 'Book Deleted Successfully',
      data: result,
    });
  })
);
exports.BookController = {
  insertIntoDB,
  getAllBookFromDB,
  getSingleBookFromDB,
  getByCategoryIDFromDB,
  updateSingleBookFromDB,
  deleteSingleBookFromDB,
};
