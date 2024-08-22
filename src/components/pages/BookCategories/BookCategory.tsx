
import React from "react";
import { useParams } from "react-router-dom";
import { IBookItem } from "../../../interfaces/IBookItem.ts";
import { BooksContainer } from "../Category/BooksContainer.tsx";
import { ICategory } from "../../../interfaces/ICategory.ts";
import { useTitle } from "../../../hooks/useTitle.ts";

export const BookCategory: React.FC = () => {

    const { categoryId } = useParams<{ categoryId: string }>();
    console.log(categoryId);
    const [books, setBooks] = React.useState<IBookItem[]>([]);
    const [category, setCategory] = React.useState<ICategory>();

    useTitle("Các sách thuộc thể loại: " + category?.name);

    // fetch category by id
    React.useEffect(() => {
        fetch(`https://localhost:7259/api/v1/categories/${categoryId}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => setCategory(data))
            .catch((error) => {
                console.error('Fetch error:', error);
            });

    }, [categoryId]);

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

    return (
        <BooksContainer containerTitle={`Sách với thể loại là: ${category?.name}`} data={books} />
    );
};