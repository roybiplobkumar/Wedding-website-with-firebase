
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import SideBar from "./SideBar";

const Dashboard = () => {
  return (

 

     <div className="flex">
             <div><SideBar ></SideBar></div>
             <div className="bg-[#F3F4FF] w-full" >
             <Navbar></Navbar>
             <Outlet></Outlet>
             </div>
     </div>
   
  );
};

export default Dashboard;