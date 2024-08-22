import { Link } from "react-router-dom";
import { CgMathPlus } from "react-icons/cg";
import './Category.scss';
import { BsCartCheck } from "react-icons/bs";
import { IBookItem } from "../../../interfaces/IBookItem.ts";
import { useDispatch } from "react-redux";
import { addLoanDetail } from "../../../redux/loanSlice.ts";
import { ILoanDetail } from "../../../interfaces/ILoanDetail.ts";

export const BookItem = ({ book }: { book: IBookItem }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        const loanDetail: ILoanDetail
            = {
            book: book,
            quantity: 1,
        };

        dispatch(addLoanDetail(loanDetail));

    }

    return (
        <div className="border border-b-gray-200 rounded relative group w-full">
            <div className="m-2 rounded relative bg-gray-50 p-2">
                <img className="align-middle rounded object-cover" src={book.bookImage} />
                <div className="absolute left-0 bottom-0 flex items-center rounded-custom transition duration-300 ease-linear ">
                    <div
                        className="z-10 w-7 h-7 bg-blue-950 rounded-custom flex items-center justify-center text-white group-hover:bg-blue-950">
                        <CgMathPlus className="text-xl" />
                    </div>
                    <Link to={`/book/${book.id}`}
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white bg-blue-600 whitespace-nowrap text-xs p-1.5 w-28 hover:text-white -ml-4 rounded-custom">Xem
                        chi tiết</Link>
                </div>
                <ul className="m-0 p-0 list-none absolute right-0 top-0">
                    <li>
                        <button
                            onClick={handleAddToCart}
                            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-blue-600 right-0 top-0 w-7 h-7 text-xl hover:text-white rounded-custom flex items-center justify-center text-white">
                            <BsCartCheck />
                        </button>
                    </li>
                </ul>
            </div>
            <div className="text-center p-3">
                <h4><Link to={"/"} className="text-black hover:text-blue-600 title-cart">{book.title}</Link></h4>
                <div>
                    <h6 className="text-sky-500">{book.authors.map(author => author.fullName).join(", ")}</h6>
                </div>
                <div className="text-blue-600">{book.categories.map(category => category.name).join(", ")}</div>
            </div>
        </div>
    )
}