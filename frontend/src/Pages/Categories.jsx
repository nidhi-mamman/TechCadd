import '../CSS/Categories.css'
import Ai from '../assets/blog/Ai.svg'
import CS from '../assets/blog/cybersecurity.svg'
import Mern from '../assets/blog/MERN.svg'
import DS from '../assets/blog/DataScience.svg'
import DA from '../assets/blog/dataanalytics.svg'
import DM from '../assets/blog/digitalmarketing.svg'
import { IoMdArrowRoundForward } from "react-icons/io";

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
            <h5>Digital<br/> Marketing</h5>
          </div>
        </div>
        <p className='browse'>Browse More <IoMdArrowRoundForward /></p>
      </div>
    </>
  )
}

export default Slider
