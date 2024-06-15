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
exports.CountryController = void 0;
const common_1 = require("@nestjs/common");
const country_services_1 = require("./country.services");
const country_DTO_1 = require("./country.DTO");
const UpdateState_dto_1 = require("../states/dto/UpdateState.dto");
const success_error_decorator_1 = require("../../core/decorator/success-error.decorator");
const swagger_1 = require("@nestjs/swagger");
let CountryController = class CountryController {
    constructor(countryService) {
        this.countryService = countryService;
    }
    async findAllSelect() {
        try {
            const country = await this.countryService.findAllSelect(true);
            return {
                statusCode: 200,
                success: true,
                message: 'Country retrieved successfully (select).',
                data: country,
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
    async findOne(id) {
        const parseId = parseInt(id);
        if (isNaN(parseId) || parseId <= 0) {
            return {
                statusCode: 400,
                success: false,
                errorMessage: 'Invalid ID provided',
            };
        }
        try {
            const country = await this.countryService.findOne(parseId, false);
            if (!country) {
                return {
                    statusCode: 404,
                    success: false,
                    errorMessage: 'Country not found',
                };
            }
            return {
                statusCode: 200,
                success: true,
                message: 'Country retrieved successfully.',
                data: country,
            };
        }
        catch (error) {
            console.error('Error retrieving country:', error);
            return {
                statusCode: 500,
                success: false,
                errorMessage: error.message,
            };
        }
    }
    async create(data) {
        try {
            const newState = await this.countryService.create(data);
            return {
                statusCode: 201,
                success: true,
                message: 'State created successfully',
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
            const updatedCountry = await this.countryService.update(+id, data);
            return {
                statusCode: 200,
                success: true,
                message: 'State updated successfully',
                data: updatedCountry,
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
            await this.countryService.delete(+id);
            return {
                statusCode: 200,
                success: true,
                message: 'Country deleted successfully',
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
            await this.countryService.softDelete(id);
            return {
                statusCode: 200,
                success: true,
                message: 'Country soft deleted successfully.',
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
};
exports.CountryController = CountryController;
__decorate([
    (0, common_1.Get)(),
    (0, success_error_decorator_1.SuccessError)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CountryController.prototype, "findAllSelect", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, success_error_decorator_1.SuccessError)(),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CountryController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, success_error_decorator_1.SuccessError)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [country_DTO_1.CreateCountryDto]),
    __metadata("design:returntype", Promise)
], CountryController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, success_error_decorator_1.SuccessError)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpdateState_dto_1.UpdateStateDto]),
    __metadata("design:returntype", Promise)
], CountryController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, success_error_decorator_1.SuccessError)(),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CountryController.prototype, "delete", null);
__decorate([
    (0, common_1.Put)('soft-delete/:id'),
    (0, success_error_decorator_1.SuccessError)(),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CountryController.prototype, "softDelete", null);
exports.CountryController = CountryController = __decorate([
    (0, swagger_1.ApiTags)('Country'),
    (0, common_1.Controller)('country'),
    __metadata("design:paramtypes", [country_services_1.CountryService])
], CountryController);
//# sourceMappingURL=country.controller.js.map