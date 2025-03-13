import './CTA.css'
import shape1 from "../../assets/blog/shape-36.png";
import dots2 from "../../assets/blog/shape-37.png";
import dots1 from "../../assets/blog/shape-13.png";
const CTA = () => {
    return (
        <> <div className="CTA">
            <img src={dots1} className="dots11" width={100} height={100} />
            <img src={shape1} className="abstract1" width={100} height={100} />
            <div className="CTA-section">
                <div className="email-section">
                    <p>Get in Touch:</p>
                    <p>techcadd@gmail.com</p>
                </div>
                <div className="or">Or</div>
                <div className="call-section">
                    <p>Call us via:</p>
                    <p>+91-9888122667</p>
                </div>
            </div>
            <img src={dots2} className="dots22" width={90} height={90} />
        </div></>
    )
}

export default CTA