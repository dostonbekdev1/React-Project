import React from "react";
import './Cards.css'


function Cards() {
     return (

          <div id="container" className="container">
               <div className="row mt-5 mb-5 justify-content-around">
                    <div id="col" className="col-3">
                         <div className="card" style={{ width: "18rem" }}>
                              <img src={('https://images.unsplash.com/photo-1572883454114-1cf0031ede2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YnVpbGRpbmdzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60')} className="card-img-top" alt="..." />
                              <div className="card-body">
                                   <h5 className="card-title">building 1</h5>
                                   <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                   <a href="#" className="btn btn-success">read more</a>
                              </div>
                         </div>
                    </div>
                    <div id="col" className="col-3">
                         <div className="card" style={{ width: "18rem" }}>
                              <img src={('https://images.unsplash.com/photo-1462396240927-52058a6a84ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJ1aWxkaW5nc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60')} className="card-img-top" alt="..." />
                              <div className="card-body">
                                   <h5 className="card-title">building 2</h5>
                                   <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                   <a href="#" className="btn btn-success">read more</a>
                              </div>
                         </div>
                    </div>
                    <div id="col" className="col-3">
                         <div className="card" style={{ width: "18rem" }}>
                              <img src={('https://images.unsplash.com/photo-1486175060817-5663aacc6655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJ1aWxkaW5nc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60  ')} className="card-img-top" alt="..." />
                              <div className="card-body">
                                   <h5 className="card-title">building 3</h5>
                                   <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                   <a href="#" className="btn btn-success">read more</a>
                              </div>
                         </div>
                    </div>
                    <div id="col" className="col-3">
                         <div className="card" style={{ width: "18rem" }}>
                              <img src={('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YnVpbGRpbmdzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60')} className="card-img-top" alt="..." />
                              <div className="card-body">
                                   <h5 className="card-title">building 4</h5>
                                   <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                   <a href="#" className="btn btn-success">read more</a>
                              </div>
                         </div>
                    </div>
                  </div>
          </div>
     )
}

export default Cards;