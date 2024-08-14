import { IRoute } from '../interfaces/IRoute';
import { Home } from '../components/pages/Home/Home';
import { Master } from '../components/layouts/Master';
import {CategoryList} from "../components/pages/Category/CategoryList.tsx";
import {Login} from "../components/pages/Form/Login.tsx";

export const routes: IRoute[] = [
    {
        path: '/',
        Component: Home,
        Layout: Master
    },
    {
        path: '/category',
        Component:CategoryList,
        Layout: Master
    },
    {
        path: '/login',
        Component:Login,
        Layout: Master
    },
]