import '../CSS/Banner.css'
import PropTypes from 'prop-types'; 
import globe from '../assets/banner/breadcrumb_shape01.svg'
import plane from '../assets/banner/h3_hero_shape01.svg'
import book from '../assets/banner/h3_hero_shape02.svg'
import star from '../assets/banner/h3_hero_shape03.svg'
import curl from '../assets/banner/breadcrumb_shape05.svg'
import { IoIosArrowForward } from "react-icons/io";
const Banner = ({ title, route }) => {
  return (
    <>
      <div className="audio-section">
        <div className="route-section">
          <img src={globe} className='globe' alt="" />
          <h1 className='about-txt'>{title}</h1>
          <p className='route'>Home <IoIosArrowForward color='grey' /> {route}</p>
        </div>
        <div className="breadcrumbs">
          <img src={plane} className='plane' alt="" />
          <img src={book} className='book' alt="" />
          <img src={curl} className='opp-curl' alt="" />
          <img src={star} className='star' alt="" />
        </div>
      </div>
    </>
  )
}

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired
};

export default Banner