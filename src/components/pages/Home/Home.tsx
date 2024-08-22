import { BooksContainer } from "../Category/BooksContainer"
import { CategoryBar } from "../Category/CategoryBar"
import { useEffect, useState } from 'react'
import { IBookItem } from "../../../interfaces/IBookItem"
import { useTitle } from "../../../hooks/useTitle"

export const Home = () => {
    const [books, setBooks] = useState<IBookItem[]>([])

    useTitle("Trang chủ");

    useEffect(() => {
        fetch("https://localhost:7259/api/v1/books")
            .then(res => res.json())
            .then(data => setBooks(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <CategoryBar containerTitle="Các thể loại sách" />
            <BooksContainer data={books} containerTitle="Nổi bật" />

        </div>
    )
}