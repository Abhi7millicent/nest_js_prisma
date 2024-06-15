declare class StoredProcedureRepository {
    private readonly prisma;
    constructor();
    execute(procedureName: string, parameters?: Record<string, any>): Promise<any[]>;
    private isValidProcedureName;
}
export default StoredProcedureRepository;
