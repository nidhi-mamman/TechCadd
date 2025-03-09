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
          <img src={dots22} className="dots22" width={150} height={150} />
          <div className="gallery">
            <img src={about1} className="about1" />
            <img src={about2} className="about2" />
            <img src={about3} className="about3" />
            <img src={about4} className="about4" />
          </div>
          <img src={dots21} className="dots21" width={150} height={150} />
        </div>
      </div>
    </>
  );
};

export default About;
