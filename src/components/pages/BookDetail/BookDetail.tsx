import { IBookItem } from "../../../interfaces/IBookItem.ts";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Reviews } from "../../paritials/Reviews/Reviews.tsx";
import { getObject } from "../../../utils/localStorageUtil.ts";
import { useTitle } from "../../../hooks/useTitle.ts";
import { useDispatch } from "react-redux";
import { addLoanDetail } from "../../../redux/loanSlice.ts";
import { ILoanDetail } from "../../../interfaces/ILoanDetail.ts";


export const BookDetail = () => {
    const { id } = useParams<{ id: string }>();
    const [book, setBook] = useState<IBookItem | null>(null);
    const [quantity, setQuantity] = useState<number>(1);
    const [isLogin, setIsLogin] = useState<boolean>(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    useEffect(() => {
        const userString = getObject("user");

        if (userString) {
            setIsLogin(true);
        } else {
            setIsLogin(false);
        }
    }, []);
    useTitle(book?.title || "Chi tiết sách");


    useEffect(() => {
        // Replace with your actual fetch logic
        const fetchBook = async () => {
            const response = await fetch(`https://localhost:7259/api/v1/books/${id}`);
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
        if (quantity === 0) {
            return;
        }
        setQuantity(quantity - 1);
    }

    const handleLoanNow = () => {
        const loanDetail: ILoanDetail = {
            book: book,
            quantity: quantity
        }

        dispatch(addLoanDetail(loanDetail));
        navigate("/loan");
    }

    const addToLoanList = () => {
        const loanDetail: ILoanDetail = {
            book: book,
            quantity: quantity
        }

        dispatch(addLoanDetail(loanDetail));
    }




    return (
        <div className="grid grid-cols-3 gap-4">
            <div className="col-span-1 max-w-[460px] h-fit bg-white rounded-lg shadow-md p-4">
                <div>
                    <img
                        src={book.bookImage != '' ? book.bookImage : "https://www.crucial.com.au/blog/wp-content/uploads/2014/04/cloud_computing_in_education.jpg"}
                        alt={book.title} className="w-full rounded-lg" />
                </div>
                <div className="mt-4">
                    {isLogin ? (
                        <>
                            <button
                                onClick={addToLoanList}
                                className="mr-5 items-center px-4 py-2 bg-white border border-blue-500 text-blue-500 rounded-lg transition duration-300 ease-in-out">
                                Thêm vào danh sách mượn
                            </button>
                            <button
                                onClick={handleLoanNow}
                                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out">
                                Mượn ngay
                            </button>
                        </>
                    ) : (
                        <>
                            <button
                                className="mr-5 items-center px-4 py-2 bg-white border border-blue-500 text-blue-500 rounded-lg transition duration-300 ease-in-out cursor-not-allowed" disabled>
                                Vui lòng đăng nhập
                            </button>
                            <button
                                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out cursor-not-allowed" disabled>
                                Đăng nhập để mượn
                            </button>
                        </>
                    )}


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

                <Reviews bookId={book.id} />
            </div>
        </div>
    );
};