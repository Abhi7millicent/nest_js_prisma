import { CreateCountryDto, UpdateCountryDto } from './country.DTO';
import { CountryRepository } from './country.repository';
export declare class CountryService {
    private readonly countryRepo;
    constructor(countryRepo: CountryRepository);
    findAllSelect(includeDeleted?: boolean): Promise<{
        rows: {
            country_id: number;
            currency_symbol: string;
        }[];
        count: number;
    }>;
    findOne(id: number, includeDeleted?: boolean): Promise<{
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
    }>;
    create(data: CreateCountryDto): Promise<{
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
    }>;
    update(id: number, data: UpdateCountryDto): Promise<{
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
    }>;
    softDelete(id: any): Promise<{}>;
    delete(id: number): Promise<{}>;
}
