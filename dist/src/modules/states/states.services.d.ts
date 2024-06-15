import { Prisma } from '@prisma/client';
import { State } from 'src/models/class.transformer.ts/state';
import StoredProcedureRepository from 'src/core/repository/stored-procedure-repository';
import { StateRepository } from './state.repository';
export declare class StateService {
    private readonly stateRepo;
    private readonly storedProcedureRepo;
    constructor(stateRepo: StateRepository, storedProcedureRepo: StoredProcedureRepository);
    findAllSelect(): Promise<{
        rows: {
            state_id: number;
            name: string;
            countries: never;
        }[];
        count: number;
    }>;
    findAll(includeDeleted?: boolean): Promise<{
        rows: ({
            countries: never;
        } & {
            state_id: number;
            name: string;
            alpha_code: string;
            country_id: number;
            created_on: Date;
            modified_on: Date;
            is_deleted: boolean;
        })[];
        count: number;
    }>;
    findAllSelectOrderBy(): Promise<{
        rows: {
            state_id: number;
            name: string;
            countries: never;
        }[];
        count: number;
    }>;
    findAllIncludeOrderBy(): Promise<{
        rows: ({
            countries: never;
        } & {
            state_id: number;
            name: string;
            alpha_code: string;
            country_id: number;
            created_on: Date;
            modified_on: Date;
            is_deleted: boolean;
        })[];
        count: number;
    }>;
    findOne(id: number, includeDeleted?: boolean): Promise<{
        countries: never;
    } & {
        state_id: number;
        name: string;
        alpha_code: string;
        country_id: number;
        created_on: Date;
        modified_on: Date;
        is_deleted: boolean;
    }>;
    findUniqueById(id: number, includeDeleted?: boolean): Promise<{
        state_id: number;
        name: string;
        alpha_code: string;
        country_id: number;
        created_on: Date;
        modified_on: Date;
        is_deleted: boolean;
    }>;
    findUniqueByStateName(name: string, includeDeleted?: boolean): Promise<{
        state_id: number;
        name: string;
        alpha_code: string;
        country_id: number;
        created_on: Date;
        modified_on: Date;
        is_deleted: boolean;
    }>;
    create(data: Prisma.stateCreateInput): Promise<{
        state_id: number;
        name: string;
        alpha_code: string;
        country_id: number;
        created_on: Date;
        modified_on: Date;
        is_deleted: boolean;
    }>;
    update(id: number, data: Prisma.stateUpdateInput): Promise<{
        state_id: number;
        name: string;
        alpha_code: string;
        country_id: number;
        created_on: Date;
        modified_on: Date;
        is_deleted: boolean;
    }>;
    delete(id: number): Promise<{}>;
    softDelete(id: any): Promise<{}>;
    date(): Promise<any>;
    getAllSP(): Promise<State[]>;
    count(conditions: any, options?: any): Promise<number>;
    groupBy(conditions: any, aggregator: any): Promise<any>;
    aggregate(conditions: any, aggregator: any, option: any): Promise<any>;
}
