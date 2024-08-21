import {IApiResult} from "./IApiResult.ts";

export interface IUser extends IApiResult {
    id: number;
    fullName: string;
    email: string;
    username: string;
    dob: string;
    address: string;
    isAdmin: boolean;
}