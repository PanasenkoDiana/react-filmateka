import { BrowserRouter, Routes, Route } from "react-router-dom"
<<<<<<< HEAD:src/shared/App.tsx
import { Layout } from './Layout/Layout'
import { Main } from '../pages/Main/Main'
import { MoviesPage } from '../pages/MoviesPage/MoviesPage'
import { MoviePage } from '../pages/MoviePage/MoviePage'
=======
import { Layout } from './shared/Layout/Layout'
import { Main } from './pages/Main/Main'
import { MoviesPage } from './pages/MoviesPage/MoviesPage'
>>>>>>> 418bcbf0d74aa8947d643184fb94e3c1b8d217ab:src/App.tsx

export function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout/>}>
                        <Route path='/' element={<Main/>} />
                        <Route path='/movies' element={<MoviesPage/>} />
                        <Route path='movie/:id' element={<MoviePage/>} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
