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
exports.CreateCountryDto = void 0;
const class_validator_1 = require("class-validator");
class CreateCountryDto {
}
exports.CreateCountryDto = CreateCountryDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 100),
    __metadata("design:type", String)
], CreateCountryDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsISO31661Alpha2)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateCountryDto.prototype, "alpha_2", void 0);
__decorate([
    (0, class_validator_1.IsISO31661Alpha3)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateCountryDto.prototype, "alpha_3", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(999),
    __metadata("design:type", Number)
], CreateCountryDto.prototype, "phone_code", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(3, 3),
    __metadata("design:type", String)
], CreateCountryDto.prototype, "currency", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 10),
    __metadata("design:type", String)
], CreateCountryDto.prototype, "currency_symbol", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], CreateCountryDto.prototype, "created_on", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], CreateCountryDto.prototype, "modified_on", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], CreateCountryDto.prototype, "is_deleted", void 0);
//# sourceMappingURL=CreateCountry.dto.js.map