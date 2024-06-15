"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modules = void 0;
const auth_module_1 = require("../core/auth/auth.module");
const states_module_1 = require("./states/states.module");
const city_module_1 = require("./city/city.module");
const country_module_1 = require("./country/country.module");
const user_module_1 = require("./user/user.module");
exports.Modules = [
    auth_module_1.AuthModule,
    user_module_1.UsersModule,
    states_module_1.StatesModule,
    city_module_1.CityModule,
    country_module_1.CountryModule,
];
//# sourceMappingURL=module.js.map