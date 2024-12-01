import { IoLocationSharp } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

    return (
        <nav className="navbar grid grid-cols-3 bg-[#d7dde4] z-10">
            {/* logo */}
            <div className="justify-center col-span-1 row-span-2">
                <NavLink className="btn btn-ghost text-5xl text-primary font-potta-one">fixNpark</NavLink>
            </div>

            {/* add, mail and social icons */}
            <div className="grid grid-cols-5 px-4 py-1 col-span-2 bg-white text-neutral text-xs">
                <aside className="grid-flow-col col-span-2  justify-center gap-1 flex flex-row font-semibold">
                    <IoLocationSharp className="text-lg text-gray-600" />95, South-Kamlapur, Motijheel, Dhaka, BD</aside>
                <aside className="grid-flow-col col-span-2  justify-center gap-1 flex flex-row font-semibold">
                    <HiOutlineMail className="text-lg text-gray-600" />support@fixNpark.com</aside>
                <div className="flex flex-row justify-center gap-5 text-xl text-gray-600">
                    <Link to="https://www.facebook.com/"><FaFacebookF /></Link>
                    <Link to="https://x.com/?lang=en"><FaTwitter /></Link>
                    <Link to="https://www.linkedin.com/"><FaLinkedinIn /></Link>
                </div>
            </div>

            {/* navbar links */}
            <div className="flex flex-row justify-around col-span-2 h-10 text-primary">
                <ul className="menu menu-horizontal px-1 text-secondary gap-4 mt-2 font-semibold">
                    <li><NavLink to={"/"}>Home</NavLink></li>
                    <li><NavLink to="">Parking</NavLink></li>
                    <li><NavLink to="">Services</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                </ul>
                <NavLink to="" className='btn btn-sm rounded-full uppercase'>Account</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;