import Banner from "./Banner"
import '../CSS/Contact.css'
import { IoLocationOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { MdMailOutline } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { toast } from "react-toastify";
import { useRef } from "react";
import axios from 'axios'
const Contact = () => {
  const formRef = useRef(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const form = new FormData(formRef.current)
    const formData = {}
    for (let [key, value] of form.entries()) {
      formData[key] = value
    }

    const { name, email, phone, message } = formData
    const namePattern = /^[A-Za-z]+(\s[A-Za-z]+)*$/;
    const emailPattern = /^[a-zA-Z0-9._-]+@(gmail\.com|yahoo\.com)$/;
    const mobilePattern = /^\d{10}$/;

    if (name.length === 0 || email.length === 0 || phone.length === 0 || message.length === 0) {
      toast("Please fill out all the required fields.")
      return
    }

    if (name.length === 0 || !namePattern.test(name)) {
      toast("Name can only contain alphabets and it is required.")
      return
    }

    if (email.length === 0 || !emailPattern.test(email)) {
      toast("Email is not in required format and it is required.")
      return
    }

    if (phone.length === 0 || !mobilePattern.test(phone)) {
      toast("Phone number should only contain ten digits and it is required.")
      return
    }

    if (message.length === 0) {
      toast("Message should not be kept empty.")
      return
    }
    try {
      const response = await axios.post('http://localhost:3000/messages/push', formData)
      if (response.status === 200) {
        toast.success("Message Sent Successfully.")
        formRef.current.reset()
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <Banner title="Contact Us" route="contact us" />
      <div className="contact-section">
        <div className="address-section">
          <div className="address">
            <div className="loc-icon">
              <IoLocationOutline size={36} style={{ color: "white" }} />
            </div>
            <div className="content">
              <p><span>Address</span><br />1st Floor, opposite BSNL Exchange, Bharat Nagar chowk, Ludhiana, 141001</p>
            </div>
          </div>
          <div className="contact">
            <div className="call-icon">
              < FiPhoneCall size={34} style={{ color: "white" }} />
            </div>
            <div className="content">
              <p><span>Phone</span><br />
                +91-9888122667 <br />
                +91-9888122255
              </p>
            </div>
          </div>
          <div className="mail">
            <div className="mail-icon">
              <MdMailOutline size={36} style={{ color: "white" }} />
            </div>
            <div className="content">
              <p><span>Email</span><br />
                techcadd@gmail.com
              </p>
            </div>
          </div>
          <div className="social-media-link"></div>
        </div>
        <div className="contact-form">
          <h2>Send us message</h2>
          <p>Fill out this form for booking a consultant advising session.</p>
          <form ref={formRef} method="POST" onSubmit={handleSubmit}>
            <div className="single-form-group">
              <input type="text" name="name" className="Name" placeholder="Name*" />
            </div>
            <div className="form-group">
              <input type="email" name="email" placeholder="Email*" />
              <input type="tel" name="phone" placeholder="Phone number*" />
            </div>
            <textarea rows={7} name="message" cols={80} placeholder="Message*" />
            <button className="submit-btn" type="submit">Submit Now<FaArrowRight /></button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact