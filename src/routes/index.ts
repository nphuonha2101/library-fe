import { IRoute } from '../interfaces/IRoute';
import { Home } from '../components/pages/Home/Home';
import { Master } from '../components/layouts/Master';
import { CategoryList } from "../components/pages/Category/CategoryList.tsx";
import { BookDetail } from "../components/pages/Category/BookDetail.tsx";
import { Login } from "../components/pages/Form/Login.tsx";
import { Register } from '../components/pages/Form/Register.tsx';
import { Cart } from '../components/pages/Cart/Cart.tsx';


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
    }, {
        path: '/login',
        Component: Login,
        Layout: Master
    },
    {
        path: '/register',
        Component: Cart,
        Layout: Master
    }
]