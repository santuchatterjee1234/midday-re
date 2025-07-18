import Link from "next/link";
import Image from "next/image";
import funzone from "../../../public/assets/images/fun-zone.png";
import photos from "../../../public/assets/images/photos.png";
import middaygold from "../../../public/assets/images/middaygold.png";
import videos from "../../../public/assets/images/videos.png";
import shots from "../../../public/assets/images/shots.png";
import apple from "../../../public/assets/images/apple-logo.png";
import android from "../../../public/assets/images/android-logo.png";

const Footer = () => {
  return (
    <footer className="footer-main mb-3 pb-5 mb-md-0 pb-md-0">
      <div className="container">
        <div className="footer-container">
          {/* Left Section */}
          <div className="footer-left text-center py-2">
            <div className="footer-logo mx-auto">
              <img src="https://www.mid-day.com/assets/images/logo.png" alt="Mid-Day" />
            </div>
            <p className="footer-feedback-pos">Kindly mail us your feedback</p>
            <button className="feedback-btn">Write Your Feedback</button>
            <div>
              <ul className="my-2 follow-us-pos px-0">
                <li className="footer-social-li">Follow Us:</li>
              </ul>
            </div>
            <div className="social-icons justify-content-center">
              <ul className="footer-social-ul">
                <li className="footer-social-li">
                  <Link href="https://www.facebook.com/middayindia">
                    <span className="icon-facebook-logo new-social-size"></span>
                  </Link>
                </li>
                <li className="footer-social-li">
                  <Link href="https://www.instagram.com/middayindia">
                    <span className="icon-instagram new-social-size"></span>
                  </Link>
                </li>
                <li className="footer-social-li">
                  <Link href="https://twitter.com/mid_day">
                    <img src="https://www.mid-day.com/assets/images/twitter-new-icon.png" alt="Twitter" className="new-twitter-size-black" />
                  </Link>
                </li>
                <li className="footer-social-li">
                  <Link href="https://www.youtube.com/c/middayindia">
                    <span className="icon-youtube new-social-size pe-1"></span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Middle Section */}
          <div className="footer-middle py-4">
            <h3>Top Categories</h3>
            <div className="footer-columns">
              <div className="footer-column">
                <ul>
                  <li><Link href="/mumbai">Mumbai</Link></li>
                  <li><Link href="/entertainment">Entertainment</Link></li>
                  <li><Link href="/news">News</Link></li>
                  <li><Link href="/sports">Sports</Link></li>
                </ul>
              </div>
              <div className="footer-column">
                <ul>
                  <li><Link href="/celebrity-life">Celebrity Life</Link></li>
                  <li><Link href="/lifestyle">Lifestyle</Link></li>
                  <li><Link href="/sunday-mid-day">Sunday Mid-day</Link></li>
                  <li><Link href="/mumbai-guide">Mumbai Guide</Link></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="footer-right py-4">
            <h3>Useful Links</h3>
            <div className="footer-columns">
              <div className="footer-column">
                <ul>
                  <li><Link href="/contact-us">Contact Us</Link></li>
                  <li><Link href="/advertise-with-us">Advertise with Us</Link></li>
                  <li><Link href="/careers">Careers</Link></li>
                  <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                </ul>
              </div>
              <div className="footer-column">
                <ul>
                  <li><Link href="/terms-and-conditions">Terms & Conditions</Link></li>
                  <li><Link href="/grievance-redressal">Grievance Redressal</Link></li>
                  <li><Link href="/investor-relations">Investor Relations</Link></li>
                  <li><Link href="/rss">RSS</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="footer-bottom">
          <p>Copyright © 2025 <Link href="" style={{ color: '#0055A5 !important' }}>Mid-Day Infomedia Ltd.</Link> All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
