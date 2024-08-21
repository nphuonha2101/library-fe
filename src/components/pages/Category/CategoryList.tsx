
import React from "react";
import {useParams} from "react-router-dom";
import {IBookItem} from "../../../interfaces/IBookItem.ts";
import {BookItem} from "./BookItem.tsx";

export const CategoryList:React.FC = () => {

    const {categoryId} = useParams<{categoryId: string}>();
    console.log(categoryId);
    const [books, setBooks] = React.useState<IBookItem[]>([]);

    // fetch books by category
    React.useEffect(() => {
        fetch(`https://localhost:7259/api/v1/books/category/${categoryId}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => setBooks(data))
            .catch((error) => {
                console.error('Fetch error:', error);
            });

    }, [categoryId]);
    // let catId = 0;
    //
    // fetch books by category
    // api/v1/books/category/:id

    //
    // if (loading) return <p>Loading...</p>;
    // if (error) return <div>Error: {error.message}</div>;

    // const filteredBooks = category ? books.filter((book) => book.genre.includes(category)) : books;

    return (
        <div className="container">
            {/*<h2 className="text-3xl font-bold mb-4">{category}</h2>*/}
            <div className="grid grid-cols-4 gap-x-8 gap-y-8">
                {books.map((book, index) => (
                    <BookItem
                        key={index}
                        id={book.id}
                        bookImage={book.bookImage}
                        title={book.title}
                        authors={book.authors}
                        categories={book.categories}
                        description={book.description}
                    />
                ))}
            </div>
        </div>
    );
};