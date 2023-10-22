"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.closeDayService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const insertIntoDB = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.closeDay.create({
        data: data,
    });
    return result;
});
const getAllCloseDays = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.closeDay.findMany();
    return result;
});
const deleteFromDB = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.closeDay.delete({
        where: {
            date: data.date,
        },
    });
    return result;
});
exports.closeDayService = {
    insertIntoDB,
    getAllCloseDays,
    deleteFromDB,
};
