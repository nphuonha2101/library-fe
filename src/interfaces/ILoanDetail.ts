import { IBookItem } from "./IBookItem";
import { ILoan } from "./ILoan";

export interface ILoanDetail {
    loan: ILoan;
    book: IBookItem;
    quantity: number;
    dueDate: string;
    returnDate: string;
}