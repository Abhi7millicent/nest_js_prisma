"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => ({
    port: parseInt(process.env.PORT, 10) || 3000,
    jwtSecret: process.env.JWT_SECRET,
});
//# sourceMappingURL=configurations.js.map