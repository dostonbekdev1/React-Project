import React from 'react'
import '../Footer/Footer.css'


const Footer =()=>{

     return(
          <div id='bg' className='bg-success'>
          <div className='container py-5'>
               <div className='row'>
                    <div className='col-lg-4'>
                    <img id='fImage' class="uu5-bricks-image uu5-imaging-image-img  uu5-imaging-image-auto-height" src="https://uuapp.plus4u.net/uu-appbinarystore-maing02/8c84c39b5ef84fa2acba4fe8b05a0f42/binary/getData?accessKey=7d7d62c73e9e0d0b428db10242fca111.27436112.a2ec90f90ee597d5ea466446608e4b88d6d55c1d&amp;clientAwid=d2a80094d8d24287befb333201f98edb&amp;dataKey=prod1-small_bublina_softwareeverywhere"/>
                    <ul id='ulFooter'  className='list-group'>
                         <li  className='list-group pt-0 mt-0 mb-2 text-light'>Software is everywhere today.</li>
                         
                         <li  className='list-item my-2 text-light'>It is a part of everything we do..</li>
                         <li  className='list-item my-2 text-light'>The software makes our everyday work</li>
                         
                    </ul>
                    </div>
                    <div className='col-lg-4'>
                    <ul id='ulFooter'  className='list-group ps-5'>
                         <li className='list-group text-light h1 mt-3'>Important Links</li>
                         <li  className='list-item my-2 text-light h6 mt-3'>News</li>
                         <li  className='list-item my-2 text-light h6'>About Us</li>
                         <li  className='list-item my-2 text-light h6'>Management</li>
                         <li  className='list-item my-2 text-light h6'>Contacts</li>
                         <li  className='list-item my-2 text-light h6'>GDPR</li>
                         <li  className='list-item my-2 text-light h6'>About Us</li>
                        
                    </ul>
                    </div>
                    <div className='col-lg-4 col-sm-6'>
                    <ul id='ulFooter' className='list-group ps-5'>
                         <li  className='list-group text-light h1 mt-3'>Contact</li>
                         <li  className='list-group text-light h6 mt-3'>aos.com</li>
                         <li  className='list-item my-2 text-light h6 mt-3'>+420 221 400 111</li>
                         <li  className='list-item my-2 text-light h6'>info@unicorn.com</li>
                         <li  className='list-item my-2 text-light h6'>Executive Briefing Centre - Classic 7</li>
                         <li  className='list-item my-2 text-light h6'>Jankovcova 1037/49</li>
                         <li  className='list-item my-2 text-light h6'>170 00 Praha 7, Czech Republic
</li>
                        
                    </ul>
                    </div>
               </div>
            </div>
          </div>
     )
}

export default Footer