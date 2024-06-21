// /* eslint-disable @typescript-eslint/ban-ts-comment */

import {
  PrismaClient,
  Prisma,
  city,
  country,
  state,
  user_login,
  users,
} from '@prisma/client';
import _ from 'lodash';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
// export type AnyRecord = Record<string, any>;

// export type BaseOption<Include, Select> = {
//   include?: Include;
//   select?: Select;
//   // includeDeleted?: boolean;
// };

// export type Find<Select, Include, Cursor, Order, Distinct> = BaseOption<
//   Include,
//   Select
// > & {
//   cursor?: Cursor;
//   take?: number;
//   skip?: number;
//   orderBy?: Prisma.Enumerable<Order>;
//   distinct?: Distinct;
// };

// export type CountArgs<Select, Cursor, Order, Distinct> = Omit<
//   Find<Select, never, Cursor, Order, Distinct>,
//   'include'
// >;

// export type Aggregate<Cursor, Order, Distinct> = Omit<
//   CountArgs<never, Cursor, Order, Distinct>,
//   'select' | 'distinct'
// >;

// export const prisma = new PrismaClient({
//   log: ['error', 'info', 'query', 'warn'],
// });
// // console.log('prisma', prisma);
// export const models = _?.omit(prisma, [
//   '$on',
//   '$connect',
//   '$disconnect',
//   '$use',
//   '$executeRaw',
//   '$executeRawUnsafe',
//   '$queryRaw',
//   '$queryRawUnsafe',
//   '$transaction',
// ]);

// export const MODELS_NAME = {
//   CITY: 'city',
//   COMPANY: 'company',
//   COUNTRY: 'country',
//   PROJECT: 'project',
//   STATE: 'state',
// } as const;

// // eslint-disable-next-line @typescript-eslint/ban-types
// export type ModelStructure = {
//   city: city;
//   country: country;
//   state: state;
// };

// export type ModelName = keyof ModelStructure;

// export type ModelScalarFields<T extends keyof ModelStructure> =
//   Prisma.Enumerable<keyof ModelStructure[T]>;

// export type ModelTypes<T = unknown> = {
//   city: {
//     Where: Prisma.cityWhereInput;
//     Select: Prisma.citySelect;
//     Include: unknown;
//     Create: Prisma.cityCreateInput | Prisma.cityUncheckedCreateInput;
//     Update: Prisma.cityUpdateInput | Prisma.cityUncheckedUpdateInput;
//     Cursor: unknown;
//     Order: Prisma.cityOrderByWithRelationInput;
//     Delegate: Prisma.cityDelegate<undefined>;
//     GroupBy: Prisma.CityGroupByOutputType;
//     // @ts-ignore
//     Return: Prisma.cityGetPayload<T>;
//   };

//   country: {
//     Where: Prisma.countryWhereInput;
//     Select: Prisma.countrySelect;
//     Include: unknown;
//     Create: Prisma.countryCreateInput | Prisma.countryUncheckedCreateInput;
//     Update: Prisma.countryUpdateInput | Prisma.countryUncheckedUpdateInput;
//     Cursor: unknown;
//     Order: Prisma.countryOrderByWithRelationInput;
//     Delegate: Prisma.countryDelegate<undefined>;
//     GroupBy: Prisma.CountryGroupByOutputType;
//     // @ts-ignore
//     Return: Prisma.countryGetPayload<T>;
//   };

//   state: {
//     Where: Prisma.stateWhereInput;
//     Select: Prisma.stateSelect;
//     Include: unknown;
//     Create: Prisma.stateCreateInput | Prisma.stateUncheckedCreateInput;
//     Update: Prisma.stateUpdateInput | Prisma.stateUncheckedUpdateInput;
//     Cursor: unknown;
//     Order: Prisma.stateOrderByWithRelationInput;
//     Delegate: Prisma.stateDelegate<undefined>;
//     GroupBy: Prisma.StateGroupByOutputType;
//     // @ts-ignore
//     Return: Prisma.stateGetPayload<T>;
//   };
// };

export type AnyRecord = Record<string, any>;

export type BaseOption<Include, Select> = {
  include?: Include;
  select?: Select;
};

export type Find<Select, Include, Cursor, Order, Distinct> = BaseOption<
  Include,
  Select
> & {
  cursor?: Cursor;
  take?: number;
  skip?: number;
  orderBy?: Prisma.Enumerable<Order>;
  distinct?: Distinct;
};

