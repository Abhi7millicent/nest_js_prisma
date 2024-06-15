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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatesController = void 0;
const common_1 = require("@nestjs/common");
const states_services_1 = require("./states.services");
const UpdateState_dto_1 = require("./dto/UpdateState.dto");
const success_messages_1 = require("../../shared/constants/messages/success.messages");
const error_messages_1 = require("../../shared/constants/messages/error.messages");
const CreateState_dto_1 = require("./dto/CreateState.dto");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../../core/auth/jwt-auth-guard");
const success_error_decorator_1 = require("../../core/decorator/success-error.decorator");
const public_decorator_1 = require("../../core/auth/public.decorator");
let StatesController = class StatesController {
    constructor(stateService) {
        this.stateService = stateService;
    }
    async findAll(req) {
        const logger = req['logger'];
        try {
            logger.info('Retrieving all states');
            const states = await this.stateService.findAll(false);
            logger.info('Successfully retrieved all states');
            return {
                statusCode: 200,
                success: true,
                message: success_messages_1.findAllStatesSuccess,
                data: states,
            };
        }
        catch (error) {
            logger.error(`Error retrieving all states: ${error?.message}`);
            return {
                statusCode: 500,
                success: false,
                errorMessage: error?.message,
            };
        }
    }
    async findIncludeAll() {
        try {
            const states = await this.stateService.findAll(true);
            return {
                statusCode: 200,
                success: true,
                message: success_messages_1.findAllStatesSuccess,
                data: states,
            };
        }
        catch (error) {
            return {
                statusCode: 500,
                success: false,
                errorMessage: error.message,
            };
        }
    }
    async findAllSelect() {
        try {
            const states = await this.stateService.findAllSelect();
            return {
                statusCode: 200,
                success: true,
                message: success_messages_1.findAllStatesSuccess,
                data: states,
            };
        }
        catch (error) {
            return {
                statusCode: 500,
                success: false,
                errorMessage: error.message,
            };
        }
    }
    async findAllSelectOrder() {
        try {
            const states = await this.stateService.findAllSelectOrderBy();
            return {
                statusCode: 200,
                success: true,
                message: success_messages_1.findAllStatesSuccess,
                data: states,
            };
        }
        catch (error) {
            return {
                statusCode: 500,
                success: false,
                errorMessage: error.message,
            };
        }
    }
    async findAllIIncludeOrder() {
        try {
            const states = await this.stateService.findAllSelectOrderBy();
            return {
                statusCode: 200,
                success: true,
                message: success_messages_1.findAllStatesSuccess,
                data: states,
            };
        }
        catch (error) {
            return {
                statusCode: 500,
                success: false,
                errorMessage: error.message,
            };
        }
    }
    async getDate() {
        try {
            const date = await this.stateService.date();
            return {
                statusCode: 200,
                success: true,
                message: 'Retrieved date successfully.',
                data: date,
            };
        }
        catch (error) {
            return {
                statusCode: 500,
                success: false,
                errorMessage: error.message,
            };
        }
    }
    async getAllSP() {
        try {
            const spData = await this.stateService.getAllSP();
            return {
                statusCode: 200,
                success: true,
                message: success_messages_1.findAllStatesSuccess,
                data: spData,
            };
        }
        catch (error) {
            console.log('SP error', error);
            return {
                statusCode: 500,
                success: false,
                errorMessage: error.message,
            };
        }
    }
    async findOne(id, req) {
        const parseId = parseInt(id);
        if (isNaN(parseId) || parseId <= 0) {
            return {
                statusCode: 400,
                success: false,
                errorMessage: error_messages_1.invalidIDError,
            };
        }
        const logger = req['logger'];
        try {
            logger.info('Retrieving state by Id');
            const state = await this.stateService.findOne(parseId, false);
            if (!state) {
                return {
                    statusCode: 404,
                    success: false,
                    errorMessage: error_messages_1.stateNotFoundError,
                };
            }
            logger.info('Successfully retrieved state by Id');
            return {
                statusCode: 200,
                success: true,
                message: success_messages_1.findOneStateSuccess,
                data: state,
            };
        }
        catch (error) {
            logger.error(`Error retrieving a state : ${error?.message}`);
            return {
                statusCode: 500,
                success: false,
                errorMessage: error?.message,
            };
        }
    }
    async findOneDeleted(id) {
        const parseId = parseInt(id);
        try {
            const state = await this.stateService.findOne(parseId, true);
            if (!state) {
                return {
                    statusCode: 404,
                    success: false,
                    message: error_messages_1.stateNotFoundError,
                };
            }
            return {
                statusCode: 200,
                success: true,
                message: success_messages_1.findOneStateSuccess,
                data: state,
            };
        }
        catch (error) {
            return {
                statusCode: 500,
                success: false,
                errorMessage: error.message,
            };
        }
    }
    async findUniqueById(id) {
        const parseId = parseInt(id);
        try {
            const state = await this.stateService.findUniqueById(parseId, false);
            if (!state) {
                return {
                    statusCode: 404,
                    success: false,
                    message: error_messages_1.stateNotFoundError,
                };
            }
            else {
                return {
                    statusCode: 200,
                    success: true,
                    message: success_messages_1.findOneStateSuccess,
                    data: state,
                };
            }
        }
        catch (error) {
            return {
                statusCode: 500,
                success: false,
                errorMessage: error.message,
            };
        }
    }
    async findUniqueByStateName(name) {
        try {
            const state = await this.stateService.findUniqueByStateName(name, false);
            console.log('findUnique', state);
            if (!state) {
                return {
                    statusCode: 404,
                    success: false,
                    messages: error_messages_1.stateNotFoundError,
                };
            }
            return {
                statusCode: 200,
                success: true,
                message: success_messages_1.findOneStateSuccess,
                data: state,
            };
        }
        catch (error) {
            return {
                statusCode: 500,
                success: false,
                errorMessage: error.message,
            };
        }
    }
    async create(data) {
        try {
            const newState = await this.stateService.create(data);
            return {
                statusCode: 201,
                success: true,
                message: success_messages_1.CreateStateSuccess,
                data: newState,
            };
        }
        catch (error) {
            return {
                statusCode: 500,
                success: false,
                errorMessage: error.message,
            };
        }
    }
    async update(id, data) {
        try {
            const updatedState = await this.stateService.update(+id, data);
            return {
                statusCode: 200,
                success: true,
                message: success_messages_1.UpdateStateSuccess,
                data: updatedState,
            };
        }
        catch (error) {
            return {
                statusCode: 500,
                success: false,
                errorMessage: error.message,
            };
        }
    }
    async delete(id) {
        try {
            await this.stateService.delete(+id);
            return {
                statusCode: 200,
                success: true,
                message: success_messages_1.DeleteStateSuccess,
                data: {},
            };
        }
        catch (error) {
            return {
                statusCode: 500,
                success: false,
                errorMessage: error.message,
            };
        }
    }
    async softDelete(id) {
        try {
            await this.stateService.softDelete(id);
            return {
                statusCode: 200,
                success: true,
                message: success_messages_1.DeleteStateSuccess,
                data: {},
            };
        }
        catch (error) {
            return {
                statusCode: 500,
                success: false,
                errorMessage: error.message,
            };
        }
    }
    async count() {
        try {
            const count = await this.stateService.count({ alpha_code: 'LA' }, {});
            return {
                statusCode: 200,
                success: true,
                message: success_messages_1.CountStateSuccess,
                data: count,
            };
        }
        catch (error) {
            return {
                statusCode: 500,
                success: false,
                errorMessage: error.message,
            };
        }
    }
    async groupBy() {
        try {
            const conditions = {};
            const aggregator = {
                by: ['is_deleted'],
                _count: {
                    state_id: true,
                },
            };
            const groupedStates = await this.stateService.groupBy(conditions, aggregator);
            return {
                statusCode: 200,
                success: true,
                message: success_messages_1.GroupStateSuccess,
                data: groupedStates,
            };
        }
        catch (error) {
            return {
                statusCode: 500,
                success: false,
                errorMessage: error.message,
            };
        }
    }
    async aggregate() {
        try {
            const aggregator = {
                _max: {
                    state_id: true,
                },
                _count: {
                    country_id: true,
                },
                where: {
                    country_id: 1,
                },
            };
            const aggregationResult = await this.stateService.aggregate({}, aggregator, {});
            return {
                statusCode: 200,
                success: true,
                message: success_messages_1.AggregateStateSuccess,
                data: aggregationResult,
            };
        }
        catch (error) {
            return {
                statusCode: 500,
                success: false,
                errorMessage: error.message,
            };
        }
    }
};
exports.StatesController = StatesController;
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all states' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Success/OK',
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                        message: {
                            type: 'string',
                            example: 'Retrieved all states successfully',
                        },
                        data: {
                            type: 'array',
                            items: {
                                type: 'object',
                                properties: {
                                    state_id: { type: 'integer', example: 1 },
                                    name: {
                                        type: 'string',
                                        example: 'Andaman and Nicobar Islands',
                                    },
                                    alpha_code: { type: 'string', example: 'AND' },
                                    country_id: { type: 'integer', example: 1 },
                                    created_on: {
                                        type: 'string',
                                        format: 'date-time',
                                        example: '2024-05-10T00:00:09.000Z',
                                    },
                                    modified_on: {
                                        type: 'string',
                                        format: 'date-time',
                                        example: '2024-05-10T00:00:09.000Z',
                                    },
                                    is_deleted: { type: 'boolean', example: false },
                                    countries: {
                                        type: 'object',
                                        properties: {
                                            name: { type: 'string', example: 'INDIA' },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
                example: {
                    message: 'Retrieved all states successfully',
                    data: [
                        {
                            state_id: 1,
                            name: 'Andaman and Nicobar Islands',
                            alpha_code: 'AND',
                            country_id: 1,
                            created_on: '2024-05-10T00:00:09.000Z',
                            modified_on: '2024-05-10T00:00:09.000Z',
                            is_deleted: false,
                            countries: { name: 'INDIA' },
                        },
                        {
                            state_id: 2,
                            name: 'Maharashtra',
                            alpha_code: 'MH',
                            country_id: 1,
                            created_on: '2024-05-10T00:00:09.000Z',
                            modified_on: '2024-05-10T00:00:09.000Z',
                            is_deleted: false,
                            countries: { name: 'INDIA' },
                        },
                    ],
                },
            },
        },
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'Internal server error',
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                        code: { type: 'integer', example: 500 },
                        message: {
                            type: 'string',
                            example: 'There was an error processing your request.',
                        },
                    },
                },
            },
        },
    }),
    (0, success_error_decorator_1.SuccessError)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request]),
    __metadata("design:returntype", Promise)
], StatesController.prototype, "findAll", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('/include-all'),
    (0, success_error_decorator_1.SuccessError)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StatesController.prototype, "findIncludeAll", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('/select'),
    (0, success_error_decorator_1.SuccessError)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StatesController.prototype, "findAllSelect", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('/selectOrderBy'),
    (0, success_error_decorator_1.SuccessError)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StatesController.prototype, "findAllSelectOrder", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('/includeOrderBy'),
    (0, success_error_decorator_1.SuccessError)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StatesController.prototype, "findAllIIncludeOrder", null);
