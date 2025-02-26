import "../CSS/Categories.css";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
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
import web from "../assets/blog/experience.svg";
import rocket from "../assets/blog/lifetime.svg";
import client from "../assets/blog/users.svg";
import experience from "../assets/blog/experience.svg";
import experts from "../assets/blog/satisfication.svg";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import team from "../assets/blog/team.svg";
import shrishyam from '../assets/banner/shrishyam.png'
import whitehorse from '../assets/banner/WhiteHorse.png'
import icutech from '../assets/banner/IAM.png'
import homedrop from '../assets/banner/homedrop.jpg'
import edutech from '../assets/banner/EDUTECH INFOSYS.png'
import cps from '../assets/banner/CPCS.png'
import aitech from '../assets/banner/aitech.webp'
import techcadd from '../assets/banner/techcadd.webp'
import protech from '../assets/banner/protech.webp'

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

      {/* <div className="techCadd">
        <div className="left-div">
          <img src={shape1} className="shape1" />
          <img src={shape2} className="shape2" />
          <img src={shape3} className="shape3" />
          <img src={mainimage} className="mainImage" alt="" />
        </div>
        <div className="right-div">
          <h6>TECHCADD COMPUTER EDUCATION</h6>
          <h1>
            Learn & Grow Your Skills From <span>TechCADD</span>
          </h1>
          <p>
            Learn and grow your skills with TechCADD, your trusted platform for
            education. Whether you&apos;re looking to upgrade your technical
            knowledge or acquire new professional skills, TechCADD provides{" "}
            <span>Best IT Training Institute in Ludhiana</span>. Empower your
            career with our expertly designed courses today!
          </p>
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
        </div>
      </div> */}

      {/* <div className="aboutus">
        <h6>ABOUT US</h6>
        <h1>TechCADD Computer Education</h1>
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
        <h5>We Are</h5>
        <h1>WHY CHOOSE US</h1>
        <p>
          TechCADD Computer Training Institute is dedicated to fostering skill
          development, practical learning, and personal growth. Our ambitious
          learning center has achieved numerous accomplishments since its
          founding, and we are continually striving to reach new heights.
        </p>
        <div className="whyUs-flex">
          <div className="whyUs-left">
            <h2>Why We Are #1 In The Industry?</h2>
            <p>
              Experience top-tier education at TechCADD, the best IT training
              institute in Jalandhar. We are dedicated to helping you sharpen
              your technical skills and explore new professional opportunities.
              Our expertly crafted courses are tailored to meet industry
              demands, providing hands-on experience and practical knowledge
              that set you apart in the competitive job market. With guidance
              from our seasoned instructors, you&apos;ll gain the confidence and
              expertise needed to excel in your career. Choose TechCADD today
              and take the first step towards a brighter, more successful future
              in IT.
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
            </p>
          </div>
          <div className="whyUs-right">
            <div className="features">
              <div className="div1">
                <img src={web} alt="" width={150} height={100} />
                <span>100+</span>
                <p>Countries served</p>
              </div>
              <div className="div2">
                <img src={rocket} alt="" width={150} height={100} />{" "}
                <span>100+</span>
                <p>Countries served</p>
              </div>
              <div className="div3">
                <img src={experts} alt="" width={150} height={100} />{" "}
                <span>100+</span>
                <p>Countries served</p>
              </div>
              <div className="div4">
                <img src={client} alt="" width={150} height={100} />{" "}
                <span>100+</span>
                <p>Countries served</p>
              </div>
              <div className="div5">
                <img src={team} alt="" width={150} height={100} />{" "}
                <span>100+</span>
                <p>Countries served</p>
              </div>
              <div className="div6">
                <img src={experience} alt="" width={150} height={100} />{" "}
                <span>100+</span>
                <p>Countries served</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="collaborators">
        <h5>OUR PARTNERS</h5>
        <h1>Collaborate with Our Associates</h1>
        <p>
          Team up with our associates to explore uncharted territories.
          Together, we&apos;ll blend our strengths and inspire groundbreaking
          innovations for a brighter future!
        </p>
        <div className="slider">
          <Swiper
            spaceBetween={30} 
            slidesPerView={3} 
            centeredSlides={false} 
            loop={true} 
            speed={1000}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide><img src={shrishyam} alt="" height={100} width={200} style={{display:"block"}} /></SwiperSlide>
            <SwiperSlide><img src={whitehorse} alt="" height={100} width={200}/></SwiperSlide>
            <SwiperSlide><img src={icutech} alt="" height={100} width={200}/></SwiperSlide>
            <SwiperSlide><img src={edutech} alt="" height={100} width={220}/></SwiperSlide>
            <SwiperSlide><img src={cps} alt="" height={100} width={200}/></SwiperSlide>
            <SwiperSlide><img src={homedrop} alt="" height={150} width={200}/></SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="brands">
        <h1>Our Brands</h1>
        <div className="brands-name">
          <img src={aitech} alt="" width={250} height={150}/>
          <img src={techcadd} alt="" width={250} height={150} />
          <img src={protech} alt="" width={250} height={150}/>
        </div>
      </div> */}
    </>
  );
};

export default Slider;
