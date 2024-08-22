// import {useFetchBooks} from "../../../hooks/useFetchBooks.ts";
import { BookItem } from "./BookItem.tsx";
import { FiArrowRight } from "react-icons/fi";
import { DiYii } from "react-icons/di";
import { IBookItem } from "../../../interfaces/IBookItem.ts";
import { useState } from "react";

export const BooksContainer = ({ data, containerTitle }: {
    data: IBookItem[];
    containerTitle: string;
}) => {
    const [showAll, setShowAll] = useState(false);

    const handleShowAll = () => {
        setShowAll(!showAll);
    };

    if (!showAll) {
        data = data.slice(0, 4);
    }

    return (
        <div className="container mt-9">
            <div className="mb-10">
                <div className="items-center justify-between gap-3 flex flex-wrap">
                    <div className="text-3xl font-bold mb-0 capitalize ">
                        <h2 className="flex items-center space-x-2">
                            <DiYii className="text-blue-600" />
                            <span className="text-sky-950">{containerTitle}</span>
                            <DiYii className="text-blue-600" />
                        </h2>
                    </div>
                    <div className="text-xl">
                        <button
                            className="flex items-center text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            onClick={handleShowAll}
                        >
                            {showAll ? 'Thu gọn' : 'Xem tất cả'} <FiArrowRight className="text-white items-center ml-1" />
                        </button>
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