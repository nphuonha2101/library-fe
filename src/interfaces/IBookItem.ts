import { IAuthor } from "./IAuthor";
import { ICategory } from "./ICategory";

export interface IBookItem {
    id?: number;
    title: string;
    isbn: string;
    description: string;
    importedDate: string;
    quantity: number;
    bookImage: string;
    authors: IAuthor[];
    categories: ICategory[];
}