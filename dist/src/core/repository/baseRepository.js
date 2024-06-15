"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractCondition = void 0;
const lodash_1 = __importDefault(require("lodash"));
console.log(lodash_1.default, 'Lodash Imported');
const prisma_repo_1 = require("./prisma-repo");
const extractCondition = (conditions, modelName) => {
    const primaryKeyField = `${modelName}_id`;
    const dbCond = lodash_1.default.isObject(conditions)
        ? conditions
        : { [primaryKeyField]: lodash_1.default.toNumber(conditions) };
    return dbCond;
};
exports.extractCondition = extractCondition;
const BaseRepository = (modelName) => {
    class AbstractBaseRepository {
        static async findAll(conditions, filterQueryParams = {}, query = {}, option = {}) {
            const limit = +(query.limit === 'all' ? 0 : lodash_1.default.get(query, 'limit', 50));
            const offset = query.page && query.page > 0 ? limit * (query.page - 1) : 0;
            const otherOptions = lodash_1.default.omit(query, ['limit', 'offset', 'page']);
            const includeSoftDeleted = option.includeDeleted || false;
            console.log(modelName, 'modleName findAll');
            const where = Object.assign({}, (0, exports.extractCondition)(conditions, modelName), filterQueryParams, otherOptions);
            if (!includeSoftDeleted) {
                where.is_deleted = false;
            }
            return {
                rows: (await AbstractBaseRepository.model.findMany({
                    where,
                    ...lodash_1.default.omit(option, ['includeDeleted']),
                    skip: offset,
                    ...(limit > 0 && { take: limit }),
                })),
                count: await this.count(where),
            };
        }
        static async findMany(...params) {
            return AbstractBaseRepository.findAll(...params);
        }
        static async findOne(conditions, option = {}) {
            const where = Object.assign({}, (0, exports.extractCondition)(conditions, modelName));
            const includeSoftDeleted = option.includeDeleted || false;
            if (!includeSoftDeleted) {
                where.is_deleted = false;
            }
            return AbstractBaseRepository.model.findFirst({
                where,
                ...lodash_1.default.omit(option, ['includeDeleted']),
            });
        }
        static async findFirst(...params) {
            return AbstractBaseRepository.findOne(...params);
        }
        static async findUnique(conditions, option = {}) {
            const where = (0, exports.extractCondition)(conditions, modelName);
            const includeSoftDeleted = option.includeDeleted || false;
            if (!includeSoftDeleted) {
                where.is_deleted = false;
            }
            return AbstractBaseRepository.model.findUnique({
                where,
                ...lodash_1.default.omit(option, ['includeDeleted']),
            });
        }
        static async create(data, option = {}) {
            return AbstractBaseRepository.model.create({
                data,
                ...option,
            });
        }
        static async update(conditions, data, option = {}) {
            const where = (0, exports.extractCondition)(conditions, modelName);
            return AbstractBaseRepository.model.update({
                data,
                where,
                ...option,
            });
        }
        static async softDelete(modelName, conditions, additionalData = {}, option = {}) {
            const where = (0, exports.extractCondition)(conditions, modelName);
            const updateData = {
                is_deleted: true,
            };
            if ('modified_on' in additionalData) {
                updateData.modified_on = new Date();
            }
            if ('modified_by' in additionalData &&
                typeof additionalData.modified_by === 'string') {
                updateData.modified_by = additionalData.modified_by;
            }
            const model = prisma_repo_1.models[modelName];
            if (!model) {
                throw new Error(`Model ${modelName} not found in models object`);
            }
            return model.update({
                data: { ...updateData, ...additionalData },
                where,
                ...option,
            });
        }
        static async delete(conditions) {
            const where = (0, exports.extractCondition)(conditions, modelName);
            return AbstractBaseRepository.model.deleteMany({
                where,
            });
        }
        static async deleteOne(conditions, options = {}) {
            const where = (0, exports.extractCondition)(conditions, modelName);
            return AbstractBaseRepository.model.delete({
                where,
                ...options,
            });
        }
        static async bulkCreate(data, skipDuplicates = true) {
            return AbstractBaseRepository.model.createMany({
                data,
                skipDuplicates,
            });
        }
        static async createMany(...params) {
            return AbstractBaseRepository.bulkCreate(...params);
        }
        static async bulkUpdate(where, data) {
            return AbstractBaseRepository.model.updateMany({
                data,
                where,
            });
        }
        static async updateMany(...params) {
            return AbstractBaseRepository.bulkUpdate(...params);
        }
        static async count(conditions, option = {}) {
            const where = (0, exports.extractCondition)(conditions, modelName);
            return AbstractBaseRepository.model.count({
                where,
                ...option,
            });
        }
        static async groupBy(conditions, aggregator) {
            const where = (0, exports.extractCondition)(conditions, modelName);
            return AbstractBaseRepository.model.groupBy({
                where,
                ...aggregator,
            });
        }
        static aggregate(conditions, aggregator, option = {}) {
            const aggregate = AbstractBaseRepository.model
                .aggregate;
            const where = (0, exports.extractCondition)(conditions, modelName);
            if (lodash_1.default.isEmpty(aggregator)) {
                aggregator._count = true;
            }
            return aggregate({
                where,
                ...aggregator,
                ...option,
            });
        }
        static get model() {
            return prisma_repo_1.models[AbstractBaseRepository.modelName];
        }
    }
    AbstractBaseRepository.modelName = modelName;
    return AbstractBaseRepository;
};
exports.default = BaseRepository;
//# sourceMappingURL=baseRepository.js.map