__decorate([
    (0, common_1.Get)('/date'),
    (0, success_error_decorator_1.SuccessError)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StatesController.prototype, "getDate", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('/sp'),
    (0, success_error_decorator_1.SuccessError)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StatesController.prototype, "getAllSP", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get single state by id',
    }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: 'Integer',
        description: 'Enter state id',
        required: true,
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Success/OK',
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                        state_id: { type: 'integer', example: 1 },
                        name: { type: 'string', example: 'Andaman and Nicobar Islands' },
                        alpha_code: { type: 'string', example: 'AND' },
                        country_id: { type: 'integer', example: 1 },
                        created_on: { type: 'string', example: '2024-05-10T00:00:09.000Z' },
                        modified_on: {
                            type: 'string',
                            example: '2024-05-10T00:00:09.000Z',
                        },
                        is_deleted: { type: 'boolean', example: false },
                    },
                },
            },
            'application/xml': {
                schema: {
                    type: 'object',
                    properties: {
                        state_id: { type: 'integer', example: 1 },
                        name: { type: 'string', example: 'Andaman and Nicobar Islands' },
                        alpha_code: { type: 'string', example: 'AND' },
                        country_id: { type: 'integer', example: 1 },
                        created_on: { type: 'string', example: '2024-05-10T00:00:09.000Z' },
                        modified_on: {
                            type: 'string',
                            example: '2024-05-10T00:00:09.000Z',
                        },
                        is_deleted: { type: 'boolean', example: false },
                    },
                    xml: {
                        name: 'RetrieveStateResponseDto',
                    },
                },
                example: `
          <state_id>1</state_id>
          <name>Andaman and Nicobar Islands</name>
          <alpha_code>AND</alpha_code>
          <country_id>1</country_id>
          <created_on>2024-05-10T00:00:09.000Z</created_on>
          <modified_on>2024-05-10T00:00:09.000Z</modified_on>
          <is_deleted>false</is_deleted>
        `,
            },
        },
    }),
    (0, swagger_1.ApiResponse)({
        status: 400,
        description: 'Invalid id provided',
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'State not found',
    }),
    (0, success_error_decorator_1.SuccessError)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Request]),
    __metadata("design:returntype", Promise)
], StatesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('/softdeleted/:id'),
    (0, success_error_decorator_1.SuccessError)(),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StatesController.prototype, "findOneDeleted", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('id/:id'),
    (0, success_error_decorator_1.SuccessError)(),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StatesController.prototype, "findUniqueById", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('name/:name'),
    (0, success_error_decorator_1.SuccessError)(),
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StatesController.prototype, "findUniqueByStateName", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Post state' }),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                name: {
                    type: 'String',
                    example: 'Maharashtra',
                    description: 'State name',
                },
                alpha_code: {
                    type: 'String',
                    example: 'MH',
                    description: 'Short name for state',
                },
                country_id: {
                    type: 'Integer',
                    example: 1,
                    description: 'Unique country id',
                },
            },
        },
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Success/OK',
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                        state_id: { type: 'integer', example: 96 },
                        name: { type: 'string', example: 'Maharashtra' },
                        alpha_code: { type: 'string', example: 'MH' },
                        country_id: { type: 'integer', example: 1 },
                        created_on: {
                            type: 'string',
                            format: 'date-time',
                            example: '2024-06-13T12:30:18.000Z',
                        },
                        modified_on: { type: 'string', format: 'date-time', example: null },
                        is_deleted: { type: 'boolean', example: false },
                    },
                    example: {
                        state_id: 96,
                        name: 'Maharashtra',
                        alpha_code: 'MH',
                        country_id: 1,
                        created_on: '2024-06-13T12:30:18.000Z',
                        modified_on: null,
                        is_deleted: false,
                    },
                },
            },
            'application/xml': {
                schema: {
                    type: 'object',
                    properties: {
                        state_id: { type: 'integer', example: 96 },
                        name: { type: 'string', example: 'Maharashtra' },
                        alpha_code: { type: 'string', example: 'MH' },
                        country_id: { type: 'integer', example: 1 },
                        created_on: {
                            type: 'string',
                            format: 'date-time',
                            example: '2024-06-13T12:30:18.000Z',
                        },
                        modified_on: { type: 'string', format: 'date-time', example: null },
                        is_deleted: { type: 'boolean', example: false },
                    },
                    xml: {
                        name: 'RetrieveStateResponseDto',
                    },
                },
                example: `
        <state_id>96</state_id>
        <name>Maharashtra</name>
        <alpha_code>MH</alpha_code>
        <country_id>1</country_id>
        <created_on>2024-06-13T12:30:18.000Z</created_on>
        <modified_on>null</modified_on>
        <is_deleted>false</is_deleted>
        `,
            },
        },
    }),
    (0, swagger_1.ApiResponse)({
        status: 400,
        description: 'Bad request',
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'Internal server error',
    }),
    (0, success_error_decorator_1.SuccessError)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateState_dto_1.CreateStateDto]),
    __metadata("design:returntype", Promise)
], StatesController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update state using state id' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: 'Integer',
        description: 'Enter state id',
        required: true,
    }),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                name: {
                    type: 'String',
                    example: 'Maharashtra',
                    description: 'State name',
                },
                alpha_code: {
                    type: 'String',
                    example: 'MH',
                    description: 'Short name for state',
                },
                country_id: {
                    type: 'Integer',
                    example: 1,
                    description: 'Country id',
                },
            },
        },
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Success/OK',
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                        name: { type: 'string', example: 'Andaman and Nicobar Islands' },
                        alpha_code: { type: 'string', example: 'AND' },
                        country_id: { type: 'integer', example: 1 },
                    },
                },
            },
            'application/xml': {
                schema: {
                    type: 'object',
                    properties: {
                        name: { type: 'string', example: 'Andaman and Nicobar Islands' },
                        alpha_code: { type: 'string', example: 'AND' },
                        country_id: { type: 'integer', example: 1 },
                    },
                    xml: {
                        name: 'RetrieveStateResponseDto',
                    },
                },
                example: `
        <name>Andaman and Nicobar Islands</name>
        <alpha_code>AND</alpha_code>
        <country_id>1</country_id>
        `,
            },
        },
    }),
    (0, swagger_1.ApiResponse)({
        status: 400,
        description: 'Invalid id provided',
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'State not found',
    }),
    (0, swagger_1.ApiResponse)({
        status: 422,
        description: 'Validation exception',
    }),
    (0, success_error_decorator_1.SuccessError)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpdateState_dto_1.UpdateStateDto]),
    __metadata("design:returntype", Promise)
], StatesController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete state using state id' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: 'Integer',
        description: 'Enter state id',
        required: true,
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'State deleted',
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                        code: { type: 'integer', example: 200 },
                        message: {
                            type: 'string',
                            example: 'State deleted successfully.',
                        },
                    },
                },
            },
        },
    }),
    (0, swagger_1.ApiResponse)({
        status: 400,
        description: 'Invalid id provided',
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'Internal server error',
    }),
    (0, success_error_decorator_1.SuccessError)(),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], StatesController.prototype, "delete", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)('soft-delete/:id'),
    (0, swagger_1.ApiOperation)({
        summary: 'Soft delete state by id',
    }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: 'Integer',
        description: 'Enter state id',
        required: true,
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'State soft deleted',
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                        code: { type: 'integer', example: 200 },
                        message: {
                            type: 'string',
                            example: 'State soft deleted successfully.',
                        },
                    },
                },
            },
        },
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'Internal server error',
    }),
    (0, success_error_decorator_1.SuccessError)(),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], StatesController.prototype, "softDelete", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('/count/data'),
    (0, success_error_decorator_1.SuccessError)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StatesController.prototype, "count", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('/group-by/data'),
    (0, success_error_decorator_1.SuccessError)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StatesController.prototype, "groupBy", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('/aggregate/data'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StatesController.prototype, "aggregate", null);
exports.StatesController = StatesController = __decorate([
    (0, swagger_1.ApiTags)('State'),
    (0, common_1.Controller)('states'),
    __metadata("design:paramtypes", [states_services_1.StateService])
], StatesController);
//# sourceMappingURL=states.controller.js.map