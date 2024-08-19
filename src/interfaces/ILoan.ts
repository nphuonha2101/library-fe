import { ILoanFine } from "./ILoanFine";
import { IUser } from "./IUser";

export interface ILoan {
    id?: number;
    user: IUser;
    loanDate: string;
    loanFine?: ILoanFine;
}