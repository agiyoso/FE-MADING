import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import './homepage.css'

const homepage = () => {
    return ( 
        <div className="homepage" >
            <div className="sticky-top">
                <Navbar/>
            </div>

            <div className="">
                <Outlet/>
            </div>

            <div className="mt-5">
                <Footer/>
            </div>
        </div>
     );
}
 
export default homepage;