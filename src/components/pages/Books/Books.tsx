import { useEffect, useState } from 'react';
import { IBookItem } from '../../../interfaces/IBookItem';
import { ICategory } from '../../../interfaces/ICategory';
import { BooksContainer } from '../Category/BooksContainer';
import { useTitle } from '../../../hooks/useTitle';

const Books = () => {
    const [categories, setCategories] = useState<ICategory[]>([]);
    const [bookCategories, setBookCategories] = useState<{ category: ICategory; books: IBookItem[] }[]>([]);

    useTitle('Tất cả sách');

    useEffect(() => {
        fetch('https://localhost:7259/api/v1/categories')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => setCategories(data))
            .catch((error) => {
                console.error('Fetch error:', error);
            });
    }, []);

    useEffect(() => {
        const booksWithCategory = categories.map((category) => {
            return fetch(`https://localhost:7259/api/v1/books/category/${category.id}`)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then((data) => ({ category, books: data as IBookItem[] }))
                .catch((error) => {
                    console.error('Fetch error:', error);
                    return { category, books: [] as IBookItem[] };
                });
        });

        Promise.all(booksWithCategory).then((data) => {
            setBookCategories(data);
        });
    }, [categories]);

    return (
        <div>
            {bookCategories.map((bookCategory, index) => (
                <BooksContainer key={index} data={bookCategory.books} containerTitle={`Sách với thể loại là: ${bookCategory.category.name}`} />
            ))}
        </div>
    );
};

export default Books;