import React from "react";
import './Images.css';

export default function Images (props) {

if (props.images) {

  return (
 <section className="Images">
 <div className="row">  
{props.images.map(function ( images, index ) {
  return (
<div className="col-4" key={index}> 
<a href={images.src.original} target="_new" rel="nonreferrer">
<img className="img-fluid" src={images.src.tiny} alt={images.photographer} /> 
</a>
  </div>
  );
})}  
  </div> 
  </section>  
  );
}
else {
  return null;
}
}