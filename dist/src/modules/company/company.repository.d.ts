import { ModelScalarFields, ModelStructure } from 'src/core/repository/prisma-repo';
declare const company_base: (abstract new () => {}) & {
    modelName: "company";
    findAll<Option extends import("src/core/repository/prisma-repo").BaseOption<unknown, import(".prisma/client").Prisma.companySelect<import("@prisma/client/runtime/library").DefaultArgs>> & {
        cursor?: unknown;
        take?: number;
        skip?: number;
        orderBy?: import(".prisma/client").Prisma.Enumerable<import(".prisma/client").Prisma.companyOrderByWithRelationInput>;
        distinct?: ModelScalarFields<"company">;
    } & {
        includeDeleted?: boolean;
    }, Args extends Option & {
        where?: import(".prisma/client").Prisma.companyWhereInput;
    }, Return extends import("@prisma/client/runtime/library").GetFindResult<import(".prisma/client").Prisma.$companyPayload<import("@prisma/client/runtime/library").DefaultArgs>, Args>>(conditions: string | number | import(".prisma/client").Prisma.companyWhereInput, filterQueryParams?: import("src/core/repository/prisma-repo").AnyRecord, query?: import("src/core/repository/prisma-repo").AnyRecord, option?: Option): Promise<{
        rows: Return[];
        count: number;
    }>;
    findMany(conditions: string | number | import(".prisma/client").Prisma.companyWhereInput, filterQueryParams?: import("src/core/repository/prisma-repo").AnyRecord, query?: import("src/core/repository/prisma-repo").AnyRecord, option?: import("src/core/repository/prisma-repo").BaseOption<unknown, import(".prisma/client").Prisma.companySelect<import("@prisma/client/runtime/library").DefaultArgs>> & {
        cursor?: unknown;
        take?: number;
        skip?: number;
        orderBy?: import(".prisma/client").Prisma.Enumerable<import(".prisma/client").Prisma.companyOrderByWithRelationInput>;
        distinct?: ModelScalarFields<"company">;
    } & {
        includeDeleted?: boolean;
    }): Promise<{
        rows: {
            company_id: number;
            name: string;
            short_name: string;
            address: string;
            pincode: string;
            city_id: number;
            state_id: number;
            country_id: number;
            contact_no_1: string;
            contact_no_2: string;
            email_id: string;
            about_us: string;
            logo_filename_image: string;
            created_on: Date;
            created_by: number;
            modified_on: Date;
            modified_by: number;
            is_active: boolean;
            is_deleted: boolean;
        }[];
        count: number;
    }>;
    findOne<Option_1 extends import("src/core/repository/prisma-repo").BaseOption<unknown, import(".prisma/client").Prisma.companySelect<import("@prisma/client/runtime/library").DefaultArgs>> & {
        cursor?: unknown;
        take?: number;
        skip?: number;
        orderBy?: import(".prisma/client").Prisma.Enumerable<import(".prisma/client").Prisma.companyOrderByWithRelationInput>;
        distinct?: ModelScalarFields<"company">;
    } & {
        includeDeleted?: boolean;
    }, Args_1 extends Option_1 & {
        where?: import(".prisma/client").Prisma.companyWhereInput;
    }, Return_1 extends import("@prisma/client/runtime/library").GetFindResult<import(".prisma/client").Prisma.$companyPayload<import("@prisma/client/runtime/library").DefaultArgs>, Args_1>>(conditions: string | number | import(".prisma/client").Prisma.companyWhereInput, option?: Option_1): Promise<Return_1>;
    findFirst(conditions: string | number | import(".prisma/client").Prisma.companyWhereInput, option?: import("src/core/repository/prisma-repo").BaseOption<unknown, import(".prisma/client").Prisma.companySelect<import("@prisma/client/runtime/library").DefaultArgs>> & {
        cursor?: unknown;
        take?: number;
        skip?: number;
        orderBy?: import(".prisma/client").Prisma.Enumerable<import(".prisma/client").Prisma.companyOrderByWithRelationInput>;
        distinct?: ModelScalarFields<"company">;
    } & {
        includeDeleted?: boolean;
    }): Promise<{
        company_id: number;
        name: string;
        short_name: string;
        address: string;
        pincode: string;
        city_id: number;
        state_id: number;
        country_id: number;
        contact_no_1: string;
        contact_no_2: string;
        email_id: string;
        about_us: string;
        logo_filename_image: string;
        created_on: Date;
        created_by: number;
        modified_on: Date;
        modified_by: number;
        is_active: boolean;
        is_deleted: boolean;
    }>;
    findUnique<Option_2 extends import("src/core/repository/prisma-repo").BaseOption<unknown, import(".prisma/client").Prisma.companySelect<import("@prisma/client/runtime/library").DefaultArgs>> & {
        includeDeleted?: boolean;
    }, Args_2 extends Option_2 & {
        where?: unknown;
    }, Return_2 extends import("@prisma/client/runtime/library").GetFindResult<import(".prisma/client").Prisma.$companyPayload<import("@prisma/client/runtime/library").DefaultArgs>, Args_2>>(conditions: unknown, option?: Option_2): Promise<Return_2>;
    create<Option_3 extends import("src/core/repository/prisma-repo").BaseOption<unknown, import(".prisma/client").Prisma.companySelect<import("@prisma/client/runtime/library").DefaultArgs>>, Args_3 extends Option_3 & {
        data: import(".prisma/client").Prisma.companyCreateInput | import(".prisma/client").Prisma.companyUncheckedCreateInput;
    }, Return_3 extends import("@prisma/client/runtime/library").GetFindResult<import(".prisma/client").Prisma.$companyPayload<import("@prisma/client/runtime/library").DefaultArgs>, Args_3>>(data: import(".prisma/client").Prisma.companyCreateInput | import(".prisma/client").Prisma.companyUncheckedCreateInput, option?: Option_3): Promise<Return_3>;
    update<Option_4 extends import("src/core/repository/prisma-repo").BaseOption<unknown, import(".prisma/client").Prisma.companySelect<import("@prisma/client/runtime/library").DefaultArgs>>, Payload extends import(".prisma/client").Prisma.companyCreateInput | import(".prisma/client").Prisma.companyUncheckedCreateInput | import(".prisma/client").Prisma.companyUpdateInput | import(".prisma/client").Prisma.companyUncheckedUpdateInput, Args_4 extends Option_4 & {
        data: Payload;
    }, Return_4 extends import("@prisma/client/runtime/library").GetFindResult<import(".prisma/client").Prisma.$companyPayload<import("@prisma/client/runtime/library").DefaultArgs>, Args_4>>(conditions: string | number | import(".prisma/client").Prisma.companyWhereInput, data: Payload, option?: Option_4): Promise<Return_4>;
    softDelete<Option_5 extends import("src/core/repository/prisma-repo").BaseOption<Include, Select>, Payload_1 extends import(".prisma/client").Prisma.companyUpdateInput | import(".prisma/client").Prisma.companyUncheckedUpdateInput, Args_5 extends Option_5 & {
        data: Payload_1;
    }, Return_5 extends import("@prisma/client/runtime/library").GetFindResult<import(".prisma/client").Prisma.$companyPayload<import("@prisma/client/runtime/library").DefaultArgs>, Args_5>, Include = any, Select = any>(modelName: keyof ModelStructure, conditions: string | number | import(".prisma/client").Prisma.companyWhereInput, additionalData?: Partial<Payload_1>, option?: Option_5): Promise<Return_5>;
    delete(conditions: string | number | import(".prisma/client").Prisma.companyWhereInput): Promise<import(".prisma/client").Prisma.BatchPayload>;
    deleteOne<Option_6 extends {
        select?: import(".prisma/client").Prisma.companySelect<import("@prisma/client/runtime/library").DefaultArgs>;
    }, Return_6 extends import("@prisma/client/runtime/library").GetFindResult<import(".prisma/client").Prisma.$companyPayload<import("@prisma/client/runtime/library").DefaultArgs>, Option_6>>(conditions: string | number | import(".prisma/client").Prisma.companyWhereInput, options?: Option_6): Promise<Return_6>;
    bulkCreate(data: import(".prisma/client").Prisma.Enumerable<import(".prisma/client").Prisma.companyCreateInput | import(".prisma/client").Prisma.companyUncheckedCreateInput>, skipDuplicates?: boolean): Promise<import(".prisma/client").Prisma.BatchPayload>;
    createMany(data: import(".prisma/client").Prisma.Enumerable<import(".prisma/client").Prisma.companyCreateInput | import(".prisma/client").Prisma.companyUncheckedCreateInput>, skipDuplicates?: boolean): Promise<import(".prisma/client").Prisma.BatchPayload>;
    bulkUpdate(where: import(".prisma/client").Prisma.companyWhereInput, data: import(".prisma/client").Prisma.Enumerable<import(".prisma/client").Prisma.companyUpdateInput | import(".prisma/client").Prisma.companyUncheckedUpdateInput>): Promise<import(".prisma/client").Prisma.BatchPayload>;
    updateMany(where: import(".prisma/client").Prisma.companyWhereInput, data: import(".prisma/client").Prisma.Enumerable<import(".prisma/client").Prisma.companyUpdateInput | import(".prisma/client").Prisma.companyUncheckedUpdateInput>): Promise<import(".prisma/client").Prisma.BatchPayload>;
    count(conditions: string | number | import(".prisma/client").Prisma.companyWhereInput, option?: import("src/core/repository/prisma-repo").CountArgs<import(".prisma/client").Prisma.companySelect<import("@prisma/client/runtime/library").DefaultArgs>, unknown, import(".prisma/client").Prisma.companyOrderByWithRelationInput, ModelScalarFields<"company">>): Promise<number>;
    groupBy(conditions: string | number | import(".prisma/client").Prisma.companyWhereInput, aggregator: Omit<import(".prisma/client").Prisma.Subset<import(".prisma/client").Prisma.CityAggregateArgs<import("@prisma/client/runtime/library").DefaultArgs>, import(".prisma/client").Prisma.CityAggregateArgs<import("@prisma/client/runtime/library").DefaultArgs>> | import(".prisma/client").Prisma.Subset<import(".prisma/client").Prisma.CompanyAggregateArgs<import("@prisma/client/runtime/library").DefaultArgs>, import(".prisma/client").Prisma.CompanyAggregateArgs<import("@prisma/client/runtime/library").DefaultArgs>> | import(".prisma/client").Prisma.Subset<import(".prisma/client").Prisma.CountryAggregateArgs<import("@prisma/client/runtime/library").DefaultArgs>, import(".prisma/client").Prisma.CountryAggregateArgs<import("@prisma/client/runtime/library").DefaultArgs>> | import(".prisma/client").Prisma.Subset<import(".prisma/client").Prisma.ProjectAggregateArgs<import("@prisma/client/runtime/library").DefaultArgs>, import(".prisma/client").Prisma.ProjectAggregateArgs<import("@prisma/client/runtime/library").DefaultArgs>> | import(".prisma/client").Prisma.Subset<import(".prisma/client").Prisma.StateAggregateArgs<import("@prisma/client/runtime/library").DefaultArgs>, import(".prisma/client").Prisma.StateAggregateArgs<import("@prisma/client/runtime/library").DefaultArgs>>, "cursor" | "where"> & {
        groupBy: ModelScalarFields<"company">[];
    }): Promise<any>;
    aggregate(conditions: string | number | import(".prisma/client").Prisma.companyWhereInput, aggregator: Omit<import(".prisma/client").Prisma.Subset<import(".prisma/client").Prisma.CityAggregateArgs<import("@prisma/client/runtime/library").DefaultArgs>, import(".prisma/client").Prisma.CityAggregateArgs<import("@prisma/client/runtime/library").DefaultArgs>> | import(".prisma/client").Prisma.Subset<import(".prisma/client").Prisma.CompanyAggregateArgs<import("@prisma/client/runtime/library").DefaultArgs>, import(".prisma/client").Prisma.CompanyAggregateArgs<import("@prisma/client/runtime/library").DefaultArgs>> | import(".prisma/client").Prisma.Subset<import(".prisma/client").Prisma.CountryAggregateArgs<import("@prisma/client/runtime/library").DefaultArgs>, import(".prisma/client").Prisma.CountryAggregateArgs<import("@prisma/client/runtime/library").DefaultArgs>> | import(".prisma/client").Prisma.Subset<import(".prisma/client").Prisma.ProjectAggregateArgs<import("@prisma/client/runtime/library").DefaultArgs>, import(".prisma/client").Prisma.ProjectAggregateArgs<import("@prisma/client/runtime/library").DefaultArgs>> | import(".prisma/client").Prisma.Subset<import(".prisma/client").Prisma.StateAggregateArgs<import("@prisma/client/runtime/library").DefaultArgs>, import(".prisma/client").Prisma.StateAggregateArgs<import("@prisma/client/runtime/library").DefaultArgs>>, "cursor" | "take" | "skip" | "orderBy" | "where">, option?: import("src/core/repository/prisma-repo").Aggregate<unknown, import(".prisma/client").Prisma.companyOrderByWithRelationInput, ModelScalarFields<"company">>): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Prisma.GetCompanyAggregateType<import(".prisma/client").Prisma.CompanyAggregateArgs<import("@prisma/client/runtime/library").DefaultArgs>>>;
    readonly model: import(".prisma/client").Prisma.companyDelegate<undefined>;
};
declare class company extends company_base {
}
export default company;
