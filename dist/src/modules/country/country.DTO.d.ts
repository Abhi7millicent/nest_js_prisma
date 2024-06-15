export declare class CreateCountryDto {
    name: string;
    alpha_2: string;
    alpha_3: string;
    phone_code: number;
    currency: string;
    currency_symbol: string;
    created_on?: Date;
    modified_on?: Date;
    is_deleted?: boolean;
}
export declare class UpdateCountryDto {
    name?: string;
    alpha_2?: string;
    alpha_3?: string;
    phone_code?: number;
    currency?: string;
    currency_symbol?: string;
    is_deleted?: boolean;
}
