import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
export declare class TransformInterceptor<T> implements NestInterceptor {
    private readonly dtoClass;
    private readonly options?;
    private readonly defaultOptions;
    constructor(dtoClass: new (...args: any[]) => T, options?: any);
    intercept(context: ExecutionContext, next: CallHandler): Observable<any>;
    transform(data: any): T | T[];
}
