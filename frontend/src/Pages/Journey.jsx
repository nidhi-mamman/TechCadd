import '../CSS/Journey.css'
import experts from '../assets/blog/experts.png'
import learn from '../assets/blog/learn.png'
import certificate from '../assets/blog/online-certi.png'
import email from '../assets/blog/email.png'

const Journey = () => {
  return (
    <>
      <div className="start-journey">
        <h6 className='startJourney'>How We Start Journey</h6>
        <h2 className='start-h2'>Start Your Learning Journey<br />Today!</h2>
        <p className='start-p'>Discover a World of Knowledge and Skills at Your Fingertips – Unlock Your Potential and Achieve Your Dreams with Our Comprehensive Learning Resources!</p>
        <div className="journey-content">
          <div className="experts">
            <img src={experts} alt="" />
            <div className="start-content">
              <span>Learn with Experts</span>
              <p>Elevate your learning. Trusted guidance, real results</p>
            </div>
          </div>
          <div className="learn">
            <img src={learn} alt="" />
            <div className="start-content">
              <span>Learn Anything</span>
              <p>Master Any Skill. Unleash Your Potential and join the best</p>
            </div>
          </div>
          <div className="certificate">
            <img src={certificate} alt="" />
            <div className="start-content">
              <span>Get Online Certificates</span>
              <p>Master in Demand Skills. Soon Get Certified Today</p>
            </div>
          </div>
          <div className="email">
            <img src={email} alt="" />
            <div className="start-content">
              <span>E-mail Marketing</span>
              <p>Grow Your Business. Reach New Customers</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Journey