import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Layout } from './shared/Layout/Layout'
import { Main } from './pages/Main/Main'
import { MoviesPage } from './pages/MoviesPage/MoviesPage'
import { MoviePage } from "./pages/MoviePage/MoviePage"
import { RecentlyViewedProvider } from "./context/RecentlyViewedContext"
import { PersonPage } from "./pages/PersonPage/PersonPage"
import { Auth } from "./pages/Auth/Auth"
import { Register } from "./pages/Register/Register"
import { AdminPage } from "./pages/AdminPage/AdminPage"

export function App() {
    return (
        <RecentlyViewedProvider>
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout />}>
                        <Route path='/' element={<Main />} />
                        <Route path='/login' element={<Auth />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/movies' element={<MoviesPage />} />
                        <Route path='/movie/:id' element={<MoviePage />} />
                        <Route path='/person/:id' element={<PersonPage/>}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </RecentlyViewedProvider>
    );
}
