import React from 'react';
import './styles/about.css'
import BreadCrumb from './breadcrumb';
import InfoBlock from './InfoBlock';
const About = () => {
  return (
    <>
    <BreadCrumb  currentPage="About Us"/>
     <div className="about-us-container">
        <div className="text-before-cards">
            <h1>About Us</h1>
            <p>In addition to kids, we also have exclusive programs and activities </p>
            <p>for your children that help to prepare them for school.</p>
        </div>
        <div className="grid-cards-about">
            <div className="card card_1">
            <img src="images/дети-для-карточки.png" alt="kids" />
            <h1>We Have Everything You Need ?</h1>
            <p>
                It is known that children as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
                The passage is attributed to an unknown typesetter in the 15th
            </p>
            </div>
            <div className="card card_2">
            <img src="images/дети-игргают-для-карточки.png" alt="playing kids" />
            <ul>
                <li> <div className="check-mark">✓</div> We make your life easier.</li>
                <li> <div className="check-mark">✓</div> Experience childcare.</li>
                <li> <div className="check-mark">✓</div> Daycare is great…</li>
                <li> <div className="check-mark">✓</div> We are childcare professionals.</li>
                <li> <div className="check-mark">✓</div> Babysitting with a loving heart.</li>
                <li> <div className="check-mark">✓</div> Your wishes just came true.</li>
            </ul>
            </div>
            <div className="card card_3">
            <h2>Working hours</h2>
            <ul>
                <div className="blocks">
                <div className="block1">
                    <li>Monday</li>
                    <li>Tuesday</li>
                    <li>Wednesday</li>
                    <li>Thursday</li>
                    <li>Friday</li>
                    <li>Saturday</li>
                </div>
                <div className="block2">
                    <li> 9AM - 6PM</li>
                    <li> 9AM - 6PM</li>
                    <li> 9AM - 6PM</li>
                    <li> 9AM - 6PM</li>
                    <li> 9AM - 6PM</li>
                    <li> 9AM - 4PM</li>
                </div>
                </div>
            </ul>
            <a className="buttons">Contact Us</a>
            </div>
        </div>
    </div>
    <div className="container-learning-games">
        <div className="img-container">
            <img src="images/ребенок-играетjpg.jpg" alt="playing" />
        </div>
        <div className="text-container">
            <h1>What Are the Learning Games?</h1>
            <p>For your children to have good fine motor skills, it is worth offering them special educational games. Our teachers write in this article about particular games. It is known that children learn anything much better in a playful way. What methods are used by teachers to better teach children? Your happy children are our best reward.</p>
            <button className='to-shop'>Shop now </button>
        </div>
    </div>
    <InfoBlock/>
    <div className='container-why-we'>
        <div className='round'> 
            <h5>Our advantages are...</h5>
        </div>
        <div class="grid-container-about">
            <div class="grid-item">
                <div class="icon"> <img src='images/icons/icons-1.jpg' alt="icon"/></div>
                <p>Availability of all products in stock</p>
            </div>
            <div class="grid-item">
                <div class="icon"> <img src='images/icons/icons-2.jpg' alt="icon"/></div>
                <p>Affordable prices and discounts</p>
            </div>
            <div class="grid-item">
                <div class="icon"> <img src='images/icons/icons-3.jpg' alt="icon"/></div>
                <p>Free delivery</p>
            </div>
            <div class="grid-item">
                <div class="icon"> <img src='images/icons/icons-4.jpg' alt="icon"/></div>
                <p>Convenient delivery</p>
            </div>
            <div class="grid-item">
                <div class="icon"> <img src='images/icons/icons-5.jpg' alt="icon"/></div>
                <p>The latest news from the world of toys</p>
            </div>
            <div class="grid-item">
                <div class="icon"> <img src='images/icons/icons-6.jpg' alt="icon"/></div>
                <p>Quick order processing</p>
            </div>
            <div class="grid-item">
                <div class="icon"> <img src='images/icons/icons-7.jpg' alt="icon"/></div>
                <p>Round-the-clock order acceptance</p>
            </div>
            <div class="grid-item">
                <div class="icon"> <img src='images/icons/icons-8.jpg' alt="icon"/></div>
                <p>Pickup from the store in 15 minutes after the order</p>
            </div>
            <div class="grid-item">
                <div class="icon"> <img src='images/icons/icons-9.jpg' alt="icon"/></div>
                <p>Urgent delivery</p>
            </div>
            <div class="grid-item">
                <div class="icon"> <img src='images/icons/icons-10.jpg' alt="icon"/></div>
                <p>Special conditions for legal entities</p>
            </div>
        </div>
    </div>
    </>
  );
}

export default About;
