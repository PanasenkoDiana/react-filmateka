import { RouterProvider, createBrowserRouter, Route, Routes } from "react-router-dom"
import { Layout } from './Layout/Layout'
import { Main } from '../pages/Main/Main'
import { MoviesPage } from '../pages/MoviesPage/MoviesPage'
import { Movie } from '../pages/Movie/Movie'
import { Auth } from '../pages/Auth/Auth';
import { Register } from '../pages/Register/Register';
import { RecentlyViewedProvider } from '../context/RecentlyViewedContext'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Main />
            },
            {
                path: '/movies',
                element: <MoviesPage />
            },
            {
                path: '/movie/:id',
                element: <Movie />
            },
            {
                path: '/auth',
                element: <Auth />
            },
            {
                path: '/register',
                element: <Register />
            }
        ]
    }
]);

export function App() {
    return (
        <RecentlyViewedProvider>
            <RouterProvider router={router} />
        </RecentlyViewedProvider>
    )
}
