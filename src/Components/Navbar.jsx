import { IoLocationSharp } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { CiDark, CiLight } from "react-icons/ci";

const Navbar = () => {

    return (
        <nav className="navbar grid grid-cols-3 fixed bg-[#ebf2f1] bg-opacity-75">
            {/* logo */}
            <div className="justify-center col-span-1 row-span-2">
                <a className="btn btn-ghost text-xl">fixNpark</a>
            </div>

            {/* add, mail and social icons */}
            <div className="grid grid-cols-4 px-4 py-1 col-span-2 bg-[#a7f2e4] text-white">
                <aside className="grid-flow-col justify-center gap-1 flex flex-row text-[#194759] font-semibold">
                    <IoLocationSharp className="text-xl text-[#4f7369]" />Address
                </aside>
                <aside className="grid-flow-col justify-center gap-1 flex flex-row text-[#194759] font-semibold">
                    <HiOutlineMail className="text-xl text-[#4f7369]" />Email
                </aside>
                <div className="flex flex-row justify-center gap-5 text-xl text-[#4f7369]">
                    <FaFacebookF />
                    <FaTwitter />
                    <FaLinkedinIn />
                </div>
            </div>

            {/* navbar links */}
            <div className="flex flex-row justify-around col-span-2 h-8">
                <ul className="menu menu-horizontal px-1 text-base text-[#4f7369] font-semibold">
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Parking</a></li>
                    <li><a>Services</a></li>
                </ul>
                    <button><a>Login</a></button>
            </div>
        </nav>
    );
};

export default Navbar;