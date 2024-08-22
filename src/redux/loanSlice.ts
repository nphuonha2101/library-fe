// loanSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ILoan } from '../interfaces/ILoan';
import { ILoanDetail } from '../interfaces/ILoanDetail';

export interface LoanState {
    loan: ILoan | null;
}

const initialState: LoanState = {
    loan: null,
};

const loanSlice = createSlice({
    name: 'loan',
    initialState,
    reducers: {
        setLoan: (state, action: PayloadAction<ILoan>) => {
            state.loan = action.payload;
        },
        updateLoan: (state, action: PayloadAction<ILoan>) => {
            if (state.loan && state.loan.id === action.payload.id) {
                state.loan = action.payload;
            }
        },
        addLoanDetail: (state, action: PayloadAction<ILoanDetail>) => {
            if (state.loan) {
                state.loan.loanDetails = state.loan.loanDetails || [];
                state.loan.loanDetails.push(action.payload);
            }
        },
        updateLoanDetail: (state, action: PayloadAction<ILoanDetail>) => {
            if (state.loan && state.loan.loanDetails) {
                const index = state.loan.loanDetails.findIndex(detail => detail.book.id === action.payload.book.id);
                if (index !== -1) {
                    state.loan.loanDetails[index] = action.payload;
                }
            }
        },
        removeLoanDetail: (state, action: PayloadAction<number>) => {
            if (state.loan && state.loan.loanDetails) {
                state.loan.loanDetails = state.loan.loanDetails.filter(detail => detail.book.id !== action.payload);
            }
        },
        updateLoanDetailQuantity: (state, action: PayloadAction<{ bookId: number, quantity: number }>) => {
            if (state.loan && state.loan.loanDetails) {
                const index = state.loan.loanDetails.findIndex(detail => detail.book.id === action.payload.bookId);
                if (index !== -1) {
                    state.loan.loanDetails[index].quantity = action.payload.quantity;
                }
            }
        },
    },
});

export const { setLoan, updateLoan, addLoanDetail, updateLoanDetail, removeLoanDetail, updateLoanDetailQuantity } = loanSlice.actions;

export default loanSlice.reducer;