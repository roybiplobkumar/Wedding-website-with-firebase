import { HiDotsHorizontal } from "react-icons/hi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
   <div className="h-[48px] m-3">
    <div className="flex justify-between items-center">
      <h3 className="text-[24px] text-[#0F172A]">Dashboard</h3>
      <div className="flex items-center gap-2">
        <button className="px-[24px] py-[10px] bg-[#2563EB] text-white rounded-md text-sm"><Link>Add Course</Link></button>
        <HiDotsHorizontal/>
      </div>
    </div>
   </div>
  );
};

export default Navbar;