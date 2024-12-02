import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-slate-700 text-white py-8 px-6">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-4">
                {/* Logo and Description */}
                <div>
                    <h2 className="text-2xl font-potta-one mb-4 text-accent text-center">fixNpark</h2>
                    <p className="text-sm text-gray-400">
                        Your trusted partner for convenient parking and vehicle maintenance services, simplifying urban commutes.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="text-center">
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="/about" className="text-gray-400 hover:text-white">Home</a>
                        </li>
                        <li>
                            <a href="/services" className="text-gray-400 hover:text-white">Services</a>
                        </li>
                        <li>
                            <a href="/contact" className="text-gray-400 hover:text-white">About</a>
                        </li>
                    </ul>
                </div>

                {/* Contact Information */}
                <div className="text-center">
                    <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                    <ul className="space-y-2">
                        <li className="text-gray-400">Phone: +123 456 7890</li>
                        <li className="text-gray-400">Email: support@fixnpark.com</li>
                        <li className="text-gray-400">Address: 95, South-Kamlapur, Motijheel, Dhaka, BD</li>
                    </ul>
                </div>

                {/* Social Media */}
                <div className="text-center">
                    <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                        <div className="flex flex-row justify-center gap-5 text-xl text-gray-400">
                            <Link to="https://www.facebook.com/"><FaFacebookF /></Link>
                            <Link to="https://x.com/?lang=en"><FaTwitter /></Link>
                            <Link to="https://www.linkedin.com/"><FaLinkedinIn /></Link>
                    </div>
                </div>
            </div>
            <hr />
            <div className="border-t border-gray-700 mt-2 pt-4 text-center text-white text-sm">
                &copy; {new Date().getFullYear()} fixNpark. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
