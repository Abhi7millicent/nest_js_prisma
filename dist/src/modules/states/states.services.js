"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateService = void 0;
const common_1 = require("@nestjs/common");
const state_1 = require("../../models/class.transformer.ts/state");
const stored_procedure_repository_1 = __importDefault(require("../../core/repository/stored-procedure-repository"));
const state_repository_1 = require("./state.repository");
const dto_transform_decorator_1 = require("../../core/decorator/dto.transform.decorator");
let StateService = class StateService {
    constructor(stateRepo, storedProcedureRepo) {
        this.stateRepo = stateRepo;
        this.storedProcedureRepo = storedProcedureRepo;
    }
    async findAllSelect() {
        const options = {
            select: {
                state_id: true,
                name: true,
                countries: {
                    select: {
                        name: true,
                    },
                },
            },
        };
        try {
            const result = state_repository_1.StateRepository.findAll({}, {}, {}, options);
            console.log('res', result);
            return result;
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    }
    async findAll(includeDeleted = false) {
        const options = {
            include: {
                countries: {
                    select: {
                        name: true,
                    },
                },
            },
            includeDeleted,
        };
        try {
            return await state_repository_1.StateRepository.findAll({}, {}, {}, options);
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    }
    async findAllSelectOrderBy() {
        const options = {
            select: {
                state_id: true,
                name: true,
                countries: {
                    select: {
                        name: true,
                    },
                },
            },
            orderBy: {
                name: 'asc',
            },
        };
        try {
            return state_repository_1.StateRepository.findAll({}, {}, {}, options);
        }
        catch (error) {
            throw error;
        }
    }
    async findAllIncludeOrderBy() {
        const options = {
            include: {
                countries: {
                    select: {
                        name: true,
                    },
                },
            },
            orderBy: {
                name: 'asc',
            },
        };
        try {
            return state_repository_1.StateRepository.findAll({}, {}, {}, options);
        }
        catch (error) {
            throw error;
        }
    }
    async findOne(id, includeDeleted = false) {
        const options = {
            include: {
                countries: {
                    select: {
                        name: true,
                    },
                },
            },
            includeDeleted,
        };
        try {
            console.log('findOne id', id);
            return state_repository_1.StateRepository.findOne(id, options);
        }
        catch (error) {
            console.error('Error retrieving state:', error);
            throw new Error('Failed to retrieve state');
        }
    }
    async findUniqueById(id, includeDeleted = false) {
        const options = {
            includeDeleted,
        };
        try {
            return state_repository_1.StateRepository.findUnique({ state_id: id }, options);
        }
        catch (error) {
            console.error('Error retrieving state:', error);
            throw new Error('Failed to retrieve state');
        }
    }
    async findUniqueByStateName(name, includeDeleted = false) {
        const options = {
            includeDeleted,
        };
        try {
            return state_repository_1.StateRepository.findUnique({ name: name }, options);
        }
        catch (error) {
            console.error('Error retrieving state:', error);
            throw new Error('Failed to retrieve state');
        }
    }
    async create(data) {
        const result = await state_repository_1.StateRepository.create(data);
        return result;
    }
    async update(id, data) {
        return state_repository_1.StateRepository.update(id, data);
    }
    async delete(id) {
        await state_repository_1.StateRepository.delete(id);
        return {};
    }
    async softDelete(id) {
        const stateId = parseInt(id, 10);
        if (isNaN(stateId)) {
            throw new common_1.BadRequestException('Invalid state id');
        }
        await state_repository_1.StateRepository.softDelete('state', stateId);
        return {};
    }
    async date() {
        return this.stateRepo.getDate();
    }
    async getAllSP() {
        return this.storedProcedureRepo.execute('sp_get_state_all_v1');
    }
    async count(conditions, options = {}) {
        try {
            return await state_repository_1.StateRepository.count(conditions, options);
        }
        catch (error) {
            console.error('Error counting states:', error);
            throw new Error('Failed to count states');
        }
    }
    async groupBy(conditions, aggregator) {
        try {
            return await state_repository_1.StateRepository.groupBy(conditions, aggregator);
        }
        catch (error) {
            console.error('Error grouping states:', error);
            throw new Error('Failed to group states');
        }
    }
    async aggregate(conditions, aggregator, option) {
        try {
            return await state_repository_1.StateRepository.aggregate(conditions, aggregator, option);
        }
        catch (error) {
            console.error('Error aggregating states:', error);
            throw new Error('Failed to aggregate states');
        }
    }
};
exports.StateService = StateService;
__decorate([
    (0, dto_transform_decorator_1.ApplyTransformInterceptorToMethod)(state_1.State),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StateService.prototype, "getAllSP", null);
exports.StateService = StateService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [state_repository_1.StateRepository,
        stored_procedure_repository_1.default])
], StateService);
//# sourceMappingURL=states.services.js.map