import {IAuthor} from "./IAuthor";
import {ICategory} from "./ICategory";
import {IApiResult} from "./IApiResult.ts";

export interface IBookItem extends IApiResult {
    id: number,
    title: string,
    isbn?: string,
    description?: string,
    importedDate?: string,
    quantity?: number,
    bookImage: string,
    authors: IAuthor[],
    categories: ICategory[],


}