import { IBookItem } from "./IBookItem";
import { IUser } from "./IUser";

export interface IBookReview {
    id: number;
    book: IBookItem;
    user: IUser;
    title: string;
    review: string;
    rating: number;
    createdAt: string;
}