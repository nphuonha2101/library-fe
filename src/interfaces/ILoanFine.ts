import { ILoan } from "./ILoan";

export interface ILoanFine {
    id?: number;
    loan: ILoan;
    amount: number;
    createDate: string;
    paymentStatus: string;
}