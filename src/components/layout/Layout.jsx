import { Outlet } from "react-router-dom"
import Header from "../header/Header"
import Footer from "../footer/Footer"

const Layout = () => {
    return(
        <>
        <Header/>
        <main className="pt-10">
            <Outlet/>
        </main>
        <Footer/>
        </>
    )
}
export default Layout