/// <reference types="multer" />
export declare class CreateItemDto {
    name: string;
    age: number;
    file: any;
}
export declare class UserController {
    CreateUser(createItemDto: CreateItemDto, file: Express.Multer.File): Promise<void>;
}
