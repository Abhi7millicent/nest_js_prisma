"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryRepository = void 0;
const baseRepository_1 = __importDefault(require("../../core/repository/baseRepository"));
const prisma_repo_1 = require("../../core/repository/prisma-repo");
class CountryRepository extends (0, baseRepository_1.default)(prisma_repo_1.MODELS_NAME.COUNTRY) {
}
exports.CountryRepository = CountryRepository;
//# sourceMappingURL=country.repository.js.map