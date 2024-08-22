import { ILoanDetail } from "./ILoanDetail";
import { ILoanFine } from "./ILoanFine";
import { IUser } from "./IUser";
import { IApiResult } from "./IApiResult.ts";

export interface ILoan extends IApiResult {
    id: number;
    user: IUser;
    loanDate: string;
    dueDate: string;
    returnDate: string;
    loanFine?: ILoanFine;
    loanDetails?: ILoanDetail[];
}