"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatesModule = void 0;
const common_1 = require("@nestjs/common");
const states_services_1 = require("./states.services");
const states_controller_1 = require("./states.controller");
const client_1 = require("@prisma/client");
const stored_procedure_repository_1 = __importDefault(require("../../core/repository/stored-procedure-repository"));
const prisma_module_1 = require("../../database/prisma.module");
const state_repository_1 = require("./state.repository");
let StatesModule = class StatesModule {
};
exports.StatesModule = StatesModule;
exports.StatesModule = StatesModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        providers: [
            client_1.PrismaClient,
            stored_procedure_repository_1.default,
            state_repository_1.StateRepository,
            states_services_1.StateService,
        ],
        controllers: [states_controller_1.StatesController],
    })
], StatesModule);
//# sourceMappingURL=states.module.js.map