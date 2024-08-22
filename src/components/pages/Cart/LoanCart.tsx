import { useTitle } from "../../../hooks/useTitle"
import { DiYii } from "react-icons/di"
import { dateFormat } from "../../../utils/dateFormat"
import { addDays } from "date-fns"
import { ChangeEvent, useRef } from "react"
import { ILoan } from "../../../interfaces/ILoan"
import { RootState } from "../../../redux/store"
import { useSelector, useDispatch } from "react-redux"
import { getAntiForgeryToken, getStoredToken } from "../../../services/csrfTokenService"
import { toast } from "react-toastify"
import { removeLoanDetail, updateLoanDetailQuantity } from "../../../redux/loanSlice"



export const LoanCart = () => {
    const loan = useSelector((state: RootState) => state.loan.loan as ILoan);
    const dispatch = useDispatch();
    const quantityInputRef = useRef<HTMLInputElement>(null);

    const getLoanTime = () => {
        if (loan.loanDetails?.length && loan.loanDetails?.length >= 0 && loan.loanDetails?.length <= 3) {
            return 7;
        }
        if (loan.loanDetails?.length && loan.loanDetails?.length >= 4 && loan.loanDetails?.length <= 6) {
            return 14;
        }
        return 30;

    }

    const saveLoan = async (): Promise<ILoan> => {
        const loanForm = new FormData();
        loanForm.append('userId', loan.user.id.toString());
        loanForm.append('loanDate', new Date().toISOString());
        loanForm.append('dueDate', addDays(new Date(), getLoanTime()).toISOString());

        const token = await (getStoredToken() || getAntiForgeryToken());

        return fetch('https://localhost:7259/api/v1/loans', {
            method: 'POST',
            body: loanForm,
            headers: {
                "X-CSRF-TOKEN": token
            },
            credentials: "include"
        }).then((response) => {
            if (!response.ok || response.status != 201) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        });
    }

    const handleLoan = async () => {
        try {
            const loanSaved: ILoan = await saveLoan();

            loan.loanDetails?.forEach(async (loanDetail) => {
                const loanDetailForm = new FormData();
                loanDetailForm.append('bookId', loanDetail.book.id.toString());
                loanDetailForm.append('quantity', loanDetail.quantity.toString());
                loanDetailForm.append('loanId', loanSaved.id.toString());

                const token = await (getStoredToken() || getAntiForgeryToken());

                await fetch('https://localhost:7259/api/v1/loan-details', {
                    method: 'POST',
                    body: loanDetailForm,
                    headers: {
                        "X-CSRF-TOKEN": token
                    },
                    credentials: "include"
                }).then((response) => {
                    if (!response.ok || response.status != 201) {
                        throw new Error('Network response was not ok');
                    }
                });
            });

            toast.success('Mượn sách thành công');
        }
        catch (error) {
            toast.error('Đã có lỗi xảy ra khi mượn sách');
        }
    }

    const handleDeleteLoanDetail = (bookId: number) => {
        dispatch(removeLoanDetail(bookId));
    }




    const checkQuantity = async (bookId: number, currentQuantity: number) => {
        const quantity = await fetch(`https://localhost:7259/api/v1/books/${bookId}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                return data.quantity;
            })
            .catch((error) => {
                console.error('Fetch error:', error);
            });

        return {
            "status": quantity >= currentQuantity,
            "quantity": quantity
        }
    }


    const handleQuantityChange = async (e: ChangeEvent<HTMLInputElement>, bookId: number) => {
        await checkQuantity(bookId, Number.parseInt(e.target.value)).then((result) => {
            if (!result.status) {
                quantityInputRef.current?.setCustomValidity(`Số lượng sách không đủ. Số lượng sách hiện có: ${result.quantity}`);
            } else {
                quantityInputRef.current?.setCustomValidity('');
                dispatch(updateLoanDetailQuantity({ bookId: bookId, quantity: Number.parseInt(e.target.value) }));
            }

            quantityInputRef.current?.reportValidity();
        });
    }


    useTitle("Danh sách mượn sách");

    if (loan.loanDetails?.length === 0)
        return (
            <p className="text-center">Vui lòng thêm sách để mượn!</p>
        );

    return (
        <div>
            <div className="text-3xl font-bold mb-0 capitalize ">
                <h2 className="flex items-center space-x-2">
                    <DiYii className="text-blue-600" />
                    <span className="text-sky-950">Danh sách mượn sách</span>
                    <DiYii className="text-blue-600" />
                </h2>
            </div>
            <div className="md:grid md:grid-cols-8 md:gap-4 mt-16">
                <div className="col-span-6">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200 table-automin-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
                            <thead>
                                <tr className="bg-blue-600 text-white uppercase text-sm leading-normal">
                                    <th className="py-3 px-6 text-left">STT</th>
                                    <th className="py-3 px-6 text-left">Tên sách</th>
                                    <th className="py-3 px-6 text-left">Tác giả</th>
                                    <th className="py-3 px-6 text-left">Ngày mượn</th>
                                    <th className="py-3 px-6 text-left">Ngày phải trả</th>
                                    <th className="py-3 px-6 text-left">Số lượng</th>
                                    <th className="py-3 px-6 text-left">Thao tác</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-600 text-sm font-light">
                                {loan.loanDetails?.map((loanDetail, index) => {
                                    return (

                                        <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                                            <td className="py-3 px-6 text-left ">{index + 1}</td>
                                            <td className="py-3 px-6 text-left ">{loanDetail.book.title}</td>
                                            <td className="py-3 px-6 text-left ">{loanDetail.book.authors.map((author) => author.fullName).join(', ')}</td>
                                            <td className="py-3 px-6 text-left ">{dateFormat(loan.loanDate)}</td>
                                            <td className="py-3 px-6 text-left ">{dateFormat(addDays(new Date(), getLoanTime()).toISOString())}</td>
                                            <td className="py-3 px-6 text-left whitespace-nowrap ">
                                                <label htmlFor="quantity-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Chọn số lượng:</label>
                                                <div className="relative flex items-center max-w-[8rem]">
                                                    <button
                                                        type="button"
                                                        id="decrement-button"
                                                        data-input-counter-decrement="quantity-input" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                                        <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                                                        </svg>
                                                    </button>
                                                    <input ref={quantityInputRef} onChange={async () => await handleQuantityChange} type="text" id="quantity-input" data-input-counter data-input-counter-min="1" data-input-counter-max="10" aria-describedby="helper-text-explanation" className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="999" value="5" required />
                                                    <button type="button" id="increment-button" data-input-counter-increment="quantity-input" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                                        <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </td>

                                            <td className="py-3 px-6 text-left ">
                                                <button
                                                    onClick={() => handleDeleteLoanDetail(loanDetail.book.id)}
                                                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                                >
                                                    Xóa
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="col-span-2">
                    <div className="bg-white rounded-lg border p-4">
                        <h3 className="text-lg font-semibold mb-4">Thông tin mượn</h3>
                        <div className="flex items-center mb-2">
                            <span className="font-bold text-blue-400 mr-2">Ngày mượn:</span>
                            <span>{dateFormat(loan.loanDate)}</span>
                        </div>
                        <div className="flex items-center mb-2">
                            <span className="font-bold text-blue-400 mr-2">Họ và tên:</span>
                            <span>{loan.user.fullName}</span>
                        </div>
                        <div className="flex items-center mb-2">
                            <span className="font-bold text-blue-400 mr-2">Email:</span>
                            <span>{loan.user.email}</span>
                        </div>
                        <div className="flex items-center mb-2">
                            <span className="font-bold text-blue-400 mr-2">Địa chỉ:</span>
                            <span>{loan.user.address}</span>
                        </div>
                        <div className="flex items-center mb-2">
                            <span className="font-bold text-blue-400 mr-2">Số đầu sách mượn:</span>
                            <span>{loan.loanDetails?.length}</span>
                        </div>

                        <button onClick={async () => await handleLoan()}
                            className="w-full mt-5 text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                            Mượn sách
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}