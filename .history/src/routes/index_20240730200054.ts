import { IRoute } from '../interfaces/IRoute';
import { Home } from '../components/pages/Home/Home';
import { Master } from '../components/layouts/Master';

export const routes: IRoute[] = [
    {
        path: '/',
        component: Home,
        layout: Master
    }
]