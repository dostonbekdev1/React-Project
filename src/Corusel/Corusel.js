import React from "react";
import './Corusel.css';
// import 'bootstrap/js/dist/carousel';

const Corusel = () => {
     return(
     <>     
         
          <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="true">
               <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1">
                         
                    </button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
               </div>
               <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img id="imgItem" src={require('../assets/1building.jpg')} className="d-block w-100" alt="please be patient" />
                         
                         <div className="carousel-caption d-none d-md-block">
                              <h1>Here there are a lot of buildings</h1>
                              <p  className="lead">This city is so pupular around the world</p>
                         </div>
                    </div>
                    <div className="carousel-item">
                    <img style={{backgroundPosition:'center center'}} id="imgItem" src={require('../assets/2building.jpg')} className="d-block w-100" alt="please be patient" />
                         <div className="carousel-caption d-none d-md-block">
                              <h1>Relax by seeing these buildings</h1>
                              <p  className="lead">You can find so different buildings</p>
                         </div>
                    </div>
                    <div className="carousel-item">
                    <img id="imgItem" src={require('../assets/3building.jpg')} className="d-block w-100" alt="please be patient" />
                         <div className="carousel-caption d-none d-md-block">
                              <h1>Third Place</h1>
                              <p className="lead">See outstanding buildings</p>
                         </div>
                    </div>
               </div>
               <button  className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span  className="visually-hidden ps-0"></span>
               </button>
               <button  className="carousel-control-next" type="button text-succeess" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
               </button>
          </div>
     </>
     )
}

export default Corusel