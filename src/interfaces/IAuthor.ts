import {IApiResult} from "./IApiResult.ts";

export interface IAuthor extends IApiResult{
    id: number;
    fullName: string;
    dob: string;
    description: string;
}