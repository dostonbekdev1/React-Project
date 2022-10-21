import React from 'react'
import '../Blog/Blog.css'

const Blog = (props) => {
     return (
          <div style={{ backgroundColor: "#0b121f" }} className='my-5 py-2'>
               <div className='container my-5'>
                    <div className='row'>
                         <div className='col-lg-9 col-sm-12'><h1 className='h1 text-success text-center'>{props.title}</h1></div>
                         <div className='col-lg-3 col-sm-12'>
                              <button className='btn btn-success'>{props.btn}</button>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Blog



