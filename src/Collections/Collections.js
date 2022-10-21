import React, { useEffect } from "react";
import './Collections.css'
import AOS from 'aos';
import 'aos/dist/aos.css'


function Collections() {
     useEffect(function () {
          AOS.init({
               duration: '1500'
          })
     })
     return (
          <>
               <h1 data-aos="fade-down" className="display-1 mt-0 text-success text-center">Collections</h1>
               <div  className="row mt-0 mx-0 justify-content-around">
               <div data-aos="zoom-in-up" id="card" className="col-lg-3 col-sm-12">
                         <div className="card bg-success" >
                              <img id="man" src={('https://images.unsplash.com/photo-1572883454114-1cf0031ede2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YnVpbGRpbmdzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60')} className="card-img-top" alt="..." />
                              <div className="card-body">
                                   <h5 className="card-title">building 1</h5>
                                   <p className="card-text text-light">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                   <a href="#" className="btn btn-success">read more</a>
                              </div>
                         </div>
                    </div>
                    <div data-aos="zoom-in-up" data-aos-delay="50" id="card" className="col-lg-3 col-sm-12">
                         <div className="card bg-success" >
                              <img id="man" src={('https://media.istockphoto.com/photos/modern-apartment-buildings-in-berlinprenzlauer-berg-germany-picture-id1359367538?k=20&m=1359367538&s=612x612&w=0&h=J-rVzodXGyuhabKVfS64-PeQ-_PgPFGRYFT912k7VUI=')} className="card-img-top" alt="..." />
                              <div className="card-body">
                                   <h5 className="card-title">building 2</h5>
                                   <p className="card-text text-light">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                   <a href="#" className="btn btn-success">read more</a>
                              </div>
                         </div>
                    </div>

                    <div data-aos="zoom-in-up" data-aos-delay="50"  id="card" className="col-lg-2 col-sm-12">
                         <div className="card bg-success" >
                              <img id="man" src={('https://media.istockphoto.com/photos/modern-townhouse-design-picture-id1393537665?b=1&k=20&m=1393537665&s=170667a&w=0&h=VXz1VFC2UMX3Gp74vtvoEfXtIKoE2ZvjUCm6OfbnLd8=')} className="card-img-top" alt="..." />
                              <div className="card-body">
                                   <h5 className="card-title">building 3</h5>
                                   <p className="card-text text-light">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                   <a href="#" className="btn btn-success">read more</a>
                              </div>
                         </div>
                    </div>
                    <div data-aos="zoom-in-up" data-aos-delay="50"  id="card" className="col-lg-3 col-sm-12">
                         <div className="card bg-success" >
                              <img id="man" src={('https://media.istockphoto.com/photos/residential-buildings-in-a-new-city-district-picture-id1401582615?b=1&k=20&m=1401582615&s=170667a&w=0&h=pW4jKWhQTgdCs9vrplBST7PCMDVhomSV4Q-Vzk_lX8o=')} className="card-img-top" alt="..." />
                              <div className="card-body">
                                   <h5 className="card-title">building 4</h5>
                                   <p className="card-text text-light">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                   <a href="#" className="btn btn-success">read more</a>
                              </div>

                         </div>
                    </div>
               </div>


               {/*  ==================================  */}


               <div data-aos="fade-up" className="row mt-4 mx-0 justify-content-around">
                    <div data-aos="flip-right" id="card" className="col-lg-3 col-sm-12">
                         <div className="card bg-success" >
                              <img id="man" src={('https://media.istockphoto.com/photos/large-house-with-steep-roof-and-side-entry-three-car-garage-picture-id1272163106?b=1&k=20&m=1272163106&s=170667a&w=0&h=pTjbBRKTcnhs-oIGpuSB4TyAE5768gp0BefDXxyUNTU=')} className="card-img-top" alt="..." />
                              <div className="card-body">
                                   <h5 className="card-title">building 5</h5>
                                   <p className="card-text text-light">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                   <a href="#" className="btn btn-success">read more</a>
                              </div>
                         </div>
                    </div>
                    <div data-aos="flip-right" id="card" className="col-lg-3 col-sm-12">
                         <div className="card bg-success" >
                              <img id="man" src={('https://media.istockphoto.com/photos/colonial-house-picture-id1396856251?k=20&m=1396856251&s=612x612&w=0&h=RzO-ktcDn0PkmUhhZGfOKY-4JrZBNxZv5QnR_UjJ1O8=')} className="card-img-top" alt="..." />
                              <div className="card-body">
                                   <h5 className="card-title">building 6</h5>
                                   <p className="card-text text-light">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                   <a href="#" className="btn btn-success">read more</a>
                              </div>
                         </div>
                    </div>

                    <div data-aos="flip-right" id="card" className="col-lg-3 col-sm-12">
                         <div className="card bg-success" >
                              <img id="man" src={('https://media.istockphoto.com/photos/beautiful-suburban-home-exterior-on-bright-sunny-day-with-green-grass-picture-id1312027174?k=20&m=1312027174&s=612x612&w=0&h=qHJniTCQZ7u93mSQkjm9XArJNlwL9Wsb-1uMIRZr_sY='
                              )} className="card-img-top" alt="..." />
                              <div className="card-body">
                                   <h5 className="card-title">building 7</h5>
                                   <p className="card-text text-light">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                   <a href="#" className="btn btn-success">read more</a>
                              </div>
                         </div>
                    </div>
                    <div data-aos="flip-right" id="card" className="col-lg-3 col-sm-12">
                         <div className="card bg-success" >
                              <img id="man" src={('https://media.istockphoto.com/photos/home-design-picture-id1319742252?k=20&m=1319742252&s=612x612&w=0&h=0DqOB4RksVRGLux6dDGfu06RiWAsDVfvcCOPxetCUzU=')} className="card-img-top" alt="..." />
                              <div className="card-body">
                                   <h5 className="card-title">building 8</h5>
                                   <p className="card-text text-light">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                   <a href="#" className="btn btn-success">read more</a>
                              </div>
                         </div>
                    </div>

               </div>
          </>

     )
}

export default Collections;