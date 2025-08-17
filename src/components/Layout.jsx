import Header from "./Header";
import Footer from "../pages/Footer"
import { Outlet } from "react-router-dom";

export default function Layout(){
    return(
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}