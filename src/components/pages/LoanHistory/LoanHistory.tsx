import { useState } from "react";


export const LoanHistory = () => {
    // const [loans, setLoans] = useState<ILoan[]>([]);
    const [expandedLoans, setExpandedLoans] = useState<{ [key: number]: boolean }>({});
    const toggleLoanFine = (id:number) => {
        setExpandedLoans((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }));
    };
    return (
        <div className="loan-history ">
            <h1 className="text-2xl font-bold mb-4">Lịch sử mượn</h1>

            <ul className="text-left">
                {/*{loans.map((loan) => (    key=loan.id*/}
                <li className="p-4 bg-white rounded-lg shadow-md mb-10 ms-10 me-10">
                    <div className="loan">
                        <div className="flex justify-end border">
                            <p>Ngày trả: Chưa trả</p>
                        </div>

                        <ul>
                            {/*{loan.loanDetails?.map((detail, index) => (   key = index*/}
                            <li className="mt-4">
                                <div className="flex gap-4 ">
                                    <div className="w-12">
                                        <img
                                            src="https://images.unsplash.com/photo-1724250973924-0209b9a64c13?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                            alt="Image description"
                                        />
                                    </div>
                                    <div className="text-left">
                                        <p>Book title detail.book.title</p>
                                        <p>Số lượng: x detal.quantity</p>
                                    </div>
                                    <div className="ml-auto">
                                        <p>Ngày đến hạn: loan.dueDate</p>
                                    </div>
                                </div>
                            </li>
                            {/*))}*/}
                        </ul>

                        {/*{loan.loanFine && (*/}
                        <div className="flex justify-end mt-4">
                            <button className="w-28 h-8 bg-blue-500 hover:bg-white " onClick={() => toggleLoanFine(loan.id)}>
                                Loan Fine
                            </button>
                        </div>
                        {/*)}*/}
                        {/*{expandedLoans[loan.id] && loan.loanFine && (*/}
                            <div className="mt-4 border p-4">
                                <h2>Loan Fine Details</h2>
                                <p>Số tiền phạt: loan.loanFine.amount VND</p>
                                <p>Ngày phạt: loan.loanFine.createDate</p>
                                <p>Trạng thái thanh toán: loan.loanFine.paymentStatus</p>
                            </div>
                        {/*)}*/}
                    </div>
                </li>
                {/*))}*/}
            </ul>
        </div>
    );
};