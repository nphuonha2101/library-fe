import { IRoute } from '../interfaces/IRoute';
import { Home } from '../components/pages/Home/Home';
import { Master } from '../components/layouts/Master';

import { CategoryList } from "../components/pages/Category/CategoryList.tsx";
import { BookDetail } from "../components/pages/BookDetail/BookDetail.tsx";
import { Login } from "../components/pages/Form/Login.tsx";
import { Register } from '../components/pages/Form/Register.tsx';
import { Cart } from '../components/pages/Cart/Cart.tsx';

import {Admin} from "../components/layouts/Admin.tsx";
import {BookManagement} from "../components/pages/adminPages/BookManagement/BookManagement.tsx";



export const routes: IRoute[] = [
    {
        path: '/',
        Component: Home,
        Layout: Master
    },
    {
        path: '/category',
        Component: CategoryList,
        Layout: Master
    },
    {
        path: '/book/:id',
        Component: BookDetail,
        Layout: Master

    },
    {

        path: '/login',
        Component: Login,
        Layout: Master
    },
    {path: '/register',
        Component: Register,
        Layout: Master
    },
    {
        path: '/cart',
        Component: Cart,
        Layout: Master
    },
  {
        path: '/admin',
        Component: BookManagement,
        Layout: Admin
    },
    {
        path: '/admin/book',
        Component: BookManagement,
        Layout: Admin
    },
    {
        path: '/books/category/:categoryId',
        Component: CategoryList,
        Layout: Master
    }
]