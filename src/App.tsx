import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Layout } from './shared/Layout/Layout'
import { Main } from './pages/Main/Main'
import { MoviesPage } from './pages/MoviesPage/MoviesPage'
import { MoviePage } from "./pages/MoviePage/MoviePage"

export function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout/>}>
                        <Route path='/' element={<Main/>} />
                        <Route path='/movies' element={<MoviesPage/>} />
                        <Route path='/movie/:id' element={<MoviePage/>} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
