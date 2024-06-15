"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MODELS_NAME = exports.models = exports.prisma = void 0;
const client_1 = require("@prisma/client");
const lodash_1 = __importDefault(require("lodash"));
exports.prisma = new client_1.PrismaClient({
    log: ['error', 'info', 'query', 'warn'],
});
exports.models = lodash_1.default?.omit(exports.prisma, [
    '$on',
    '$connect',
    '$disconnect',
    '$use',
    '$executeRaw',
    '$executeRawUnsafe',
    '$queryRaw',
    '$queryRawUnsafe',
    '$transaction',
]);
exports.MODELS_NAME = {
    CITY: 'city',
    COMPANY: 'company',
    COUNTRY: 'country',
    PROJECT: 'project',
    STATE: 'state',
};
//# sourceMappingURL=prisma-repo.js.map