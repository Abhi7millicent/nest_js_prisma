import { Prisma } from '@prisma/client';
import { Aggregate, AnyRecord, BaseOption, CountArgs, ModelName, ModelStructure, ModelScalarFields, ModelTypes } from './prisma-repo';
export declare const extractCondition: <Cursor, Where>(conditions: Cursor | Where | number | string, modelName?: keyof ModelStructure) => string | number | Cursor | Where | {
    [x: string]: any;
};
declare const BaseRepository: <T extends keyof ModelStructure, Where extends ModelTypes[T]["Where"], Select extends ModelTypes[T]["Select"], Include extends ModelTypes[T]["Include"], Create extends ModelTypes[T]["Create"], Update extends ModelTypes[T]["Update"], Cursor extends ModelTypes[T]["Cursor"], Order extends ModelTypes[T]["Order"], Delegate extends ModelTypes[T]["Delegate"], Scalar extends ModelScalarFields<T>>(modelName: T) => (abstract new () => {}) & {
    modelName: T;
    findAll<Option extends BaseOption<Include, Select> & {
        cursor?: Cursor;
        take?: number;
        skip?: number;
        orderBy?: Prisma.Enumerable<Order>;
        distinct?: Scalar;
    } & {
        includeDeleted?: boolean;
    }, Args extends Option & {
        where?: Where;
    }, Return extends ModelTypes<Args>[T]["Return"]>(conditions: Where | number | string, filterQueryParams?: AnyRecord, query?: AnyRecord, option?: Option): Promise<{
        rows: Return[];
        count: number;
    }>;
    findMany(conditions: string | number | Where, filterQueryParams?: AnyRecord, query?: AnyRecord, option?: BaseOption<Include, Select> & {
        cursor?: Cursor;
        take?: number;
        skip?: number;
        orderBy?: Prisma.Enumerable<Order>;
        distinct?: Scalar;
    } & {
        includeDeleted?: boolean;
    }): Promise<{
        rows: ModelTypes<BaseOption<Include, Select> & {
            cursor?: Cursor;
            take?: number;
            skip?: number;
            orderBy?: Prisma.Enumerable<Order>;
            distinct?: Scalar;
        } & {
            includeDeleted?: boolean;
        } & {
            where?: Where;
        }>[T]["Return"][];
        count: number;
    }>;
    findOne<Option_1 extends BaseOption<Include, Select> & {
        cursor?: Cursor;
        take?: number;
        skip?: number;
        orderBy?: Prisma.Enumerable<Order>;
        distinct?: Scalar;
    } & {
        includeDeleted?: boolean;
    }, Args_1 extends Option_1 & {
        where?: Where;
    }, Return_1 extends ModelTypes<Args_1>[T]["Return"]>(conditions: Where | number | string, option?: Option_1): Promise<Return_1>;
    findFirst(conditions: string | number | Where, option?: BaseOption<Include, Select> & {
        cursor?: Cursor;
        take?: number;
        skip?: number;
        orderBy?: Prisma.Enumerable<Order>;
        distinct?: Scalar;
    } & {
        includeDeleted?: boolean;
    }): Promise<ModelTypes<BaseOption<Include, Select> & {
        cursor?: Cursor;
        take?: number;
        skip?: number;
        orderBy?: Prisma.Enumerable<Order>;
        distinct?: Scalar;
    } & {
        includeDeleted?: boolean;
    } & {
        where?: Where;
    }>[T]["Return"]>;
    findUnique<Option_2 extends BaseOption<Include, Select> & {
        includeDeleted?: boolean;
    }, Args_2 extends Option_2 & {
        where?: Cursor;
    }, Return_2 extends ModelTypes<Args_2>[T]["Return"]>(conditions: Cursor, option?: Option_2): Promise<Return_2>;
    create<Option_3 extends BaseOption<Include, Select>, Args_3 extends Option_3 & {
        data: Create;
    }, Return_3 extends ModelTypes<Args_3>[T]["Return"]>(data: Create, option?: Option_3): Promise<Return_3>;
    update<Option_4 extends BaseOption<Include, Select>, Payload extends Create | Update, Args_4 extends Option_4 & {
        data: Payload;
    }, Return_4 extends ModelTypes<Args_4>[T]["Return"]>(conditions: Where | number | string, data: Payload, option?: Option_4): Promise<Return_4>;
    softDelete<Option_5 extends BaseOption<Include_1, Select_1>, Payload_1 extends Update, Args_5 extends Option_5 & {
        data: Payload_1;
    }, Return_5 extends ModelTypes<Args_5>[T]["Return"], Include_1 = any, Select_1 = any>(modelName: ModelName, conditions: Where | number | string, additionalData?: Partial<Payload_1>, option?: Option_5): Promise<Return_5>;
    delete(conditions: Where | number | string): Promise<Prisma.BatchPayload>;
    deleteOne<Option_6 extends {
        select?: Select;
    }, Return_6 extends ModelTypes<Option_6>[T]["Return"]>(conditions: Where | number | string, options?: Option_6): Promise<Return_6>;
    bulkCreate(data: Prisma.Enumerable<Create>, skipDuplicates?: boolean): Promise<Prisma.BatchPayload>;
    createMany(data: Prisma.Enumerable<Create>, skipDuplicates?: boolean): Promise<Prisma.BatchPayload>;
    bulkUpdate(where: Where, data: Prisma.Enumerable<Update>): Promise<Prisma.BatchPayload>;
    updateMany(where: Where, data: Prisma.Enumerable<Update>): Promise<Prisma.BatchPayload>;
    count(conditions: Where | number | string, option?: CountArgs<Select, Cursor, Order, Scalar>): Promise<number>;
    groupBy(conditions: Where | number | string, aggregator: Omit<Parameters<typeof this.model.aggregate>[0], 'where' | 'cursor'> & {
        groupBy: Scalar[];
    }): Promise<any>;
    aggregate(conditions: Where | number | string, aggregator: Omit<Parameters<typeof this.model.aggregate>[0], 'cursor' | 'take' | 'skip' | 'orderBy' | 'where'>, option?: Aggregate<Cursor, Order, Scalar>): ReturnType<Delegate["aggregate"]>;
    readonly model: Delegate;
};
export default BaseRepository;
