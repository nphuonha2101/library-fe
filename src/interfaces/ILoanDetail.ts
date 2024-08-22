import { IBookItem } from "./IBookItem";
import { ILoan } from "./ILoan";
import {IApiResult} from "./IApiResult.ts";

export interface ILoanDetail extends IApiResult{
    loan: ILoan;
    book: IBookItem;
    quantity: number;
    dueDate: string;
    returnDate: string;
}