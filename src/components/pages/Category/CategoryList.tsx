import { useFetchBooks } from "../../../hooks/useFetchBooks.ts";
import { BookItem } from "./BookItem.tsx";
import React from "react";
import {ICategoryList} from "../../../interfaces/ICategoryList.ts";

export const CategoryList:React.FC<ICategoryList> = ({category}) => {
    const { books, error, loading } = useFetchBooks("https://freetestapi.com/api/v1/books");

    if (loading) return <p>Loading...</p>;
    if (error) return <div>Error: {error.message}</div>;

    const filteredBooks = category ? books.filter((book) => book.genre.includes(category)) : books;

    return (
        <div className="container">
            <h2 className="text-3xl font-bold mb-4">{category}</h2>
            <div className="grid grid-cols-4 gap-x-8 gap-y-8">
                {filteredBooks.map((book, index) => (
                    <BookItem
                        key={index}
                        id={book.id}
                        cover_image={book.cover_image}
                        title={book.title}
                        author={book.author}
                        genre={book.genre}
                    />
                ))}
            </div>
        </div>
    );
};