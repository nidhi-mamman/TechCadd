import "../CSS/About.css";
import Banner from "../Pages/Banner";
import about1 from "../assets/blog/about1.webp";
import about2 from "../assets/blog/about2.webp";
import about3 from "../assets/blog/about3.webp";
import about4 from "../assets/blog/bout4.webp";
import mission from "../assets/blog/target.png";
import vision from "../assets/blog/binoculars.png";
import abstract2 from "../assets/blog/shape-33.png";
import dots21 from "../assets/blog/shape-13.png";
import dots22 from "../assets/blog/shape-37.png";
import man from "../assets/icons/man.svg";
import presentation from "../assets/icons/presentation.svg";
import reading from "../assets/icons/reading.svg";
import satisfaction from "../assets/icons/satisfaction.svg";
import square from "../assets/courses/h3_course_shape03.svg";
import stroke from "../assets/blog/stroke.png";
import why1 from "../assets/jal images/why-choose-01.webp";
import why2 from "../assets/jal images/why-choose-02.webp";
import why3 from "../assets/jal images/why-choose-03.webp";
import experts from "../assets/icons/classes.svg";
import key from "../assets/icons/key-person.svg";
import courses from "../assets/icons/online-course.svg";
import CTA from '../Components/CTA/CTA'

const About = () => {
  return (
    <>
      <Banner title="About" route="about us" />
      <div className="about-section">
        <div className="about-section-content">
          <h3>
            We Provide Best <span> Education </span>
            Services for you
          </h3>
          <p>
            Welcome to TechCADD Computer Education Institute, your gateway to
            technology in Jalandhar! We provide high-quality computer education,
            offering courses from basic skills to advanced programming. Our
            mission is to make learning accessible and enjoyable for everyone,
            whether you&quot;re a student, professional, or tech enthusiast.
            With expert instructors and personalized support, we ensure
            practical, easy-to-understand training that builds a strong
            foundation for success in today&apos;s digital world.
          </p>
          <div className="vision-content">
            <div className="mission">
              <img src={mission} alt="" width={60} height={60} />
              <h4>Our Mission</h4>
              <p>
                Our Mission TECHCADD aims to establish an extensive network at
                both national and international levels through its efficiently
                managed franchise centers, where students can readily access
                high-quality advanced technology with hands-on experience in
                various industries.
              </p>
            </div>
            <div className="vision">
              <img src={vision} alt="" width={60} height={60} />
              <h4>Our Vision</h4>
              <p>
                Our vision is to transform India into a center for highly
                trained engineers and technical experts, while also creating a
                globally recognized brand in the realm of software and services.
                With certification from TECHCADD in specific technical areas.
              </p>
            </div>
          </div>
        </div>
        <div className="about-gallery">
          <img src={abstract2} className="abstract2" width={150} height={150} />
          <img src={dots22} className="dots221" width={150} height={150} />
          <div className="gallery">
            <img src={about1} className="about1" />
            <img src={about2} className="about2" />
            <img src={about3} className="about3" />
            <img src={about4} className="about4" />
          </div>
          <img src={dots21} className="dots21" width={150} height={150} />
        </div>
      </div>
      <div className="abouts-benefits">
        <img src={dots21} className="cards-dot" alt="" />
        <div className="card1">
          <div className="reading">
            <img src={reading} alt="" width={50} height={50} />
          </div>
          <h1>2,700+</h1>
          <p>STUDENTS ENROLLED</p>
        </div>
        <div className="card2">
          <div className="presentation">
            <img src={presentation} alt="" width={50} height={50} />
          </div>
          <h1>6+</h1>
          <p>BRANCHES</p>
        </div>
        <div className="card3">
          <div className="satisfaction">
            <img src={satisfaction} alt="" width={50} height={50} />
          </div>
          <h1>100%</h1>
          <p>SATISFACTION RATE</p>
        </div>
        <div className="card4">
          <div className="man">
            <img src={man} alt="" width={50} height={50} />
          </div>
          <h1>65+</h1>
          <p>TOP INSTRUCTORS</p>
        </div>
        <img src={square} className="square-dots" />
      </div>
      <div className="why-chose-us">
        <h5>WHY CHOOSE TECHCADD</h5>
        <h1>
          Best <span>Beneficial </span>Side of
        </h1>
        <span>
          <h1>TechCADD Computer Education</h1>
          <img src={stroke} className="stroke" alt="" />
        </span>
        <div className="card-wrapper">
          <div className="why-card1">
            <img src={why1} alt="" />
            <div className="icon1">
              <img src={courses} alt="" width={50} height={50} />
            </div>
            <p className="card-title">High Quality Courses</p>
            <p className="card-body">
              Techcadd offers high-quality courses with expert instructors,
              hands-on training, and industry-relevant skills to boost your
              career growth.
            </p>
          </div>
          <div className="why-card2">
            <img src={why2} alt="" />
            <div className="icon2">
              <img src={key} alt="" width={50} height={50} />
            </div>
            <p className="card-title">High Quality Courses</p>
            <p className="card-body">
              Techcadd offers high-quality courses with expert instructors,
              hands-on training, and industry-relevant skills to boost your
              career growth.
            </p>
          </div>
          <div className="why-card3">
            <img src={why3} alt="" />
            <div className="icon3">
              <img src={experts} alt="" width={60} height={60} />
            </div>
            <p className="card-title">High Quality Courses</p>
            <p className="card-body">
              Techcadd offers high-quality courses with expert instructors,
              hands-on training, and industry-relevant skills to boost your
              career growth.
            </p>
          </div>
        </div>
      </div>

      <div className="CTA-wrapper">
        <CTA/>
      </div>
    </>
  );
};

export default About;
