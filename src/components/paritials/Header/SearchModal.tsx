import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Modal } from "flowbite-react"
import { IBookItem } from "../../../interfaces/IBookItem";


export const SearchModal = ({ isOpen, handleClose }: { isOpen: boolean; handleClose: (isOpen: boolean) => void }) => {
    const [keyword, setKeyword] = useState("");
    const [searchResults, setSearchResults] = useState<IBookItem[]>([]);
    const searchInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isOpen && searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, [isOpen]);

    useEffect(() => {
        if (keyword.length > 3) {
            handleSearchPromp();
        } else if (keyword.length === 0) {
            setSearchResults([]);
        }
    }, [keyword]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setKeyword(e.target.value);
    }

    const handleSearchPromp = async () => {
        console.log(keyword);

        await fetch(`https://localhost:7259/api/v1/books/title/${keyword}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(data => setSearchResults(data))
            .catch(error => console.error("There was a problem with your fetch operation:", error));
    }

    return (
        <Modal
            className="modal-overlay"
            show={isOpen} onClose={() => handleClose(!isOpen)}>
            <Modal.Header className="h-fit p-2 flex items-center">
                <h1 className="text-lg">Tìm kiếm {keyword.length > 0 && ": " + keyword}</h1>
            </Modal.Header>

            <Modal.Body>
                <div className="w-full mb-3">
                    <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input
                            ref={searchInputRef}
                            onChange={handleInputChange}
                            type="search" id="search"
                            className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Nhập tên sách..." required />
                    </div>
                </div>

                <div className="grid md:grid-cols-3 grid-cols-1 md:gap-2 overflow-y-auto max-h-[400px]">
                    {searchResults.length > 0 ? searchResults.map((book, index) => (
                        <Link to={`/book/${book.id}`} onClick={() => handleClose(false)} key={index} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <img className="rounded-t-lg" src={book.bookImage} alt="" />
                            <div className="p-5">

                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{book.title}</h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    {book.description.length > 30 ? book.description.substring(0, 30) + "..." : book.description}
                                </p>
                            </div>
                        </Link>

                    )) : (keyword.length > 0 && <p className="col-span-3">Không có kết quả cho tìm kiếm: {keyword}</p>)}
                </div>
            </Modal.Body>
        </Modal>
    );
};