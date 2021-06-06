import React from "react";
import "./Synonyms.css";

export default function Synonyms (props) {
  if (props.synonyms) {
  return (
    <ul className="Synonyms">
      <div className="row">
{props.synonyms.map(function( synonym,index )
{
return (
        <div className="col-auto" key={index}>
          <li>
         {synonym}
         </li>
          </div>
);
})} 
     </div>
    </ul>
  );
} else {
  return null;
}
}