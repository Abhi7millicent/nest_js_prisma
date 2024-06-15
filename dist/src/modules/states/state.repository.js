"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateRepository = void 0;
const baseRepository_1 = __importDefault(require("../../core/repository/baseRepository"));
const prisma_repo_1 = require("../../core/repository/prisma-repo");
class StateRepository extends (0, baseRepository_1.default)(prisma_repo_1.MODELS_NAME.STATE) {
    static getDate() {
        throw new Error('Method not implemented.');
    }
    constructor() {
        super();
    }
    async getDate() {
        try {
            return Date();
        }
        catch (error) {
            console.error('Error fetching states:', error);
            throw error;
        }
    }
}
exports.StateRepository = StateRepository;
//# sourceMappingURL=state.repository.js.map