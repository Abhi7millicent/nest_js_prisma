"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const baseRepository_1 = __importDefault(require("../../core/repository/baseRepository"));
const prisma_repo_1 = require("../../core/repository/prisma-repo");
class company extends (0, baseRepository_1.default)(prisma_repo_1.MODELS_NAME.COMPANY) {
}
exports.default = company;
//# sourceMappingURL=company.repository.js.map