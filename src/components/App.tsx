import { Header } from "./Header/Header"
import { Main} from './Main/Main'
import { Footer } from "./Footer/Footer"
import { BrowserRouter, Routes, Route } from "react-router-dom"

export function App() {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Main />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}
