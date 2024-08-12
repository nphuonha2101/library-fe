import { IRoute } from '../interfaces/IRoute';
import { Home } from '../components/pages/Home/Home';
import { Master } from '../components/layouts/Master';
import {CategoryList} from "../components/pages/Category/CategoryList.tsx";

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
]