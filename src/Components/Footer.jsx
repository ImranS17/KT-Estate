import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-col contact">
          <img src="/Images/Logo.png" alt="KT Estate Logo" className="footer-logo" />
          <h4>Contact Details</h4>
          <p>
            Located in: <a href="#">Viraj Towers</a> <br />
            Address: 4th Floor, Viraj Towers, Western Urban Rd, near WEH Metro
            Station, Gundavali, Andheri East, Mumbai, Maharashtra 400093 <br />
            Phone: <a href="tel:02250061369">022 5006 1369</a>
          </p>
          <div className="social-icons">
            <img src="/Images/facebook.png" alt="Facebbok Logo" />
            <img src="/Images/insta.png" alt="Insta Logo" />
          </div>
        </div>
        <div className="footer-col spa">
          <h4>Ongoing Projects</h4>
          <ul>
            <li>North Imperial Greens</li>
            <li>Codename Starlife</li>
            <li>The Palace</li>
            <li>KT Parkway</li>
            <li>North Barcelona</li>
            <li>North West-End</li>
          </ul>
        </div>
        <div className="footer-col spa">
          <h4>Delivered Projects</h4>
          <ul>
            <li>North Aviva</li>
            <li>North Imperia</li>
            <li>KT Eminence</li>
            <li>North Euphoria</li>
            <li>North Alexa</li>
            <li>Unity Towers</li>
            <li>KT Decks</li>
            <li>Chalet Amar</li>
            <li>North Celeste</li>
          </ul>
        </div>
        <div className="threecol spa">
          <div className="footer-col">
            <h4>NRI Corner</h4>
            <ul>
              <li>NRI Corner</li>
              <li>NRI Opportunities</li>
              <li>NRI Frequently Asked Questions</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Work With Us</h4>
            <ul>
              <li>Career</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="footer-col">
          <h4>ISO Certification</h4>
          <ul>
            <li>ISO 9001 : 2015</li>
            <li>ISO 14001 : 2015</li>
            <li>ISO 45001 : 2018</li>
          </ul>
        </div>
        </div>
        <div className="footer-col spa">
          <h4>Quick Links</h4>
          <ul>
            <li>Overview</li>
            <li>Pushing Boundaries</li>
            <li>Contact Us</li>
            <li>North</li>
            <li>Media</li>
            <li>Blogs</li>
            <li>Investor Relations</li>
            <li>Redefining Real Estate</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <section className="footer-bottom">
        <div className="footer-links">
          <a href="#">Privacy</a> |
          <a href="#"> Policy Terms & Conditions</a> |
          <a href="#"> Refund & Cancellation Policy</a>
        </div>
        <div className="footer1">
          <a href="#">Privacy</a> 
          <a href="#"> Policy Terms & Conditions</a> 
          <a href="#"> Refund & Cancellation Policy</a>
        </div>
        <p>Copyright by KT Estate | All rights reserved.</p>
      </section>
    </footer>
  );
}
