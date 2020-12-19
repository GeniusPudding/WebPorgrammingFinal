import React from 'react';
import Loadable from 'react-loadable';
import { SDLoading } from '../component/SDLoading/SDLoading';
import { ROUTE_PRE_FIX } from '../common/constant';
import { adminRouter } from './navRouter';


export const rootRouter = [
    {
        path: '/login',
        forceRefresh: true,
        component: Loadable({
            loader: () => import('../page/login/login'),
            loading: () => <SDLoading />,
        }),
    },
    {
        path: `/${ROUTE_PRE_FIX}`,
        component: Loadable({
            loader: () => import('../layout/basicLayout'),
            loading: () => <SDLoading />,
        }),
    },
];

export const layoutRouter = [
    {
        path: '/home',
        forceRefresh: true,
        component: Loadable({
            loader: () => import('../page/home/home'),
            loading: () => <SDLoading />,
        }),
    },
];