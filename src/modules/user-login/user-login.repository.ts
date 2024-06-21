import _ from 'lodash';
import {
  AnyRecord,
  ModelStructure,
  ModelTypes,
  ModelScalarFields,
  MODELS_NAME,
} from '../../core/repository/prisma-repo';
import BaseRepository from 'src/core/repository/baseRepository';

// This type will be used if you want to extends the functions in user_login Class

/* eslint-disable @typescript-eslint/no-unused-vars */
type Where = ModelTypes[typeof MODELS_NAME.USER_LOGIN]['Where'];
type Select = ModelTypes[typeof MODELS_NAME.USER_LOGIN]['Select'];
type Include = ModelTypes[typeof MODELS_NAME.USER_LOGIN]['Include'];
type Create = ModelTypes[typeof MODELS_NAME.USER_LOGIN]['Create'];
type Update = ModelTypes[typeof MODELS_NAME.USER_LOGIN]['Update'];
type Cursor = ModelTypes[typeof MODELS_NAME.USER_LOGIN]['Cursor'];
type Order = ModelTypes[typeof MODELS_NAME.USER_LOGIN]['Order'];
type Delegate = ModelTypes[typeof MODELS_NAME.USER_LOGIN]['Delegate'];
type GroupBy = ModelTypes[typeof MODELS_NAME.USER_LOGIN]['GroupBy'];
type Scalar = ModelScalarFields<typeof MODELS_NAME.USER_LOGIN>;
type Model = ModelStructure[typeof MODELS_NAME.USER_LOGIN];
/*  eslint-enable @typescript-eslint/no-unused-vars */

class UserLoginRepository extends BaseRepository(MODELS_NAME.USER_LOGIN) {}

export default UserLoginRepository;
