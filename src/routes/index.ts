import { IRoute } from '../interfaces/IRoute';
import { Home } from '../components/pages/Home/Home';
import { Master } from '../components/layouts/Master';
import { BookCategory } from "../components/pages/BookCategories/BookCategory.tsx";
import { BookDetail } from "../components/pages/BookDetail/BookDetail.tsx";
import { Login } from "../components/pages/Form/Login.tsx";
import {About} from "../components/pages/About/About.tsx";

import { LoanCart } from '../components/pages/Cart/LoanCart.tsx';
import { Admin } from "../components/layouts/Admin.tsx";
import { BookManagement } from "../components/pages/adminPages/BookManagement/BookManagement.tsx";
import Books from '../components/pages/Books/Books.tsx';
import { Register } from '../components/pages/Form/Register.tsx';
import {LoanHistory} from "../components/pages/LoanHistory/LoanHistory.tsx";

export const routes: IRoute[] = [
    {
        path: '/',
        Component: Home,
        Layout: Master
    },
    {
        path: '/book/:id',
        Component: BookDetail,
        Layout: Master

    },
    {
        path: '/books',
        Component: Books,
        Layout: Master
    },
    {
        path: '/login',
        Component: Login,
        Layout: Master
    },
    {
        path: '/register',
        Component: Register,
        Layout: Master
    },
    {
        path: '/cart',
        Component: LoanCart,
        Layout: Master
    },
    {
        path: '/admin',
        Component: BookManagement,
        Layout: Admin
    },
    {
        path: '/admin/books',
        Component: BookManagement,
        Layout: Admin
    },

    {
        path: '/books/category/:categoryId',
        Component: BookCategory,
        Layout: Master
    },
    {
        path: '/about',
        Component: About,
        Layout: Master
    },
    {
        path: '/loans',
        Component: LoanHistory,
        Layout: Master
    }
]