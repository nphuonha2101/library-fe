import { ILoan } from "./ILoan";
import {IApiResult} from "./IApiResult.ts";

export interface ILoanFine extends IApiResult{
    id: number;
    loan: ILoan;
    amount: number;
    createDate: string;
    paymentStatus: string;
}