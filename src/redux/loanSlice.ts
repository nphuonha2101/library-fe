// loanSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ILoan } from '../interfaces/ILoan';
import { ILoanDetail } from '../interfaces/ILoanDetail';
import { IUser } from '../interfaces/IUser';
import { WritableDraft } from 'immer';


export interface LoanState {
    loan: ILoan | null;
}

const initialState: LoanState = {
    loan: {
        user: {
            id: 0,
            username: "",
            email: "",
            fullName: "",
            address: "",
            dob: "",
            isAdmin: false,
        },
        loanDetails: [],
    }
};

const loanSlice = createSlice({
    name: 'loanState',
    initialState,
    reducers: {
        setLoan: (state, action: PayloadAction<ILoan>) => {
            state.loan = { ...state.loan, ...action.payload };
        },
        updateLoan: (state, action: PayloadAction<ILoan>) => {
            if (state.loan && state.loan.id === action.payload.id) {
                state.loan = action.payload;
            }
        },
        addLoanDetail: (state, action: PayloadAction<ILoanDetail>) => {
            if (state.loan) {
                state.loan.loanDetails = state.loan.loanDetails || [];
                const existingDetail = state.loan.loanDetails.find(detail => detail.book.id === action.payload.book.id);
                if (existingDetail) {
                    existingDetail.quantity += action.payload.quantity;
                } else {
                    state.loan.loanDetails.push(action.payload);
                }
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
        resetLoan: (state) => {
            state.loan = { ...initialState.loan, user: {} as WritableDraft<IUser> };
        }
    },
});

export const { setLoan, updateLoan, addLoanDetail, updateLoanDetail, removeLoanDetail, updateLoanDetailQuantity, resetLoan } = loanSlice.actions;

export default loanSlice.reducer;