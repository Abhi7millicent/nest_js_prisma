import { StateService } from './states.services';
import { UpdateStateDto } from './dto/UpdateState.dto';
import { CreateStateDto } from './dto/CreateState.dto';
export declare class StatesController {
    private readonly stateService;
    constructor(stateService: StateService);
    findAll(req: Request): Promise<{
        statusCode: number;
        success: boolean;
        message: string;
        data: {
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
        };
        errorMessage?: undefined;
    } | {
        statusCode: number;
        success: boolean;
        errorMessage: any;
        message?: undefined;
        data?: undefined;
    }>;
    findIncludeAll(): Promise<{
        statusCode: number;
        success: boolean;
        message: string;
        data: {
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
        };
        errorMessage?: undefined;
    } | {
        statusCode: number;
        success: boolean;
        errorMessage: any;
        message?: undefined;
        data?: undefined;
    }>;
    findAllSelect(): Promise<{
        statusCode: number;
        success: boolean;
        message: string;
        data: {
            rows: {
                state_id: number;
                name: string;
                countries: never;
            }[];
            count: number;
        };
        errorMessage?: undefined;
    } | {
        statusCode: number;
        success: boolean;
        errorMessage: any;
        message?: undefined;
        data?: undefined;
    }>;
    findAllSelectOrder(): Promise<{
        statusCode: number;
        success: boolean;
        message: string;
        data: {
            rows: {
                state_id: number;
                name: string;
                countries: never;
            }[];
            count: number;
        };
        errorMessage?: undefined;
    } | {
        statusCode: number;
        success: boolean;
        errorMessage: any;
        message?: undefined;
        data?: undefined;
    }>;
    findAllIIncludeOrder(): Promise<{
        statusCode: number;
        success: boolean;
        message: string;
        data: {
            rows: {
                state_id: number;
                name: string;
                countries: never;
            }[];
            count: number;
        };
        errorMessage?: undefined;
    } | {
        statusCode: number;
        success: boolean;
        errorMessage: any;
        message?: undefined;
        data?: undefined;
    }>;
    getDate(): Promise<{
        statusCode: number;
        success: boolean;
        message: string;
        data: any;
        errorMessage?: undefined;
    } | {
        statusCode: number;
        success: boolean;
        errorMessage: any;
        message?: undefined;
        data?: undefined;
    }>;
    getAllSP(): Promise<{
        statusCode: number;
        success: boolean;
        message: string;
        data: import("../../models/class.transformer.ts/state").State[];
        errorMessage?: undefined;
    } | {
        statusCode: number;
        success: boolean;
        errorMessage: any;
        message?: undefined;
        data?: undefined;
    }>;
    findOne(id: string, req: Request): Promise<{
        statusCode: number;
        success: boolean;
        message: string;
        data: {
            countries: never;
        } & {
            state_id: number;
            name: string;
            alpha_code: string;
            country_id: number;
            created_on: Date;
            modified_on: Date;
            is_deleted: boolean;
        };
        errorMessage?: undefined;
    } | {
        statusCode: number;
        success: boolean;
        errorMessage: any;
        message?: undefined;
        data?: undefined;
    }>;
    findOneDeleted(id: string): Promise<{
        statusCode: number;
        success: boolean;
        message: string;
        data?: undefined;
        errorMessage?: undefined;
    } | {
        statusCode: number;
        success: boolean;
        message: string;
        data: {
            countries: never;
        } & {
            state_id: number;
            name: string;
            alpha_code: string;
            country_id: number;
            created_on: Date;
            modified_on: Date;
            is_deleted: boolean;
        };
        errorMessage?: undefined;
    } | {
        statusCode: number;
        success: boolean;
        errorMessage: any;
        message?: undefined;
        data?: undefined;
    }>;
    findUniqueById(id: string): Promise<{
        statusCode: number;
        success: boolean;
        message: string;
        data?: undefined;
        errorMessage?: undefined;
    } | {
        statusCode: number;
        success: boolean;
        message: string;
        data: {
            state_id: number;
            name: string;
            alpha_code: string;
            country_id: number;
            created_on: Date;
            modified_on: Date;
            is_deleted: boolean;
        };
        errorMessage?: undefined;
    } | {
        statusCode: number;
        success: boolean;
        errorMessage: any;
        message?: undefined;
        data?: undefined;
    }>;
    findUniqueByStateName(name: string): Promise<{
        statusCode: number;
        success: boolean;
        messages: string;
        message?: undefined;
        data?: undefined;
        errorMessage?: undefined;
    } | {
        statusCode: number;
        success: boolean;
        message: string;
        data: {
            state_id: number;
            name: string;
            alpha_code: string;
            country_id: number;
            created_on: Date;
            modified_on: Date;
            is_deleted: boolean;
        };
        messages?: undefined;
        errorMessage?: undefined;
    } | {
        statusCode: number;
        success: boolean;
        errorMessage: any;
        messages?: undefined;
        message?: undefined;
        data?: undefined;
    }>;
    create(data: CreateStateDto): Promise<{
        statusCode: number;
        success: boolean;
        message: string;
        data: {
            state_id: number;
            name: string;
            alpha_code: string;
            country_id: number;
            created_on: Date;
            modified_on: Date;
            is_deleted: boolean;
        };
        errorMessage?: undefined;
    } | {
        statusCode: number;
        success: boolean;
        errorMessage: any;
        message?: undefined;
        data?: undefined;
    }>;
    update(id: string, data: UpdateStateDto): Promise<{
        statusCode: number;
        success: boolean;
        message: string;
        data: {
            state_id: number;
            name: string;
            alpha_code: string;
            country_id: number;
            created_on: Date;
            modified_on: Date;
            is_deleted: boolean;
        };
        errorMessage?: undefined;
    } | {
        statusCode: number;
        success: boolean;
        errorMessage: any;
        message?: undefined;
        data?: undefined;
    }>;
    delete(id: number): Promise<{
        statusCode: number;
        success: boolean;
        message: string;
        data: {};
        errorMessage?: undefined;
    } | {
        statusCode: number;
        success: boolean;
        errorMessage: any;
        message?: undefined;
        data?: undefined;
    }>;
    softDelete(id: number): Promise<{
        statusCode: number;
        success: boolean;
        message: string;
        data: {};
        errorMessage?: undefined;
    } | {
        statusCode: number;
        success: boolean;
        errorMessage: any;
        message?: undefined;
        data?: undefined;
    }>;
    count(): Promise<{
        statusCode: number;
        success: boolean;
        message: string;
        data: number;
        errorMessage?: undefined;
    } | {
        statusCode: number;
        success: boolean;
        errorMessage: any;
        message?: undefined;
        data?: undefined;
    }>;
    groupBy(): Promise<{
        statusCode: number;
        success: boolean;
        message: string;
        data: any;
        errorMessage?: undefined;
    } | {
        statusCode: number;
        success: boolean;
        errorMessage: any;
        message?: undefined;
        data?: undefined;
    }>;
    aggregate(): Promise<{
        statusCode: number;
        success: boolean;
        message: string;
        data: any;
        errorMessage?: undefined;
    } | {
        statusCode: number;
        success: boolean;
        errorMessage: any;
        message?: undefined;
        data?: undefined;
    }>;
}
