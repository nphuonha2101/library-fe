import React from 'react';
import { Navigate } from 'react-router-dom';
import { RouteType } from '../const/RouteType';
import { getObject } from '../utils/localStorageUtil';
import { IUser } from '../interfaces/IUser';

const PrivateRoute = ({ children, routeType }: { children: React.ReactElement, routeType: number }) => {
    const isAuthenticated = !!localStorage.getItem('token');
    const user = getObject('user') as IUser;
    const isAdmin = user?.isAdmin;


    if (routeType === RouteType.PRIVATE && !isAuthenticated) {
        return (<Navigate to="/login" />);
    }

    if (routeType === RouteType.ADMIN && (!isAuthenticated || !isAdmin)) {
        return (<Navigate to="/" />);
    }

    if (routeType === RouteType.NOT_ALLOW_AUTH && isAuthenticated) {
        return (<Navigate to="/" />);
    }

    return children;

};

export default PrivateRoute;