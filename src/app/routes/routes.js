import {lazy} from 'react'

export default [
    {
        name: 'Products',
        path: '/',
        exact: true,
        strict: true,
        component: lazy(() => import('../product/Products')),
    },
    {
        name: 'Cart',
        path: '/cart',
        exact: true,
        strict: true,
        component: lazy(() => import('../cart/Cart')),
    },
    {
        path: '*',
        notFound: true,
    }
];
