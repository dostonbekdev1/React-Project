import React from 'react';
import '../Youtube/Youtube.css';

function Youtube() {
     return (
          <div className='bg-success py-5'>
               <div className='container'>
                    <div className='row'>
                         <div className='col-lg-6 col-sm-12'>
                              <h1 className='text-light display-3 mt-4'>Meet our global team of  Builders.</h1>
                              <p className='lead text-light my-3'>We are a full-service custom software delivery partner headquartered in Chicago. For more than 20 years, we`ve worked with engineering departments, business leaders, and technology providers around the globe. We work in partnership with organizations to build custom software solutions, evolve IT practices, and create a more valuable software experience.</p>
                         </div>
                         <div className='col-lg-6 col-sm-12'>
                              <h1 className='my-1'></h1>
                              <iframe id='video' className='mt-4' width="540" height="300" src="https://www.youtube.com/embed/vVEV5J5S13g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Youtube