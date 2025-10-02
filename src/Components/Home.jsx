import './home.css'
import Accordion from "./Accordion"

export default function Home() {
    return (
        <>
            {/* Banner */}
            <section className="banner">
                <div className="banner-text">
                    <h1>Your Gateway to <span>Landmark Living in Mumbai</span></h1>
                    <p>Discover premium residences designed to match global standards and deliver lasting value-crafted by KT Estate.</p>
                    <div className="btn">
                        <button id="book">Book A Site Visit</button>
                        <button id="brochure">Download Brochure<img src="/Images/btnarrow.png" alt="Brochure Icon" /></button>
                    </div>
                </div>
            </section>

            {/* About */}
            <section className="about">
                <div className="about-image">
                    <img src="/Images/about1.png" alt="default" className="default" />
                    <img src="/Images/about2.png" alt="hovered" className="hover" />
                </div>
                <div className="about-text">
                    <div className="all-text">
                        <h3>Shaping Mumbai's Skyline <span>Since 2006</span></h3>
                        <h6>An Unmatched Opportunity for Global Investors</h6>
                        <p>For our Non-Resident Indian (NRI) clientele, investing with KT Estate presents a golden opportunity to own a piece of one of the world's most vibrant and fastest-growing cities. Mumbai's real estate market offers robust growth potential, and our projects are strategically located to provide both excellent returns and a serene retreat from the city's hustle and bustle.</p>
                        <p>Every project we undertake reflects a meticulous vision: to harmonize serenity, cutting-edge innovation, and an unwavering commitment to unmatched quality. We are not just building homes; we are crafting communities where modern living coexists with peace and nature.</p>
                    </div>
                </div>
            </section>

            {/* Developments */}
            <section className="landmark">
                <div className="land-text">
                    <h3> Explore Our <em>Landmark Developments</em></h3>
                    <p>Our portfolio redefines urban living with residences and communities designed for comfort, convenience, and long-term value.</p>
                </div>
                <div className="proj-land">
                    <div className="proj1">
                        <img src="/Images/proj1.png" alt="KT Parkway Image" />
                        <h4>KT Parkway</h4>
                        <p>Near Andheri East</p>
                    </div>
                    <div className="proj1">
                        <img src="/Images/proj2.png" alt="The Palace Image" />
                    </div>
                    <div className="proj1">
                        <img src="/Images/proj3.png" alt="KT Decks Image" />
                    </div>
                </div>
                <div className="btn1">
                    <button id="book">View All Projects</button>
                </div>
            </section>

            {/* Why Choose */}
            <section className="choose">
                <div className="left-choose">
                    <div className="choose-head">
                        <h3>Why Choose KT Estate as <span>Your Investment Partner</span></h3>
                        <p>KT Estate means trust, quality, and growth with transparent, customer-first service.</p>
                    </div>
                    <div className="choose-list">
                        <div className="list1">
                            <img src="/Images/prime.png" alt="Prime Location Image" />
                            <div className="ctext">
                                <span>Prime Locations</span>
                                <p>Projects in Mumbai's most promising growth corridors.</p>
                            </div>
                        </div>
                        <div className="list1">
                            <img src="/Images/quality.png" alt="Quality & Trust Image" />
                            <div className="ctext">
                                <span>Quality & Trust</span>
                                <p>Landmark projects delivered with excellence and transparency.</p>
                            </div>
                        </div>
                        <div className="list1">
                            <img src="/Images/appreciation.png" alt="Appreciation & ROI Image" />
                            <div className="ctext">
                                <span>Appreciation & ROI</span>
                                <p>Properties designed to deliver strong long-term returns.</p>
                            </div>
                        </div>
                        <div className="list1">
                            <img src="/Images/seamless.png" alt="Seamless Process Image" />
                            <div className="ctext">
                                <span>Seamless Process</span>
                                <p>Hassle-free documentation and dedicated NRI assistance.</p>
                            </div>
                        </div>
                        <div className="list1">
                            <img src="/Images/class.png" alt="World-Class Living Image" />
                            <div className="ctext">
                                <span>World-Class Living</span>
                                <p>Premium amenities and lifestyle features to match global standards.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-choose">
                    <img src="/Images/choosemain.png" className="choose-image" alt="Choose Image" />
                </div>
            </section>

            {/* Form */}
            <section className="forms">
                <div className="forms-text">
                    <h3> Start Your <span>Investment Journey </span></h3>
                    <p>Fill in your details and let our NRI assistance team guide you through every step-from choosing the right project to completing documentation with ease.</p>
                </div>
                <div className="form-card">
                    <h6 className="form-heading">Please fill in the form below and our team will be in touch to guide you.</h6>
                    <form action="#" method='Post'>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" placeholder="Eg. James Roy" autoComplete="name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="number">Phone Number</label>
                                <input type="tel" id="number" placeholder="+91" autoComplete="tel" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email ID</label>
                            <input type="email" id="email" placeholder="Eg. james@gmail.com" autoComplete="email" />
                        </div>
                        <div className="form-submit">
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </section>

            {/* Investor */}
            <section className="investor">
                <div className="invest-text">
                    <h3>Trusted by <span>Global Investors</span></h3>
                    <p>Our customers across the globe have trusted KT Estate to deliver not just homes, but lasting value. Hear from NRIs who found their dream property with us.</p>
                </div>
                <img src="/Images/quot.png" id="quot" alt="Quotation Sign" />
                <div className="all-investor">
                    <div className="invest-profile">
                        <img src="/Images/ramesh.png" alt="Ramesh" />
                        <h3>Ramesh Iyer</h3>
                        <p>Shifting to KT Estate has been one of the best decisions for my family. The flats are spacious, the society is vibrant, and my kids love the play areas. Plus, the location makes my office commute so much easier.</p>
                    </div>
                    <div className="invest-profile">
                        <img src="/Images/arjun.png" alt="Arjun" />
                        <h3>Arjun Mehta</h3>
                        <p>For me, it wasn't just about buying a flat-it was about investing in a lifestyle. KT Estate projects deliver on both comfort and connectivity. I feel confident that the value of my property will only grow with time.</p>
                    </div>
                    <div className="invest-profile">
                        <img src="/Images/priya.png" alt="Priya" />
                        <h3>Priya Mathew</h3>
                        <p>What I liked most was the transparency in the whole process. From the first visit to the handover, everything was smooth. The amenities are thoughtfully planned, and the greenery around the campus really gives a peaceful vibe.</p>
                    </div>
                </div>
            </section>
            
            {/* FAQ & EMI */}
            <section className="faq">
                <Accordion />
                <div className="emi-card">
                    <h2 className="emi-title">EMI Calculator</h2>
                    <div className="emi-row">
                        <label htmlFor='amount'>Loan Amount (in INR)</label>
                        <input type="range" min="100000" max="10000000" step="50000" defaultValue="2500000" id="amount" />
                        <span className="value-box">2500000</span>
                    </div>
                    <div className="emi-row">
                        <label htmlFor='interest'>Interest Rate</label>
                        <input type="range" min="5" max="20" step="0.1" defaultValue="10" id="interest" />
                        <span className="value-box">10%</span>
                    </div>
                    <div className="emi-row">
                        <label htmlFor='tenure'>Tenure (In years)</label>
                        <input type="range" min="1" max="30" step="1" defaultValue="10" id="tenure" />
                        <span className="value-box">10 Years</span>
                    </div>
                    <p className="emi-result">
                        Your Estimate Monthly EMI
                        <span className="emi-amount">₹33,000</span>
                    </p>
                </div>
            </section>
        </>
    )
}