"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuccessError = void 0;
const common_1 = require("@nestjs/common");
function SuccessError() {
    return function (target, key, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = async function (...args) {
            try {
                const result = await originalMethod.apply(this, args);
                console.log('success-error result', result);
                if (result !== null && result.statusCode === 200) {
                    return {
                        statusCode: common_1.HttpStatus.OK,
                        success: true,
                        message: result.message || 'Operation successful',
                        data: result.data || result.states || result,
                    };
                }
                else if (result !== null && result.statusCode === 201) {
                    return {
                        statusCode: common_1.HttpStatus.CREATED,
                        success: true,
                        message: result.message || 'Operation successful',
                        data: result.data || result.states || result,
                    };
                }
                else if (result !== null && result.statusCode === 404) {
                    return {
                        statusCode: common_1.HttpStatus.NOT_FOUND,
                        success: false,
                        message: result.message || 'Record not found',
                        data: {},
                    };
                }
                else {
                    return {
                        statusCode: common_1.HttpStatus.BAD_REQUEST,
                        success: false,
                        error: result.errorMessage || 'Invalid parameter(s) provided',
                    };
                }
            }
            catch (error) {
                return {
                    statusCode: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                    success: false,
                    error: error.message || 'Internal Server Error',
                };
            }
        };
        return descriptor;
    };
}
exports.SuccessError = SuccessError;
//# sourceMappingURL=success-error.decorator.js.map