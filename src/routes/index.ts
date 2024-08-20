import { IRoute } from '../interfaces/IRoute';
import { Home } from '../components/pages/Home/Home';
import { Master } from '../components/layouts/Master';
import { CategoryList } from "../components/pages/Category/CategoryList.tsx";
import { BookDetail } from "../components/pages/BookDetail/BookDetail.tsx";
import { Login } from "../components/pages/Form/Login.tsx";
import { Cart } from '../components/pages/Cart/Cart.tsx';
import { Admin } from "../components/layouts/Admin.tsx";



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
    {
        path: '/cart',
        Component: Cart,
        Layout: Master
    },
    {
        path: '/admin',
        Component: Home,
        Layout: Admin
    }
]