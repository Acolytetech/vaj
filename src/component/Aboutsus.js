import React from 'react'
import Cardcarousel from './card crousel/Cardcrousel'
import aboutimg from '../image/About Us.png'
import ourteamimg1 from '../image/roslq1yp.png';
import aboutcardimg1 from '../image/asphalt-image-addressing-common-hazards-and-risks-in-the-asphalt-industry.jpg';
import './Aboutsus.css';
import Whoweare from './innerPages/Who/Whoweare';
import AOS from 'aos';
import 'aos/dist/aos.css';


 

function Aboutsus() {
  AOS.init();
  return (
   
    <div>
      <div className='aboutspage'  style={{ maxWidth: '100%' }}>
        <img src={aboutimg} alt='about us' width={'100%'} style={{ height: '400px' }} />

        <div className='aboutcard-section'>
          <div className='aboutcardimg'>
            <img src={aboutcardimg1} alt='about us img'  data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" />
          </div>
          <div className='aboutcardcontent'>
            {/* <h1>Abouts Us</h1> */}
            <p>
              <h1>Where Innovation Fuels Progress - Powering the Future with Sustainable Energy Solutions</h1> <br />

              <span>
                {/* Vajravel Traders Pvt Ltd is a distinguished name in the realm of oil manufacturing, specializing in a diverse range of high-quality oils. From base oils to imported varieties, and even crude oils, we pride ourselves on delivering products that meet the highest standards of excellence. */}
                Welcome to <strong>Energy Solutions Inc.</strong>, a leading provider of advanced crude oil and biodiesel services. As a division of <strong>EcoFuel Corp</strong>., we combine traditional energy expertise with cutting-edge sustainable practices. Our team comprises seasoned professionals and forward-thinking innovators, committed to driving the energy sector towards a greener, more efficient future.
              </span>  <br />
              <ul style={{ listStyle: 'circle', paddingLeft: '30px' }}>
                <li><strong>
                  500+ Five-Star Ratings!
                </strong></li>
                <li>
                  <strong>
                    99% Client Retention!
                  </strong>
                </li>
                <li>
                  We offer a comprehensive range of energy solutions, from crude oil extraction to biodiesel production.</li>
                <li>
                  Our team boasts extensive experience and deep industry knowledge.</li>
                <li>
                  We are committed to excellence, delivering high-quality services in every project.
                </li>
              </ul>
              <span>
                {/* At Vajravel Traders Pvt Ltd, quality is our top priority. Our state-of-the-art facilities and rigorous quality control measures ensure that every bottle of oil bearing our name meets and exceeds industry standards. We are committed to transparency, integrity, and sustainability in all aspects of our operations, from sourcing to production to distribution. */}

              </span>
            </p>
            <div style={{ width: '100%', display: 'flex', padding: '30px', textTransform: 'capitalize' }}>
              <div data-aos="fade-right" data-aos-duration="2000" className='fivestarrating' style={{ width: '50%', display: 'flex' }}>
                <img  fetchpriority="high" decoding="async" width="70" height="70" src="https://astream.in/wp-content/uploads/2023/08/Rating.png"
                  class="attachment-full  wp-image-1389" alt srcset="https://astream.in/wp-content/uploads/2023/08/Rating.png 512w, https://astream.in/wp-content/uploads/2023/08/Rating-300x300.png 300w, https://astream.in/wp-content/uploads/2023/08/Rating-150x150.png 150w" />
                <span style={{ width: '150px', fontSize: '20px', margin: 'auto' }}>100+ <br />five star rating</span>
              </div>
              <div data-aos="fade-left" data-aos-duration="2000" className='fivestarrating' style={{ width: '50%', display: 'flex' }}>

                <img decoding="async" width="70" height="70" src="https://astream.in/wp-content/uploads/2023/08/Retaintion.png" class="attachment-full  wp-image-1390" alt srcset="https://astream.in/wp-content/uploads/2023/08/Retaintion.png 512w, https://astream.in/wp-content/uploads/2023/08/Retaintion-300x300.png 300w, https://astream.in/wp-content/uploads/2023/08/Retaintion-150x150.png 150w"></img>

                <span style={{ width: '150px', fontSize: '20px', margin: 'auto' }}>98%  + <br />client satisfied</span>
              </div>


            </div>
      <h1 className='vajaravel' data-aos="fade-left">Vajravel traders pvt.ltd. </h1>



          </div>

        </div>
      </div>

      {/* <Cardcarousel/> */}
      
      <div className='ourteamimg'>
        <img src={ourteamimg1} alt='vajravel team img' data-aos="zoom-in"  data-aos-duration="2000"/>
      <div className='ourteamcontent'>
        <div className='sec1' data-aos="fade-up"
     data-aos-duration="3000">
          <h2>OUR MISSION</h2>
          <p>
          At Astream Our mission is clear - to be your trusted partner in the digital realm, guiding you through the complexities of the online landscape with innovative solutions and unwavering support. We believe that every business,
           no matter its size, deserves access to top-notch web services that can make a significant impact on its growth and success.
          </p>

        </div>
        <div className='sec1' data-aos="fade-up"
     data-aos-duration="3000">
          <h2>OUR VISSION</h2>
          <p >
          At Astream, our vision is to be a catalyst for your digital success. We aspire to empower businesses and individuals with innovative online web services that transcend boundaries and drive exceptional growth. Through cutting-edge technologies, creative thinking, and a customer-first approach, we aim to unlock the full potential of the digital world for you, making your dreams a reality in the ever
          evolving digital landscape.
          </p>

        </div>

      </div>
      </div>
    </div>
  )
}

export default Aboutsus
