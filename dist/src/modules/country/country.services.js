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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryService = void 0;
const common_1 = require("@nestjs/common");
const country_repository_1 = require("./country.repository");
let CountryService = class CountryService {
    constructor(countryRepo) {
        this.countryRepo = countryRepo;
    }
    async findAllSelect(includeDeleted = false) {
        const options = {
            select: {
                country_id: true,
                currency_symbol: true,
            },
            includeDeleted,
        };
        try {
            const result = country_repository_1.CountryRepository.findAll({}, {}, {}, options);
            console.log('res', result);
            return result;
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    }
    async findOne(id, includeDeleted = false) {
        const options = {
            includeDeleted,
        };
        try {
            console.log('findOne id', id);
            return country_repository_1.CountryRepository.findOne(id, options);
        }
        catch (error) {
            console.error('Error retrieving state:', error);
            throw new Error('Failed to retrieve state');
        }
    }
    async create(data) {
        const result = await country_repository_1.CountryRepository.create(data);
        return result;
    }
    async update(id, data) {
        return country_repository_1.CountryRepository.update(id, data);
    }
    async softDelete(id) {
        const countryId = parseInt(id, 10);
        if (isNaN(countryId)) {
            throw new common_1.BadRequestException('Invalid state id');
        }
        await country_repository_1.CountryRepository.softDelete('country', countryId);
        return {};
    }
    async delete(id) {
        await country_repository_1.CountryRepository.delete(id);
        return {};
    }
};
exports.CountryService = CountryService;
exports.CountryService = CountryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [country_repository_1.CountryRepository])
], CountryService);
//# sourceMappingURL=country.services.js.map