import "../CSS/Breadcrumbs.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Ai from "../assets/blog/AI.svg";
import CS from "../assets/blog/cybersecurity.svg";
import Mern from "../assets/blog/MERN.svg";
import DS from "../assets/blog/DataScience.svg";
import DA from "../assets/blog/dataanalytics.svg";
import DM from "../assets/blog/digitalmarketing.svg";
import { IoMdArrowRoundForward } from "react-icons/io";
import shape1 from "../assets/blog/shape-36.png";
import shape2 from "../assets/blog/shape-37.png";
import shape3 from "../assets/blog/shape-02.png";
import mainimage from "../assets/blog/main.webp";
import { GiCheckMark } from "react-icons/gi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import shrishyam from "../assets/banner/shrishyam.png";
import whitehorse from "../assets/banner/WhiteHorse.png";
import icutech from "../assets/banner/IAM.png";
import homedrop from "../assets/banner/homedrop.jpg";
import edutech from "../assets/banner/EDUTECH INFOSYS.png";
import cps from "../assets/banner/CPCS.png";
import aitech from "../assets/banner/aitech.webp";
import techcadd from "../assets/banner/techcadd.webp";
import protech from "../assets/banner/protech.webp";
import AiCourse from "../assets/jal images/AiCourse.jpeg";
import cyber from "../assets/jal images/CYBER.webp";
import python from "../assets/jal images/ful stack.webp";
import python1 from "../assets/jal images/PYTHON (1).webp";
import digital from "../assets/jal images/digital market (1).webp";
import ethical from "../assets/jal images/HACKING.webp";
import analysis from "../assets/jal images/ANALYSIS.webp";
import java from "../assets/jal images/JAVA.webp";
import webdesigning from "../assets/jal images/web design.webp";
import mean from "../assets/jal images/mean stack.webp";
import mern from "../assets/jal images/mern stack.webp";
import { IoIosStar } from "react-icons/io";
import datascience from "../assets/jal images/DATA SCIENCE (O).webp";
import { FaArrowRight } from "react-icons/fa6";
import ceo from "../assets/blog/ceo.webp";
import shilpa from "../assets/blog/shilpa-mam.jpg";
import subodh from "../assets/blog/team3.webp";
import rama from "../assets/blog/team5.webp";
import hr from "../assets/blog/team6.webp";
import hod from "../assets/blog/team2.webp";
import leader from "../assets/blog/team1.webp";
import gurpinder from "../assets/blog/gurpindersir3.png";
import dots1 from "../assets/blog/shape-13.png";
import dashed from "../assets/blog/dashed.png";
import dots2 from "../assets/blog/shape-37.png";
import abstract from "../assets/blog/abstract.webp";
import S from "../assets/blog/s.cmnt.webp";
import K from "../assets/blog/k.cmnt.webp";
import quotes from "../assets/blog/quote.png";
import team from '../assets/banner/staff.png'
import CTA from '../Components/CTA/CTA'
import stroke from '../assets/blog/stroke.png'

