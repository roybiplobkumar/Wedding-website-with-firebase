import { Link, NavLink } from "react-router-dom";
import { PiStudentBold } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { FaBlog, FaHome, FaMicroblog, FaServicestack } from "react-icons/fa";
import { FcGallery, FcServices } from "react-icons/fc";

const SideBar = () => {
  return (
    <div className="bg-[#0F172A] w-[240px] h-full text-[#E2E8F0] text-sm">
      {/* Logo Section */}
      <Link to="/">
        <div className="flex p-6 items-center gap-3 h-[54px] mb-5">
          <img
            className="bg-[#FB7D5B] rounded-md h-[30px] w-8"
            src="couple.png"
            alt="couple"
          />
          <p className="uppercase">Cemera Wedding</p>
        </div>
      </Link>

      {/* Navigation Links */}
      <div className="flex justify-end">
        <NavLink
          to="/dashboard/add-gallery"
          className={({ isActive }) =>
            isActive
              ? "flex items-center gap-5 py-2 px-4 text-[#3B82F6] font-medium hover:bg-[#F3F4FF] hover:rounded-2xl w-[300px] my-4"
              : "flex items-center gap-5 py-2 px-4 hover:text-[#4D44B5] hover:bg-[#F3F4FF] hover:rounded-2xl w-[300px] my-4"
          }
        >
          <FcGallery className="w-[20px] h-[20px]" />  
          <span>Add Gallery</span>
        </NavLink>
      </div>

      <div className="flex justify-end">
        <NavLink
          to="/dashboard/add-service"
          className={({ isActive }) =>
            isActive
              ? "flex items-center gap-5 py-2 px-4 text-[#3B82F6] font-medium hover:bg-[#F3F4FF] hover:rounded-2xl w-[300px] my-4"
              : "flex items-center gap-5 py-2 px-4 hover:text-[#4D44B5] hover:bg-[#F3F4FF] hover:rounded-2xl w-[300px] my-4"
          }
        >
          <FcServices className="w-[20px] h-[20px]" />
          <span>Add Service</span>
        </NavLink>
      </div>

      <div className="flex justify-end">
        <NavLink
          to="/dashboard/add-blog"
          className={({ isActive }) =>
            isActive
              ? "flex items-center gap-5 py-2 px-4 text-[#3B82F6] font-medium hover:bg-[#F3F4FF] hover:rounded-2xl w-[300px] my-4"
              : "flex items-center gap-5 py-2 px-4 hover:text-[#4D44B5] hover:bg-[#F3F4FF] hover:rounded-2xl w-[300px] my-4"
          }
        >
          <FaBlog className="w-[20px] h-[20px]" />
          <span>Add Blog</span>
        </NavLink>
      </div>

      <div className="flex justify-end">
        <NavLink
          to="/dashboard/update-services"
          className={({ isActive }) =>
            isActive
              ? "flex items-center gap-5 py-2 px-4 text-[#3B82F6] font-medium hover:bg-[#F3F4FF] hover:rounded-2xl w-[300px] my-4"
              : "flex items-center gap-5 py-2 px-4 hover:text-[#4D44B5] hover:bg-[#F3F4FF] hover:rounded-2xl w-[300px] my-4"
          }
        >
          <FaServicestack className="w-[20px] h-[20px]" />
          <span>Update Services</span>
        </NavLink>
      </div>

      <div className="flex justify-end">
        <NavLink
          to="/dashboard/update-blog"
          className={({ isActive }) =>
            isActive
              ? "flex items-center gap-5 py-2 px-4 text-[#3B82F6] font-medium hover:bg-[#F3F4FF] hover:rounded-2xl w-[300px] my-4"
              : "flex items-center gap-5 py-2 px-4 hover:text-[#4D44B5] hover:bg-[#F3F4FF] hover:rounded-2xl w-[300px] my-4"
          }
        >
          <FaMicroblog className="w-[20px] h-[20px]" />
          <span>Update Blog</span>
        </NavLink>
      </div>
    </div>
  );
};

export default SideBar;
