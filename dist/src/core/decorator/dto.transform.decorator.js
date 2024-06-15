"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplyTransformInterceptorToMethod = void 0;
const dto_transform_interceptor_1 = require("../interceptor/dto.transform.interceptor");
const ApplyTransformInterceptorToMethod = (dtoClass, options) => {
    return (target, propertyKey, descriptor) => {
        const originalMethod = descriptor.value;
        descriptor.value = async function (...args) {
            const result = await originalMethod.apply(this, args);
            const interceptor = new dto_transform_interceptor_1.TransformInterceptor(dtoClass, options);
            return interceptor.transform(result);
        };
        return descriptor;
    };
};
exports.ApplyTransformInterceptorToMethod = ApplyTransformInterceptorToMethod;
//# sourceMappingURL=dto.transform.decorator.js.map