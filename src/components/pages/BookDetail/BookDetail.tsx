import {IBookItem} from "../../../interfaces/IBookItem.ts";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";


export const BookDetail = () => {
    const {id} = useParams<{ id: string }>();
    const [book, setBook] = useState<IBookItem | null>(null);
    const [quantity, setQuantity] = useState<number>(1);

    useEffect(() => {
        // Replace with your actual fetch logic
        const fetchBook = async () => {
            const response = await fetch(`https://freetestapi.com/api/v1/books/1`);
            const data: IBookItem = await response.json();
            setBook(data);
        };

        fetchBook();
    }, [id]);

    if (!book) {
        return <div>Loading...</div>;
    }

    function incrementQuantity() {
        setQuantity(quantity + 1);
    }
    function decrementQuantity() {
        if(quantity===0){
            return;
        }
        setQuantity(quantity - 1);
    }


    return (
        <div className="grid grid-cols-3 gap-4">
            <div className="col-span-1 max-w-[460px] bg-white rounded-lg shadow-md p-4">
                <div>
                    <img
                        src={"https://images.unsplash.com/photo-1723441857662-d465a52e78d0?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                        alt={book.title} className="w-full rounded-lg"/>
                </div>
                <div className="mt-4">
                    <button
                        className="mr-5 items-center px-4 py-2 bg-white border border-blue-500 text-blue-500 rounded-lg transition duration-300 ease-in-out">
                        Thêm vào giỏ hàng
                    </button>
                    <button
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out">
                        Mượn ngay
                    </button>
                </div>
            </div>
            <div className="col-span-2 max-w-[720px]">
                <div className="p-4 bg-white rounded-lg shadow-md">
                    <h1 className="text-left font-bold text-4xl">{book.title}</h1>
                    <div className="flex items-center mt-4">
                        <span className="mr-2">Tác giả:</span>
                        {book.authors && book.authors.length > 0 ? (
                            book.authors.map((author) => (
                                <span key={author.id} className="mr-2">{author.fullName}</span>
                            ))
                        ) : (
                            <p>Chưa có thông tin</p>
                        )}
                    </div>
                    <div className="flex items-center mt-4">
                        <span className="mr-2">Thể loại:</span>
                        {book.categories && book.categories.length > 0 ? (
                            book.categories.map((category) => (
                                <span key={category.id} className="mr-2">{category.name}</span>
                            ))
                        ) : (
                            <p>Chưa có thông tin</p>
                        )}
                    </div>
                    <div className="flex items-center mt-4">
                        <span className="mr-2">Số lượng:</span>
                        <div className="border">
                            <button
                                className="h-8 w-8"
                                onClick={decrementQuantity}
                            >
                                -
                            </button>
                            <input
                                type="text"
                                value={quantity}
                                readOnly
                                className="w-12 text-center border-t border-b border-gray-200 h-8"
                            />
                            <button
                                className="h-8 w-8"
                                onClick={incrementQuantity}
                            >
                                +
                            </button>
                        </div>
                    </div>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-md mt-4">
                    <h2 className="text-left font-bold text-2xl">Mô tả</h2>
                    <p className="mt-4 text-left">{book.description}</p>
                </div>
            </div>
        </div>
    );
};