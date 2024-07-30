import { IRoute } from '../interfaces/IRoute';
import { Home } from '../components/pages/Home/Home';
import { Master } from '../components/layouts/Master';

export const routes: IRoute[] = [
    {
        path: '/',
        Component: Home,
        Layout: Master
    }
]