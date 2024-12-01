import { IoLocationSharp } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
<<<<<<< HEAD
import { Link, NavLink } from "react-router-dom";
=======
>>>>>>> 0a74985e4ec7bf0766643fcfc7a9dae61456b549

const Navbar = () => {

    return (
<<<<<<< HEAD
        <nav className="navbar grid grid-cols-3 bg-[#d7dde4] z-10">
=======
        <nav className="navbar grid grid-cols-3 fixed bg-[#ebf2f1] bg-opacity-75 z-10">
>>>>>>> 0a74985e4ec7bf0766643fcfc7a9dae61456b549
            {/* logo */}
            <div className="justify-center col-span-1 row-span-2">
                <a className="btn btn-ghost text-5xl text-primary font-potta-one font-bold">fixNpark</a>
            </div>

            {/* add, mail and social icons */}
            <div className="grid grid-cols-5 px-4 py-1 col-span-2 bg-white text-neutral text-xs">
                <aside className="grid-flow-col col-span-2  justify-center gap-1 flex flex-row font-semibold">
                    <IoLocationSharp className="text-lg text-secondary" />95, South-Kamlapur, Motijheel, Dhaka, BD</aside>
                <aside className="grid-flow-col col-span-2  justify-center gap-1 flex flex-row font-semibold">
                    <HiOutlineMail className="text-lg text-secondary" />support@fixNpark.com</aside>
                <div className="flex flex-row justify-center gap-5 text-xl text-secondary">
                    <Link to="https://www.facebook.com/"><FaFacebookF /></Link>
                    <Link to="https://x.com/?lang=en"><FaTwitter /></Link>
                    <Link to="https://www.linkedin.com/"><FaLinkedinIn /></Link>
                </div>
            </div>

            {/* navbar links */}
<<<<<<< HEAD
            <div className="flex flex-row justify-around col-span-2 h-10 text-primary">
                <ul className="menu menu-horizontal px-1 text-primary gap-4 mt-2 font-semibold">
                    <li><NavLink to={"/"}>Home</NavLink></li>
                    <li><NavLink to="">Parking</NavLink></li>
                    <li><NavLink to="">Services</NavLink></li>
                    <li><NavLink to="">About</NavLink></li>
=======
            <div className="flex flex-row justify-around col-span-2 h-10">
                <ul className="menu menu-horizontal px-1 text-base text-[#4f7369] font-semibold">
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Parking</a></li>
                    <li><a>Services</a></li>
>>>>>>> 0a74985e4ec7bf0766643fcfc7a9dae61456b549
                </ul>
                <NavLink to="" className='btn btn-sm'>Login</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;