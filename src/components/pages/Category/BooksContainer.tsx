// import {useFetchBooks} from "../../../hooks/useFetchBooks.ts";
import {BookItem} from "./BookItem.tsx";
import {Link} from "react-router-dom";
import {FiArrowRight} from "react-icons/fi";
import {DiYii} from "react-icons/di";
import {IBookItem} from "../../../interfaces/IBookItem.ts";

export const BooksContainer = ({data, containerTitle}: {
    data: IBookItem[];
    containerTitle: string;
}) => {
    return (
        <div className="container">
            <div className="mb-10">
                <div className="items-center justify-between gap-3 flex flex-wrap">
                    <div className="text-3xl font-bold mb-0 capitalize ">
                        <h2 className="flex items-center space-x-2">
                            <DiYii className="text-blue-600"/>
                            <span className="text-sky-950">{containerTitle}</span>
                            <DiYii className="text-blue-600"/>
                        </h2>
                    </div>
                    <div className="text-xl">
                        <Link className="flex font-normal items-center text-black hover:text-orange-600" to={"/"}>Xem tất
                            cả <FiArrowRight className="text-black items-center ml-1 hover:text-orange-600"/></Link>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-x-8 gap-y-8">
                {data.map((book, index) => (
                    <BookItem
                        key={index}
                        id={book.id}
                        bookImage={book.bookImage}
                        title={book.title}
                        authors={book.authors}
                        categories={book.categories}
                    />
                ))}
            </div>
        </div>
    )
}