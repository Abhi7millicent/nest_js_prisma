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
exports.TransformInterceptor = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
const class_transformer_1 = require("class-transformer");
let TransformInterceptor = class TransformInterceptor {
    constructor(dtoClass, options) {
        this.dtoClass = dtoClass;
        this.options = options;
        this.defaultOptions = {
            excludeExtraneousValues: true,
        };
    }
    intercept(context, next) {
        const options = { ...this.defaultOptions, ...this.options };
        return next.handle().pipe((0, operators_1.map)((data) => this.transform(data)));
    }
    transform(data) {
        const options = { ...this.defaultOptions, ...this.options };
        console.log('dtoClass', this.dtoClass);
        console.log('data', data);
        console.log('options', options);
        return (0, class_transformer_1.plainToInstance)(this.dtoClass, data, options);
    }
};
exports.TransformInterceptor = TransformInterceptor;
exports.TransformInterceptor = TransformInterceptor = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [Function, Object])
], TransformInterceptor);
//# sourceMappingURL=dto.transform.interceptor.js.map