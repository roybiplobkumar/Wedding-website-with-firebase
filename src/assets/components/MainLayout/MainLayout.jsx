import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Home/Navbar/Navbar";
import Footer from "../Pages/Home/Footer/Footer";


const MainLayout = () => {
    return (
        <div className=" mx-auto">
           <Navbar></Navbar>
           <div className="w-[90%] mx-auto">
           <Outlet>
            </Outlet> 
           </div>
          
            <Footer></Footer>
            
        </div>
    );
};

export default MainLayout;