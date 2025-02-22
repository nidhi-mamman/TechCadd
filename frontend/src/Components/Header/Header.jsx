import './Header.css'
import { FiPhone } from "react-icons/fi";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa6";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";



const Header = () => {
    return (
        <>
            <div className="header">
                <div className="contact-info">
                    <div className='reach'><MdOutlineLocationOn class="location-icon" size={24}/><p>Near Bus Stand,Ludhiana</p></div>
                    <div className="reach"><MdOutlineMailOutline size={24} /><p>techcadd@gmail.com</p></div>
                    <div className="reach"><FiPhone  size={22} /><p>+91-9888122667</p></div>
                </div>
                <div className="social-media">
                    <h3>Follow us on:</h3>
                    < FaFacebookF  size={18} />
                    <FaLinkedinIn size={20} />
                    <AiFillInstagram size={20} />
                    <FaYoutube size={20} />
                </div>

            </div>
        </>
    )
}

export default Header