const Slider = () => {
  return (
    <>
      <div className="category-section">
        <h6>Trending categories</h6>
        <h2>Top Category We Have</h2>
        <p>Check out the most demanding categories right now</p>
        <div className="categories">
          <div className="ai">
            <img src={Ai} alt="" width={60} height={60} />
            <h5>Artificial Intelligence</h5>
          </div>
          <div className="cs">
            <img src={CS} alt="" width={60} height={60} />
            <h5>Cyber Security</h5>
          </div>
          <div className="mern">
            <img src={Mern} alt="" width={70} height={70} />
            <h5>MERN Stack</h5>
          </div>
          <div className="ds">
            <img src={DS} alt="" width={60} height={60} />
            <h5>Data Science</h5>
          </div>
          <div className="da">
            <img src={DA} alt="" width={60} height={60} />
            <h5>Data Analytics</h5>
          </div>
          <div className="dm">
            <img src={DM} alt="" width={60} height={60} />
            <h5>
              Digital
              <br /> Marketing
            </h5>
          </div>
        </div>
        <p className="browse">
          Browse More <IoMdArrowRoundForward />
        </p>
      </div>

      <div className="techCadd">
        <div className="left-div">
          <div className="img-stack">
            <img src={shape1} className="shape shape1" />
            <img src={shape2} className="shape shape2" />
            <img src={shape3} className="shape shape3" />
            <img src={mainimage} className="mainImage" alt="" />
          </div>
        </div>
        <div className="right-div">
          <div className="right-div-content">
            <h6>TECHCADD COMPUTER EDUCATION</h6>
            <h2>
              Learn & Grow Your Skills From <span><p>TechCADD</p><img src={stroke} className="stroke" /></span>
            </h2>
            <p>
              Learn and grow your skills with TechCADD, your trusted platform for
              education. Whether you&apos;re looking to upgrade your technical
              knowledge or acquire new professional skills, TechCADD provides{" "}
              <span>Best IT Training Institute in Ludhiana</span>. Empower your
              career with our expertly designed courses today!
            </p>
            <ul className="benefits">
              <li>
                <GiCheckMark />
                <span> Expert Trainers</span>
              </li>
              <li>
                <GiCheckMark />
                <span> Expert Trainers</span>
              </li>
              <li>
                <GiCheckMark />
                <span> Expert Trainers</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="aboutus">
        <h6>ABOUT US</h6>
        <h2><span>TechCADD Computer Education </span><img src={stroke} className="stroke" /></h2>
        <div>
          <p>
            Techcadd Computer Training Institute is dedicated to fostering skill
            development, practical learning, and personal growth. Our ambitious
            learning center has achieved numerous accomplishments since its
            founding, and we are continually striving to reach new heights.
            Learning is now essential for career advancement, providing vital
            knowledge and skills that enhance your potential and transform your
            professional journey. While many individuals aspire to learn, not
            everyone knows where to begin or which path to follow. This is where
            Techcadd steps in.
          </p>
          <p>
            We specialize in delivering high-demand courses that ensure
            practical know-how, equipping students with the expertise needed to
            perform tasks, not just understand their theoretical concepts. Our
            mission is to be recognized as the leading Computer Training
            Institute by the close of 2024.
          </p>
          <p>
            With over a decade of IT industry experience, Techcadd has become
            known as the Best IT Training Institute in Ludhiana, Punjab. We
            offer hands-on training aligned with industry standards, covering
            essential skills through real-world projects, personalized doubt
            sessions, career counseling, live workshops, and more. Each student
            benefits from career-oriented case studies, practical tools, and
            certification opportunities that position them for success.
          </p>
          <p>
            {" "}
            Our courses span a wide range of in-demand subjects, including AI,
            Cyber Security, Web Designing, Web Development, Java, Python, HTML,
            CSS, Advanced Excel, Digital Marketing, Graphic Design, Accounting,
            Tally ERP 9, and more. At Techcadd, we empower our students with the
            confidence and practical skills to excel in every step of their
            careers.
          </p>
          <p>
            Join Best IT Training Institute in Jalandhar —the premier
            destination for professional IT training in Ludhiana, designed to
            launch and elevate your career with real-world expertise and
            unmatched industry relevance.
          </p>
        </div>
      </div>

      <div className="whyUs">
        <div className="whyUs-left">
          <div>
            <b>Hands-On Learning</b>
            <p>
              {" "}
              Build your confidence with practical training that includes
              real-world projects, live workshops, and industry-aligned case
              studies. Our hands-on approach ensures you&apos;re ready to tackle
              the challenges of your future job with practical knowledge and a
              strong skill set. best IT training institute in jalandhar
            </p>
          </div>
          <div>
            <b> Industry-Recognized Certifications</b>
            <p>
              Gain industry-recognized certifications that validate your skills
              and boost your credibility with prospective employers. Our
              certifications demonstrate your commitment to mastering in-demand
              skills, making you stand out as a highly qualified candidate.
            </p>
          </div>
          <div>
            <b>High Placement Success </b>
            <p>
              As the best computer training institute in Jalandhar,
              Techcadd&apos;s commitment to excellence has resulted in a strong
              track record of successful student placements and positive
              feedback from alumni. Our reputation for providing quality
              training helps our students gain trust with employers, increasing
              their chances of success.
            </p>
          </div>
        </div>
        <div className="whyUs-right">
          <h6>WHY US</h6>
          <h2>Why Choose TechCADD </h2>
          <h2>Computer Education?</h2>
          <img src={stroke} alt="" className="stroke" />
          <p>
            Experience top-tier education at TechCADD, the best IT training
            institute in Jalandhar. We are dedicated to helping you sharpen your
            technical skills and explore new professional opportunities. Our
            expertly crafted courses are tailored to meet industry demands,
            providing hands-on experience and practical knowledge that set you
            apart in the competitive job market. With guidance from our seasoned
            instructors, you&apos;ll gain the confidence and expertise needed to
            excel in your career. Choose TechCADD today and take the first step
            towards a brighter, more successful future in IT.
            <ul>
              <li>
                <GiCheckMark />
                Expert Trainers
              </li>
              <li>
                <GiCheckMark />
                Digital Learning
              </li>
              <li>
                <GiCheckMark />
                Ongoing Access
              </li>
            </ul>
            <p className="learnmore">
              Learn More <FaArrowRight />
            </p>
          </p>
        </div>
      </div>

      <div className="onlinecourses">
        <div className="animate-courses">
          <h5>POPULAR COURSES</h5>
          <h1>Courses We Offer</h1>
          <img src={stroke} className="stroke" />
        </div>
        <div className="popular-courses">
          <div className="row1">
            <div className="card">
              <img src={AiCourse} className="card-img-top" alt="..." />
              <div className="card-body">
                <h6 className="badge">CSE/IT</h6>
                <span>Artificial Intelligence Course</span>
                <p className="card-text">
                  Transform your future with Ethical Hacking course at
                  Jalandhar&apos;s top computer institute. Learn cutting-edge
                  skills to thrive today!
                </p>
              </div>
              <div className="overlay">
                <h6 className="badge">CSE/IT</h6>
                <span>Artificial Intelligence Course</span>
                <p className="rating">
                  <IoIosStar size={18} />
                  <IoIosStar size={18} />
                  <IoIosStar size={18} />
                  <IoIosStar size={18} />
                  <IoIosStar size={18} />
                </p>
                <p className="card-text">
                  Transform your future with Ethical Hacking course at
                  Jalandhar&apos;s top computer institute. Learn cutting-edge
                  skills to thrive today!
                </p>
                <p className="enrolnow">
                  Enroll Now <FaArrowRight />
                </p>
              </div>
            </div>
            <div className="card">
              <img src={cyber} className="card-img-top" alt="..." />
              <div className="card-body">
                <h6 className="badge">CSE/IT</h6>
                <span>Artificial Intelligence Course</span>
                <p className="card-text">
                  Transform your future with Ethical Hacking course at
                  Jalandhar&apos;s top computer institute. Learn cutting-edge
                  skills to thrive today!
                </p>
              </div>
              <div className="overlay">
                <h6 className="badge">CSE/IT</h6>
                <span>Artificial Intelligence Course</span>
                <p className="rating">
                  <IoIosStar size={18} />
                  <IoIosStar size={18} />
                  <IoIosStar size={18} />
                  <IoIosStar size={18} />
                  <IoIosStar size={18} />
                </p>
                <p className="card-text">
                  Transform your future with Ethical Hacking course at
                  Jalandhar&apos;s top computer institute. Learn cutting-edge
                  skills to thrive today!
                </p>
                <p className="enrolnow">
                  Enroll Now <FaArrowRight />
                </p>
              </div>
            </div>
            <div className="card">
              <img src={python} className="card-img-top" alt="..." />
              <div className="card-body">
                <h6 className="badge">CSE/IT</h6>
                <span>Artificial Intelligence Course</span>
                <p className="card-text">
                  Transform your future with Ethical Hacking course at
                  Jalandhar&apos;s top computer institute. Learn cutting-edge
                  skills to thrive today!
                </p>
              </div>
              <div className="overlay">
                <h6 className="badge">CSE/IT</h6>
                <span>Artificial Intelligence Course</span>
                <p className="rating">
                  <IoIosStar size={18} />
                  <IoIosStar size={18} />
                  <IoIosStar size={18} />
                  <IoIosStar size={18} />
                  <IoIosStar size={18} />
                </p>
                <p className="card-text">
                  Transform your future with Ethical Hacking course at
                  Jalandhar&apos;s top computer institute. Learn cutting-edge
                  skills to thrive today!
                </p>
                <p className="enrolnow">
                  Enroll Now <FaArrowRight />
                </p>
              </div>
            </div>
            <div className="card">
              <img src={digital} className="card-img-top" alt="..." />
              <div className="card-body">
                <h6 className="badge">CSE/IT</h6>
                <span>Artificial Intelligence Course</span>
                <p className="card-text">
                  Transform your future with Ethical Hacking course at
                  Jalandhar&apos;s top computer institute. Learn cutting-edge
                  skills to thrive today!
                </p>
              </div>
              <div className="overlay">
                <h6 className="badge">CSE/IT</h6>
                <span>Artificial Intelligence Course</span>
                <p className="rating">
                  <IoIosStar size={18} />
                  <IoIosStar size={18} />
                  <IoIosStar size={18} />
                  <IoIosStar size={18} />
                  <IoIosStar size={18} />
                </p>
                <p className="card-text">
                  Transform your future with Ethical Hacking course at
                  Jalandhar&apos;s top computer institute. Learn cutting-edge
                  skills to thrive today!
                </p>
                <p className="enrolnow">
                  Enroll Now <FaArrowRight />
                </p>
              </div>
            </div>
          </div>

          <div className="row2">
            <div className="card">
              <img src={ethical} className="card-img-top" alt="..." />
              <div className="card-body">
                <h6 className="badge">CSE/IT</h6>
                <span>Artificial Intelligence Course</span>
                <p className="card-text">
                  Transform your future with Ethical Hacking course at
                  Jalandhar&apos;s top computer institute. Learn cutting-edge
                  skills to thrive today!
                </p>
              </div>
              <div className="overlay">
                <h6 className="badge">CSE/IT</h6>
                <span>Artificial Intelligence Course</span>
                <p className="rating">
                  <IoIosStar size={18} />
                  <IoIosStar size={18} />
                  <IoIosStar size={18} />
                  <IoIosStar size={18} />
                  <IoIosStar size={18} />
                </p>
                <p className="card-text">
                  Transform your future with Ethical Hacking course at
                  Jalandhar&apos;s top computer institute. Learn cutting-edge
                  skills to thrive today!
                </p>
                <p className="enrolnow">
                  Enroll Now <FaArrowRight />
                </p>
              </div>
            </div>
            <div className="card">
              <img src={python1} className="card-img-top" alt="..." />
              <div className="card-body">
                <h6 className="badge">CSE/IT</h6>
                <span>Artificial Intelligence Course</span>
                <p className="card-text">
                  Transform your future with Ethical Hacking course at
                  Jalandhar&apos;s top computer institute. Learn cutting-edge
                  skills to thrive today!
                </p>
              </div>
              <div className="overlay">
                <h6 className="badge">CSE/IT</h6>
                <span>Artificial Intelligence Course</span>
                <p className="rating">
                  <IoIosStar size={18} />
                  <IoIosStar size={18} />
                  <IoIosStar size={18} />
                  <IoIosStar size={18} />
                  <IoIosStar size={18} />
                </p>
                <p className="card-text">
                  Transform your future with Ethical Hacking course at
                  Jalandhar&apos;s top computer institute. Learn cutting-edge
                  skills to thrive today!
                </p>
                <p className="enrolnow">
                  Enroll Now <FaArrowRight />
                </p>
              </div>
            </div>
            <div className="card">
              <img src={java} className="card-img-top" alt="..." />
              <div className="card-body">
                <h6 className="badge">CSE/IT</h6>
                <span>Artificial Intelligence Course</span>
                <p className="card-text">
                  Transform your future with Ethical Hacking course at
                  Jalandhar&apos;s top computer institute. Learn cutting-edge
                  skills to thrive today!
                </p>
              </div>
              <div className="overlay">
                <h6 className="badge">CSE/IT</h6>
                <span>Artificial Intelligence Course</span>
                <p className="rating">
                  <IoIosStar size={18} />
                  <IoIosStar size={18} />
                  <IoIosStar size={18} />
                  <IoIosStar size={18} />
                  <IoIosStar size={18} />
                </p>
                <p className="card-text">
                  Transform your future with Ethical Hacking course at
                  Jalandhar&apos;s top computer institute. Learn cutting-edge
                  skills to thrive today!
                </p>
                <p className="enrolnow">
                  Enroll Now <FaArrowRight />
                </p>
              </div>
            </div>
            <div className="card">
              <img src={analysis} className="card-img-top" alt="..." />
              <div className="card-body">
                <h6 className="badge">CSE/IT</h6>
                <span>Artificial Intelligence Course</span>
                <p className="card-text">
                  Transform your future with Ethical Hacking course at
                  Jalandhar&apos;s top computer institute. Learn cutting-edge
                  skills to thrive today!
                </p>
              </div>
              <div className="overlay">
                <h6 className="badge">CSE/IT</h6>
                <span>Artificial Intelligence Course</span>
                <p className="rating">
                  <IoIosStar size={18} />
                  <IoIosStar size={18} />
                  <IoIosStar size={18} />
                  <IoIosStar size={18} />
                  <IoIosStar size={18} />
                </p>
                <p className="card-text">
                  Transform your future with Ethical Hacking course at
                  Jalandhar&apos;s top computer institute. Learn cutting-edge
                  skills to thrive today!
                </p>
                <p className="enrolnow">
                  Enroll Now <FaArrowRight />
                </p>
              </div>
            </div>
          </div>

          <div className="row3">
            <div className="card">
              <img src={webdesigning} className="card-img-top" alt="..." />
              <div className="card-body">
                <h6 className="badge">CSE/IT</h6>
                <span>Artificial Intelligence Course</span>
                <p className="card-text">
                  Transform your future with Ethical Hacking course at
                  Jalandhar&apos;s top computer institute. Learn cutting-edge
                  skills to thrive today!
                </p>
              </div>
              <div className="overlay">
                <h6 className="badge">CSE/IT</h6>
                <span>Artificial Intelligence Course</span>
                <p className="rating">
                  <IoIosStar size={18} />
                  <IoIosStar size={18} />
                  <IoIosStar size={18} />
                  <IoIosStar size={18} />
                  <IoIosStar size={18} />
                </p>
                <p className="card-text">
                  Transform your future with Ethical Hacking course at
                  Jalandhar&apos;s top computer institute. Learn cutting-edge
                  skills to thrive today!
                </p>
                <p className="enrolnow">
                  Enroll Now <FaArrowRight />
                </p>
              </div>
            </div>
            <div className="card">
              <img src={mean} className="card-img-top" alt="..." />
              <div className="card-body">
                <h6 className="badge">CSE/IT</h6>
                <span>Artificial Intelligence Course</span>
                <p className="card-text">
                  Transform your future with Ethical Hacking course at
                  Jalandhar&apos;s top computer institute. Learn cutting-edge
                  skills to thrive today!
                </p>
              </div>
              <div className="overlay">
                <h6 className="badge">CSE/IT</h6>
                <span>Artificial Intelligence Course</span>
                <p className="rating">
                  <IoIosStar size={18} />
                  <IoIosStar size={18} />
                  <IoIosStar size={18} />
                  <IoIosStar size={18} />
                  <IoIosStar size={18} />
                </p>
                <p className="card-text">
                  Transform your future with Ethical Hacking course at
                  Jalandhar&apos;s top computer institute. Learn cutting-edge
                  skills to thrive today!
                </p>
                <p className="enrolnow">
                  Enroll Now <FaArrowRight />
                </p>
              </div>
            </div>
            <div className="card">
              <img src={datascience} className="card-img-top" alt="..." />
              <div className="card-body">
                <h6 className="badge">CSE/IT</h6>
                <span>Artificial Intelligence Course</span>
                <p className="card-text">
                  Transform your future with Ethical Hacking course at
                  Jalandhar&apos;s top computer institute. Learn cutting-edge
                  skills to thrive today!
                </p>
              </div>
              <div className="overlay">
                <h6 className="badge">CSE/IT</h6>
                <span>Artificial Intelligence Course</span>
                <p className="rating">
                  <IoIosStar size={18} />
                  <IoIosStar size={18} />
                  <IoIosStar size={18} />
                  <IoIosStar size={18} />
                  <IoIosStar size={18} />
                </p>
                <p className="card-text">
                  Transform your future with Ethical Hacking course at
                  Jalandhar&apos;s top computer institute. Learn cutting-edge
                  skills to thrive today!
                </p>
                <p className="enrolnow">
                  Enroll Now <FaArrowRight />
                </p>
              </div>
            </div>
            <div className="card">
              <img src={mern} className="card-img-top" alt="..." />
              <div className="card-body">
                <h6 className="badge">CSE/IT</h6>
                <span>Artificial Intelligence Course</span>
                <p className="card-text">
                  Transform your future with Ethical Hacking course at
                  Jalandhar&apos;s top computer institute. Learn cutting-edge
                  skills to thrive today!
                </p>
              </div>
              <div className="overlay">
                <h6 className="badge">CSE/IT</h6>
                <span>Artificial Intelligence Course</span>
                <p className="rating">
                  <IoIosStar size={18} />
                  <IoIosStar size={18} />
                  <IoIosStar size={18} />
                  <IoIosStar size={18} />
                  <IoIosStar size={18} />
                </p>
                <p className="card-text">
                  Transform your future with Ethical Hacking course at
                  Jalandhar&apos;s top computer institute. Learn cutting-edge
                  skills to thrive today!
                </p>
                <p className="enrolnow">
                  Enroll Now <FaArrowRight />
                </p>
              </div>
            </div>
          </div>
        </div>
        <p className="learnmore">
          Learn More <FaArrowRight />
        </p>
        <img src={dots1} className="dots1" />
        <img src={dashed} className="dashed" />
        <img src={dots2} className="dots2" />
        <img src={abstract} className="abstract" />
        <div className="quarter">
          <div className="enrolled">
            <span>1,800+</span>
            <p>Students Enrolled</p>
          </div>
          <div className="branchess">
            <span>6+</span>
            <p>Branches</p>
          </div>
          <div className="enrolled1">
            <span>65+</span>
            <p>Top Instructors</p>
          </div>
          <div className="branchess1">
            <span>99.99%</span>
            <p>Satisfaction Rate</p>
          </div>
        </div>
      </div>

      <div className="reflection">
        <div className="reflection-content">
          <h1>Our Students Reflection</h1>
          <img src={stroke} className='stroke' alt="" />
          <p>
            <b>&quot;Our Student Reflections&quot;</b> captures the distinctive
            journeys of each student, celebrating their individual insights,
            challenges, and remarkable achievements.
          </p>
          <p className="learnmore">
            View All <FaArrowRight />
          </p>
        </div>

        <div className="slider">
          <Swiper
            spaceBetween={40}
            slidesPerView={2}
            loop={true}
            modules={[Autoplay]}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="review">
                <div className="imglogo">
                  <img
                    src={K}
                    alt=""
                    className="namelogo"
                    width={60}
                    height={60}
                  />
                </div>
                <div className="quote">
                  <img src={quotes} width={20} height={20} alt="" />
                </div>
                <p className="slider-content">
                  TechCADD is an outstanding institute for Full Stack training!
                  The instructors are knowledgeable and supportive, and the
                  hands-on projects truly enhance learning. Highly recommend!
                </p>
                <p style={{ color: "#ffb703" }}><IoIosStar size={18} /><IoIosStar size={18} /><IoIosStar size={18} /><IoIosStar size={18} /><IoIosStar size={18} /></p>
                <b style={{ fontSize: '12px' }}>Karan</b>
                <p style={{ color: "grey" }}>Student</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="review">
                <div className="imglogo">
                  <img
                    src={S}
                    alt=""
                    className="namelogo"
                    width={60}
                    height={60}
                  />
                </div>
                <div className="quote">
                  <img src={quotes} width={20} height={20} alt="" />
                </div>
                <p className="slider-content">
                  TechCADD is an outstanding institute for Full Stack training!
                  The instructors are knowledgeable and supportive, and the
                  hands-on projects truly enhance learning. Highly recommend!
                </p>
                <p style={{ color: "#ffb703" }}><IoIosStar size={18} /><IoIosStar size={18} /><IoIosStar size={18} /><IoIosStar size={18} /><IoIosStar size={18} /></p>
                <b style={{ fontSize: '12px' }}>Karan</b>
                <p style={{ color: "grey" }}>Student</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="review">
                <div className="imglogo">
                  <img
                    src={K}
                    alt=""
                    className="namelogo"
                    width={60}
                    height={60}
                  />
                </div>
                <div className="quote">
                  <img src={quotes} width={20} height={20} alt="" />
                </div>
                <p className="slider-content">
                  TechCADD is an outstanding institute for Full Stack training!
                  The instructors are knowledgeable and supportive, and the
                  hands-on projects truly enhance learning. Highly recommend!
                </p>
                <p style={{ color: "#ffb703" }}><IoIosStar size={18} /><IoIosStar size={18} /><IoIosStar size={18} /><IoIosStar size={18} /><IoIosStar size={18} /></p>
                <b style={{ fontSize: '12px' }}>Karan</b>
                <p style={{ color: "grey" }}>Student</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="review">
                <div className="imglogo">
                  <img
                    src={S}
                    alt=""
                    className="namelogo"
                    width={60}
                    height={60}
                  />
                </div>
                <div className="quote">
                  <img src={quotes} width={20} height={20} alt="" />
                </div>
                <p className="slider-content">
                  TechCADD is an outstanding institute for Full Stack training!
                  The instructors are knowledgeable and supportive, and the
                  hands-on projects truly enhance learning. Highly recommend!
                </p>
                <p style={{ color: "#ffb703" }}><IoIosStar size={18} /><IoIosStar size={18} /><IoIosStar size={18} /><IoIosStar size={18} /><IoIosStar size={18} /></p>
                <b style={{ fontSize: '12px' }}>Karan</b>
                <p style={{ color: "grey" }}>Student</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="reflection-mobile">
        <div className="reflection-content-mobile">
          <h1>Our Students Reflection</h1>
          <img src={stroke} alt="" className="stroke" />
          <p>
            <b>&quot;Our Student Reflections&quot;</b> captures the distinctive
            journeys of each student, celebrating their individual insights,
            challenges, and remarkable achievements.
          </p>
          <p className="learnmore">
            View All <FaArrowRight />
          </p>
        </div>

        <div className="slider-mobile">
          <Swiper
            spaceBetween={40}
            slidesPerView={1}
            loop={true}
            modules={[Autoplay]}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="review">
                <div className="imglogo">
                  <img
                    src={K}
                    alt=""
                    className="namelogo"
                    width={60}
                    height={60}
                  />
                </div>
                <div className="quote">
                  <img src={quotes} width={20} height={20} alt="" />
                </div>
                <p className="slider-content">
                  TechCADD is an outstanding institute for Full Stack training!
                  The instructors are knowledgeable and supportive, and the
                  hands-on projects truly enhance learning. Highly recommend!
                </p>
                <p style={{ color: "#ffb703" }}><IoIosStar size={18} /><IoIosStar size={18} /><IoIosStar size={18} /><IoIosStar size={18} /><IoIosStar size={18} /></p>
                <b style={{ fontSize: '12px' }}>Karan</b>
                <p style={{ color: "grey" }}>Student</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="review">
                <div className="imglogo">
                  <img
                    src={S}
                    alt=""
                    className="namelogo"
                    width={60}
                    height={60}
                  />
                </div>
                <div className="quote">
                  <img src={quotes} width={20} height={20} alt="" />
                </div>
                <p className="slider-content">
                  TechCADD is an outstanding institute for Full Stack training!
                  The instructors are knowledgeable and supportive, and the
                  hands-on projects truly enhance learning. Highly recommend!
                </p>
                <p style={{ color: "#ffb703" }}><IoIosStar size={18} /><IoIosStar size={18} /><IoIosStar size={18} /><IoIosStar size={18} /><IoIosStar size={18} /></p>
                <b style={{ fontSize: '12px' }}>Karan</b>
                <p style={{ color: "grey" }}>Student</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="review">
                <div className="imglogo">
                  <img
                    src={K}
                    alt=""
                    className="namelogo"
                    width={60}
                    height={60}
                  />
                </div>
                <div className="quote">
                  <img src={quotes} width={20} height={20} alt="" />
                </div>
                <p className="slider-content">
                  TechCADD is an outstanding institute for Full Stack training!
                  The instructors are knowledgeable and supportive, and the
                  hands-on projects truly enhance learning. Highly recommend!
                </p>
                <p style={{ color: "#ffb703" }}><IoIosStar size={18} /><IoIosStar size={18} /><IoIosStar size={18} /><IoIosStar size={18} /><IoIosStar size={18} /></p>
                <b style={{ fontSize: '12px' }}>Karan</b>
                <p style={{ color: "grey" }}>Student</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="review">
                <div className="imglogo">
                  <img
                    src={S}
                    alt=""
                    className="namelogo"
                    width={60}
                    height={60}
                  />
                </div>
                <div className="quote">
                  <img src={quotes} width={20} height={20} alt="" />
                </div>
                <p className="slider-content">
                  TechCADD is an outstanding institute for Full Stack training!
                  The instructors are knowledgeable and supportive, and the
                  hands-on projects truly enhance learning. Highly recommend!
                </p>
                <p style={{ color: "#ffb703" }}><IoIosStar size={18} /><IoIosStar size={18} /><IoIosStar size={18} /><IoIosStar size={18} /><IoIosStar size={18} /></p>
                <b style={{ fontSize: '12px' }}>Karan</b>
                <p style={{ color: "grey" }}>Student</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <CTA />

      <div className="team">
        <h1>Our Team</h1>
        <img src={stroke} className='stroke' alt="" />
        <img src={team} className="staffpic" alt="" />
      </div>

      <div className="collaborators">
        <div className="collab-left">
          <h6>OUR PARTNERS</h6>
          <h2>Collaborate with Our Associates</h2>
          <img src={stroke} className="stroke" alt="" />
          <p>
            Team up with our associates to explore uncharted territories.
            Together, we&apos;ll blend our strengths and inspire groundbreaking
            innovations for a brighter future!
          </p>
        </div>
        <div className="collab-right">
          <img src={shrishyam} height={100} width={150} />
          <img src={whitehorse} height={50} width={120} />
          <img src={icutech} height={50} width={120} />
          <img src={edutech} height={50} width={120} />
          <img src={cps} height={100} width={120} />
          <img src={homedrop} height={150} width={150} />
        </div>
      </div>

      <div className="brands">
        <h1>Our Brands</h1>
        <img src={stroke} className='stroke' alt="" />
        <div className="brands-name">
          <img src={aitech} alt="" />
          <img src={techcadd} alt="" />
          <img src={protech} alt="" />
        </div>
      </div>

      <div className="management">
        <h2>Our Management</h2>
        <img src={stroke} className="stroke" alt="" />
        <div className="names">
          <div>
            <div className="ceo">
              <img src={ceo} alt="" height={150} width={150} />
            </div>
            <p className="name">Mr.Gourav Gupta</p>
            <p className="designation">CEO & Founder</p>
          </div>
          <div>
            <div className="ceo">
              <img src={shilpa} alt="" height={150} width={150} />
            </div>
            <p className="name">Mr.Gourav Gupta</p>
            <p className="designation">CEO & Founder</p>
          </div>
          <div>
            <div className="ceo">
              <img src={subodh} alt="" height={150} width={150} />
            </div>
            <p className="name">Mr.Gourav Gupta</p>
            <p className="designation">CEO & Founder</p>
          </div>
          <div>
            <div className="ceo">
              <img src={rama} alt="" height={150} width={150} />
            </div>
            <p className="name">Mr.Gourav Gupta</p>
            <p className="designation">CEO & Founder</p>
          </div>
          <div>
            <div className="ceo">
              <img src={hr} alt="" height={150} width={150} />
            </div>
            <p className="name">Mr.Gourav Gupta</p>
            <p className="designation">CEO & Founder</p>
          </div>
          <div>
            <div className="ceo">
              <img src={hod} alt="" height={150} width={150} />
            </div>
            <p className="name">Mr.Gourav Gupta</p>
            <p className="designation">CEO & Founder</p>
          </div>
          <div>
            <div className="ceo">
              <img src={leader} alt="" height={150} width={150} />
            </div>
            <p className="name">Mr.Gourav Gupta</p>
            <p className="designation">CEO & Founder</p>
          </div>
          <div>
            <div className="ceo">
              <img src={gurpinder} alt="" height={150} width={150} />
            </div>
            <p className="name">Mr.Gourav Gupta</p>
            <p className="designation">CEO & Founder</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
