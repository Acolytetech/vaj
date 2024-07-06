import React from 'react'
import './Loader.css'
import loader  from '../../image/loader.png';
function Loader() {
  return (
//     <div class="loader">
//   <div class="loader__bar"></div>
//   <div class="loader__bar"></div>
//   <div class="loader__bar"></div>
//   <div class="loader__bar"></div>
//   <div class="loader__bar"></div>
//   <div class="loader__ball"></div>
// </div>
<>
<img src={loader} alt ='loading.......'className='m-auto'/>
</>
  )
}

export default Loader
