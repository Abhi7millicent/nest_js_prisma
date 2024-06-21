import { Request } from 'express';

declare module 'express' {
  interface Request {
    user?: any; // Replace `any` with the type of your user object if known
  }
}

declare module 'passport-http' {
  import { Strategy as PassportStrategy } from 'passport-strategy';

  export class BasicStrategy extends PassportStrategy {
    constructor(
      verify: (
        username: string,
        password: string,
        done: (error: any, user?: any, info?: any) => void,
      ) => void,
    );
    constructor(
      options: BasicStrategyOptions,
      verify: (
        username: string,
        password: string,
        done: (error: any, user?: any, info?: any) => void,
      ) => void,
    );
  }

  export interface BasicStrategyOptions {
    passReqToCallback?: boolean;
    realm?: string;
  }
}