export type CountArgs<Select, Cursor, Order, Distinct> = Omit<
  Find<Select, never, Cursor, Order, Distinct>,
  'include'
>;

export type Aggregate<Cursor, Order, Distinct> = Omit<
  CountArgs<never, Cursor, Order, Distinct>,
  'select' | 'distinct'
>;

export const prisma = new PrismaClient({
  log: ['error', 'info', 'query', 'warn'],
});

export const models = _.omit(prisma, [
  '$on',
  '$connect',
  '$disconnect',
  '$use',
  '$executeRaw',
  '$executeRawUnsafe',
  '$queryRaw',
  '$queryRawUnsafe',
  '$transaction',
]);

export const MODELS_NAME = {
  CITY: 'city',
  COUNTRY: 'country',
  STATE: 'state',
  USER_LOGIN: 'user_login',
  USERS: 'users',
} as const;

// eslint-disable-next-line @typescript-eslint/ban-types
export type ModelStructure = {
  city: city;
  country: country;
  state: state;
  user_login: user_login;
  users: users;
};

export type ModelName = keyof ModelStructure;

export type ModelScalarFields<T extends keyof ModelStructure> =
  Prisma.Enumerable<keyof ModelStructure[T]>;

// export type ModelDelegate =
//   | Prisma.RejectOnNotFound
//   | Prisma.RejectPerOperation
//   | undefined;

export type ModelTypes<T = unknown> = {
  city: {
    Where: Prisma.cityWhereInput;
    Select: Prisma.citySelect;
    Include: unknown;
    Create: Prisma.cityCreateInput | Prisma.cityUncheckedCreateInput;
    Update: Prisma.cityUpdateInput | Prisma.cityUncheckedUpdateInput;
    Cursor: unknown;
    Order: Prisma.cityOrderByWithRelationInput;
    Delegate: Prisma.cityDelegate<undefined>;
    GroupBy: Prisma.CityGroupByOutputType;
    // @ts-ignore
    Return: Prisma.cityGetPayload<T>;
  };
  country: {
    Where: Prisma.countryWhereInput;
    Select: Prisma.countrySelect;
    Include: unknown;
    Create: Prisma.countryCreateInput | Prisma.countryUncheckedCreateInput;
    Update: Prisma.countryUpdateInput | Prisma.countryUncheckedUpdateInput;
    Cursor: unknown;
    Order: Prisma.countryOrderByWithRelationInput;
    Delegate: Prisma.countryDelegate<undefined>;
    GroupBy: Prisma.CountryGroupByOutputType;
    // @ts-ignore
    Return: Prisma.countryGetPayload<T>;
  };
  state: {
    Where: Prisma.stateWhereInput;
    Select: Prisma.stateSelect;
    Include: unknown;
    Create: Prisma.stateCreateInput | Prisma.stateUncheckedCreateInput;
    Update: Prisma.stateUpdateInput | Prisma.stateUncheckedUpdateInput;
    Cursor: unknown;
    Order: Prisma.stateOrderByWithRelationInput;
    Delegate: Prisma.stateDelegate<undefined>;
    GroupBy: Prisma.StateGroupByOutputType;
    // @ts-ignore
    Return: Prisma.stateGetPayload<T>;
  };
  user_login: {
    Where: Prisma.user_loginWhereInput;
    Select: Prisma.user_loginSelect;
    Include: unknown;
    Create:
      | Prisma.user_loginCreateInput
      | Prisma.user_loginUncheckedCreateInput;
    Update:
      | Prisma.user_loginUpdateInput
      | Prisma.user_loginUncheckedUpdateInput;
    Cursor: Prisma.user_loginWhereUniqueInput;
    Delegate: Prisma.user_loginDelegate<undefined>;
    Order: Prisma.user_loginOrderByWithRelationInput;
    GroupBy: Prisma.User_loginGroupByOutputType;
    // @ts-ignore
    Return: Prisma.user_loginGetPayload<T>;
  };
  users: {
    Where: Prisma.usersWhereInput;
    Select: Prisma.usersSelect;
    Include: unknown;
    Create: Prisma.usersCreateInput | Prisma.usersUncheckedCreateInput;
    Update: Prisma.usersUpdateInput | Prisma.usersUncheckedUpdateInput;
    Cursor: unknown;
    Order: Prisma.usersOrderByWithRelationInput;
    Delegate: Prisma.usersDelegate<undefined>;

    GroupBy: Prisma.UsersGroupByOutputType;
    // @ts-ignore
    Return: Prisma.usersGetPayload<T>;
  };
};
