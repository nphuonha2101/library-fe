import {useFetchBooks} from "../../../hooks/useFetchBooks.ts";
import {BookItem} from "./BookItem.tsx";
import {Link} from "react-router-dom";
import {FiArrowRight} from "react-icons/fi";
import {DiYii} from "react-icons/di";

export const BooksContainer = () => {
    const {books, error, loading} = useFetchBooks("https://freetestapi.com/api/v1/books");
    if (loading)
        return <p>Loading...</p>
    if (error) {
        return <div>Error: {error.message}</div>;
    }
    return (
        <div className="container">
            <div className="mb-10">
                <div className="items-center justify-between gap-3 flex flex-wrap">
                    <div className="text-3xl font-bold mb-0 capitalize ">
                        <h2 className="flex items-center space-x-2">
                            <DiYii className="text-orange-600"/>
                            <span className="text-sky-950">Tìm bộ sưu tập sách</span>
                            <DiYii className="text-orange-600"/>
                        </h2>
                    </div>
                    <div className="text-xl">
                        <Link className="flex font-normal items-center text-black hover:text-orange-600" to={"/"}>Xem tất
                            cả <FiArrowRight className="text-black items-center ml-1 hover:text-orange-600"/></Link>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-x-8 gap-y-8">
                {books && books.map((book, index) => (
                    <BookItem
                        key={index}
                        cover_image={book.cover_image}
                        title={book.title}
                        author={book.author}
                        genre={book.genre}
                    />
                ))}
            </div>
        </div>
    )
}