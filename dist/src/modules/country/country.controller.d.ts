import { CountryService } from './country.services';
import { CreateCountryDto } from './country.DTO';
import { UpdateStateDto } from '../states/dto/UpdateState.dto';
export declare class CountryController {
    private readonly countryService;
    constructor(countryService: CountryService);
    findAllSelect(): Promise<{
        statusCode: number;
        success: boolean;
        message: string;
        data: {
            rows: {
                country_id: number;
                currency_symbol: string;
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
    findOne(id: string): Promise<{
        statusCode: number;
        success: boolean;
        message: string;
        data: {
            country_id: number;
            name: string;
            alpha_2: string;
            alpha_3: string;
            phone_code: number;
            currency: string;
            currency_symbol: string;
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
    create(data: CreateCountryDto): Promise<{
        statusCode: number;
        success: boolean;
        message: string;
        data: {
            country_id: number;
            name: string;
            alpha_2: string;
            alpha_3: string;
            phone_code: number;
            currency: string;
            currency_symbol: string;
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
            country_id: number;
            name: string;
            alpha_2: string;
            alpha_3: string;
            phone_code: number;
            currency: string;
            currency_symbol: string;
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
}
