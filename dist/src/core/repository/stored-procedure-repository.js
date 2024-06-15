"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
class StoredProcedureRepository {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    async execute(procedureName, parameters) {
        try {
            if (!this.isValidProcedureName(procedureName)) {
                throw new Error(`Invalid procedure name: ${procedureName}`);
            }
            const paramPlaceholders = parameters
                ? Object.keys(parameters).map((key) => `${key} = ?`)
                : [];
            const query = parameters
                ? client_1.Prisma.sql `CALL ${client_1.Prisma.raw(procedureName)}(${client_1.Prisma.join(paramPlaceholders, ', ')})`
                : client_1.Prisma.sql `CALL ${client_1.Prisma.raw(procedureName)}`;
            const result = await this.prisma.$queryRaw(query, ...(parameters ? Object.values(parameters) : []));
            return result;
        }
        catch (error) {
            console.error(`Error executing stored procedure ${procedureName}:`, error);
            throw new Error(`Failed to execute stored procedure ${procedureName}: ${error.message}`);
        }
    }
    isValidProcedureName(procedureName) {
        const regex = /^[a-zA-Z0-9_]+$/;
        return regex.test(procedureName);
    }
}
exports.default = StoredProcedureRepository;
//# sourceMappingURL=stored-procedure-repository.js.map