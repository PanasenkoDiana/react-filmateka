import { Outlet } from 'react-router-dom'
import { Footer } from "../../shared/Footer/Footer"
import { Header } from "../../shared/Header/Header"

import './Layout.css'

export function Layout() {
    return (
        <div className="layout">
            <Header/>
            <div className="mainContent">
                <Outlet/>
            </div>
            <Footer/>
        </div>
    )
}