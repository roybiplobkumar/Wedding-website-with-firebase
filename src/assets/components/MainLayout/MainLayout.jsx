import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Home/Navbar/Navbar";
import Footer from "../Pages/Home/Footer/Footer";


const MainLayout = () => {
    return (
        <div className=" mx-auto font-raleway">
           <Navbar></Navbar>
           <div className=" w-full md:w-[90%] mx-auto">
           <Outlet>
            </Outlet> 
           </div>
          
            <Footer></Footer>
            
        </div>
    );
};

export default MainLayout;