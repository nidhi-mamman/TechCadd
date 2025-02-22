import "./Footer.css";
import logo from "../../assets/logo/logo.webp";
import { FaRegCopyright } from "react-icons/fa";
import line from '../../assets/icons/line.png'
const Footer = () => {
    return (
        <>
            <div className="footer-container">
                <div className="descript">
                    <img src={logo} alt="" />
                    <p>
                        We offer a wide range of courses in various subjects, from business
                        and technology.With 11 years of experience in IT,TechCADD offers practical
                        training, live projects, workshops, and certifications.
                    </p>
                    <p>
                        <span>Address : 773/2 1st Floor Sear Complex Bharat Nagar
                            chowk, opposite BSNL Exchange, Ludhiana, Punjab</span>
                    </p>
                    <p>
                        <span>Call : +91 9888122255 </span>
                    </p>
                    <p><span>Email : techcadd@gmail.com</span> </p>
                </div>
                <div className="courses">
                    <h1>Our Courses</h1>
                    <ul>
                        <li>C/C++ Language</li>
                        <li>MERN Stack Course</li>
                        <li>MEAN Stack Course </li>
                        <li>PHP Course</li>
                        <li>Web Designing</li>
                        <li>Digital Marketing Course</li>
                        <li>Graphic Designing Course</li>
                        <li>Industrial Training</li>
                    </ul>
                </div>
                <div className="branches">
                    <h1>Branches</h1>
                    <ul>
                        <li>Jalandhar</li>
                        <li>Phagwara</li>
                        <li>Ludhiana</li>
                        <li>Hoshiarpur</li>
                        <li>Maqsudan</li>
                        <li>Chandigarh</li>
                    </ul>
                </div>
                <div className="location">
                    <h1>Our Location</h1>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3423.396282071387!2d75.83691317420126!3d30.90354557735983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a83b9077325c7%3A0x6696dd8f709f9467!2sTechCadd%20computer%20education!5e0!3m2!1sen!2sin!4v1739861908115!5m2!1sen!2sin"
                        width="300"
                        height="260"
                        style={{ border: 0 ,marginTop:"1rem"
                        }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>
            <div className="copyright">
                <p><FaRegCopyright /><span>2016-2025 Techcadd.com.All rights reserved.</span></p>
                <p>
                    <span> Terms of Use</span>
                    <img src={line} alt="" width={20} height={20} />
                    <span>Privacy Policy</span>
                </p>
            </div>
        </>
    );
};

export default Footer;
