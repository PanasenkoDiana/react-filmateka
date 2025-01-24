import { Outlet } from 'react-router-dom'
import { Footer } from "../Footer/Footer"
import { Header } from "../Header/Header"

import './Layout.css'

export function Layout() {
    return (
        <div className="layout">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}