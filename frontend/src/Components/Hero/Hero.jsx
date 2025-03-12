import "./Hero.css";
import growth_arrow from "../../assets/banner/banner_shape01.png";
import girl from "../../assets/banner/banner_img.png";
import crossShape from "../../assets/banner/banner_shape02.png";
import dots from "../../assets/banner/bg_dots.svg";
import yellow from "../../assets/banner/banner_shape02.svg";
import curl from "../../assets/banner/banner_shape01.svg";
import { FaArrowRight } from "react-icons/fa6";
import { IoPlay } from "react-icons/io5";
import carousel from '../../assets/blog/students.png'
import { GrGroup } from "react-icons/gr"

const Hero = () => {
    
    return (
        <>
            <div className="hero-section">
                <div className="left-section">
                    <img
                        src={curl}
                        className="curl"
                        alt="curl"
                    />
                    <h3 className="hero-txt">
                        Never Stop
                        <span className="highlight"> Learning</span>
                        <br />
                        Life <b>Never Stop</b>
                        <br />
                        Teaching
                    </h3>
                    <p className="sub-txt">
                        Every teaching and learning journey is unique 
                        <br />
                        We&apos;ll help guide your way.
                    </p>
                    <div className="demo-video">
                        <p className="checkCourses">
                            <span>Check our Courses </span>
                            <span>
                                <FaArrowRight className="rightArrow" />
                            </span>
                        </p>
                        <div className="play-area">
                            <div className="playbtn">
                                <IoPlay size={24} />
                            </div>
                            <p className="sub-txt2">Watch <br/> Video</p>
                        </div>
                    </div>
                </div>
                <div className="right-section ">
                    <div className="students">
                        <p>500+<span>Enrolled students</span></p>
                        <img src={carousel} className="carousel" alt="students" width={150} height={40} />
                    </div>
                    <img
                        src={yellow}
                        className="yellow-arrow"
                        alt="yellow arrow"
                        width={100}
                        height={100}
                    />
                    <img
                        src={growth_arrow}
                        className="bg-arrow"
                        alt="arrow"
                    />
                    <img
                        src={crossShape}
                        className="cross-shape"
                        alt="crosses"
                    />
                    <img
                        src={girl}
                        className="banner-img"
                        alt="girl"
                    />
                    <img
                        src={dots}
                        alt="dots shape"
                        className="dots"
                    />
                    <div className="group">
                        <div className="users"><GrGroup size={24} /></div>
                        <p>30+ <span>Instructors</span></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;
