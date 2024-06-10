// import React from 'react';
// import './Whoweare.css';
// import { ForwardToInboxSharp } from '@mui/icons-material';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// // import Ourteam from '../ourteam/Ourteam';
// // import Whowearecrousel from './Whowearecrousel';
// // import image1 from 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOvZALupQp0Gm2auZnOQXB3gjRgVNPf7FZRQ&s'
// import about from '../../../image/about.png'

// const Whoweare = () => {
    
//   return (
//     < >
//     {/* <div style={{paddingTop:'100px' }}> */}
//       {/* <h1 className='vajaravel' >Vajravel traders pvt. ltd. </h1> */}
//     <div>
//     <img src={about} alt=''/>
//     <div className="whoweare">
//         <div className='content'>
        
//       <h1>Who We Are ?</h1>
//      <p>
//      since 2020, supplier of petrochemical oil products and chemical, coal and solvent products since we doing this buisness for 3 years.
// so, we have alot of happy industriel coustomers in south of india.
// we are giving the products for the most of clients around Tamilnadu, Kerala, Karnataka, Telangana, and Andhrapradesh.
// so, we that carrying our trust with most of the costumers.
//      </p>
//      <p>
//      At <mark>Vajaravel traders pvt. ltd.</mark>, we are committed to delivering top-notch products and exceptional service to our clients. With our extensive experience and industry expertise, we strive to exceed expectations and contribute to the success of businesses across South India.
//      </p>
     
//     </div>
//     <div className='content imgsection'>
//         <img src={ 'https://themes.webdevia.com/petroleum-gas/wp-content/uploads/2016/01/CEO-d3.png'} alt=''/>
//        {/* <img src={ 'https://etimg.etb2bimg.com/photo/91208202.cms'} alt=''/> */}
//         {/* <img src={ 'https://etimg.etb2bimg.com/photo/91208202.cms'} alt=''/> */}
       
//       </div>
      
      
//     </div>
//     {/* <Ourteam /> */}
//     </div>
//     </>
//   );
// };

// export default Whoweare;

import React from 'react';
import about from '../../../image/About Us.png'


const Whoweare = () => {
    return (
        <div className="container mx-auto p-4">

            <div className="flex flex-col md:flex-row bg-white  overflow-hidden">
                <div className="md:w-2/2 p-6 flex flex-col justify-center">
                <img src={about} alt='bitumen'/>

                   <div className='elementor'>
                    <div>
                      
                    </div>
                   </div>
                </div>
            </div>
            {/* <div className="flex flex-wrap mt-4">
        
        <div className="w-1/2 p-2">
          <img
            src={b2}
            alt="Sub 2"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
        <div className="w-1/2 p-2">
          <img
            src={b3}
            alt="Sub 2"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
      </div> */}
        </div>
    );
};

export default Whoweare;

