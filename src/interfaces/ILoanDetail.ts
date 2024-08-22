import { IBookItem } from "./IBookItem";

import { IApiResult } from "./IApiResult.ts";

export interface ILoanDetail extends IApiResult {
    loanId?: number;
    book: IBookItem;
    quantity: number;

}