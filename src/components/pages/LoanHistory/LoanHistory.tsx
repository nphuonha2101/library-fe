import { useEffect, useState } from "react";
import { ILoan } from "../../../interfaces/ILoan";
import { ILoanDetail } from "../../../interfaces/ILoanDetail";
import { getString } from "../../../utils/localStorageUtil";


export const LoanHistory = () => {
    const [loans, setLoans] = useState<ILoan[]>([]);
    const [loanDetails, setLoanDetails] = useState<{ "loanId": number; "loanDetails": ILoanDetail[] }[]>([]);
    const bearerToken = getString("token");


    // fetch loans
    useEffect(() => {

        fetch(`https://localhost:7259/api/v1/loans`, {
            headers: {
                Authorization: `Bearer ${bearerToken}`,
            },
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(data => setLoans(data));
    }, []);

    // fetch loan details
    useEffect(() => {
        for (const loan of loans) {
            fetch(`https://localhost:7259/api/v1/loan-details/loan/${loan.id}`, {
                headers: {
                    Authorization: `Bearer ${bearerToken}`,
                },
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Network response was not ok");
                    }
                    return response.json();
                })
                .then(data => setLoanDetails((prevState) => [...prevState, { "loanId": loan.id as number, "loanDetails": data }]));
        }
    }, []);



    return (
        <div className="loan-history ">
            <h1 className="text-2xl font-bold mb-4">Lịch sử mượn</h1>

            <ul className="text-left">
                {loans.map(loan => (
                    < li className="p-4 bg-white rounded-lg shadow-md mb-10 ms-10 me-10" >
                        <div className="loan">
                            <div className="flex justify-end border">
                                <p>Ngày trả: {loan.returnDate == null ? "Chưa trả" : loan.returnDate}</p>
                            </div>

                            <ul>
                                {loan.id && loanDetails[loan.id].loanDetails.map(detail => (
                                    <li className="mt-4">
                                        <div className="flex gap-4">
                                            <div className="w-12">
                                                <img
                                                    src={detail.book.bookImage}
                                                    alt="Image description"
                                                />
                                            </div>
                                            <div className="text-left">
                                                <p>{detail.book.title}</p>
                                                <p>Số lượng: {detail.quantity}</p>
                                            </div>
                                            <div className="ml-auto">
                                                <p>Ngày đến hạn: {loan.dueDate}</p>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li >
                ))}
            </ul >
        </div >
    );
};