import { ILoanDetail } from "./ILoanDetail";
import { ILoanFine } from "./ILoanFine";
import { IUser } from "./IUser";
import {IApiResult} from "./IApiResult.ts";
import {ILoanDetail} from "./ILoanDetail.ts";

export interface ILoan extends IApiResult{
    id: number;
    user: IUser;
    loanDate: string;
    loanFine?: ILoanFine;
    loanDetails?: ILoanDetail[];
}