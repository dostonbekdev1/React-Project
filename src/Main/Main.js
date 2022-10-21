import React from "react";
import './Main.css' 

const Main = () => {
     return (
                    <div className="row g-0 mt-5">
                         <div id="main" style={{backgroundColor: "#0b121f"}} className="col-lg-6 col-sm-12">
                              <div className="col-sm-12">
                              <h1 id="best" className="display-4 text-light pt-5 ">Buy the Best <br/> Rooms for the <br/> Future</h1></div>
                              <p id="paragraph" className="text-light mt-5">We the are Resideo is the Real estate association helps community people to solve their problem, add benifits and latest facilities</p>
                              <button id="Learn" className="text-light bg-success btn py-3 px-4 btn-sm"><a className="text-light" href="#">Learn More</a></button>
                         </div>

                         <div className="col-lg-6 col-sm-12 bg-light ">
                              <img id="leftImg" style={{ width: '100%' }} src={('https://uploads-ssl.webflow.com/62c3b7111a998e227c8476ea/62c543c5ac098c007d92887c_Hero-Image.png')} />
                         </div>
          </div>
     )
}

export default Main