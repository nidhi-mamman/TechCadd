import './Navbar.css'
import logo from '../../assets/logo/logo.webp'
import menu from '../../assets/icons/categories.png'
import profile from '../../assets/icons/user.png'
import { RxCross1 } from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setisMenuOpen] = useState(false)
    return (
        <>
            <div className="navbar">
                <div className="logo">
                    <Link to='/'><img src={logo} alt="logo" /></Link>
                </div>
                <div className="nav-items">
                    <ul className="items">
                        <li className="item1"><Link to='/'>Home</Link></li>
                        <li className="item2"><Link to='/about'>About</Link></li>
                        <li className="item3"><Link to='/contact'>Contact</Link></li>
                        <li className="item4"><Link to='/courses'>Courses</Link></li>
                        <li className="item5"><Link to='/training'>Training</Link></li>
                        <li className="item5"><Link to='/login'>Login</Link></li>
                    </ul>
                </div>
                <div className="demo-area">
                    <button className='nav-btns'>Get a Job</button>
                    <button className='nav-btns'>Book Free Demo</button>
                </div>
                <div className="mobile-items">
                    <img src={profile} alt="profile" width={35} height={35} />
                    <img src={menu} alt="menu" width={40} height={40} onClick={() => setisMenuOpen(!isMenuOpen)} />
                </div>
            </div>
            <div className={`mobile-menu ${isMenuOpen ? 'show' : 'hide'}`}>
                <ul>
                    <li className='mobile-item'>
                        <div className="logo-cross">
                            <Link to='/'><img src={logo} alt="" /></Link>
                            <RxCross1 size={24} style={{ color: "#5751e1", marginRight: "1.5rem" }} onClick={() => setisMenuOpen(!isMenuOpen)} />
                        </div>

                    </li>
                    <li className="mobile-item"><Link to='/'>Home</Link></li>
                    <li className="mobile-item"><Link to='/about'>About</Link></li>
                    <li className="mobile-item"><Link to='/contact'>Contact</Link></li>
                    <li className="mobile-item"><Link to='/courses'>Courses</Link></li>
                    <li className="mobile-item"><Link to='/training'>Training</Link></li>
                    <li className="mobile-item-social-media">
                        <div className="squares">
                            < FaFacebookF size={18} style={{ color: "#5751e1" }} />
                        </div>
                        <div className="squares">
                            < FaLinkedinIn size={20} style={{ color: "#5751e1" }} />
                        </div>
                        <div className="squares">
                            < AiFillInstagram size={20} style={{ color: "#5751e1" }} />
                        </div>
                        <div className="squares">
                            < FaYoutube size={20} style={{ color: "#5751e1" }} />
                        </div>
                    </li>
                </ul>
            </div>

        </>
    )
}

export default Navbar