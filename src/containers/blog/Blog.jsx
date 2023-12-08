import React from 'react'
import {ArtimportsA,ArtimportsB} from './Artimports';
import './blog.css'

const blog = () => {
  return (
    <div className="blog section__padding" id="blog">
    <div className="blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="blog-container">
      <div className="blog-container_groupA">
       <ArtimportsA/>
      </div>
      <div className="blog-container_groupB">
        <ArtimportsB/>
      </div>
    </div>
  </div>
  )
}

export default blog