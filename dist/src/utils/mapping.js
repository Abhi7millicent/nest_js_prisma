"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapRawToDto = void 0;
function mapRawToDto(rawData) {
    return rawData?.map((item) => ({
        state_id: item?.f0,
        name: item?.f1,
        alpha_code: item?.f2,
        country_id: item?.f3,
        country_name: item?.f4,
    }));
}
exports.mapRawToDto = mapRawToDto;
//# sourceMappingURL=mapping.js.map