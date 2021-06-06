import React from "react";
import Synonyms from "./Synonyms.js";
import "./Meaning.css";

export default function Meaning (props){

  if (props.meaning) {

return (
  <div className="Meaning">
    {props.meaning.map(function( meaning,index) 
    {
      return (
        <section key={index}>
          <span className="display-6"> 
          <strong> {meaning.partOfSpeech} </strong> 
          </span>
{meaning.definitions.map(function( definition,index )
{
return (
        <ul key={index}>
         <li>{definition.definition}</li>
         <div className="example">{definition.example}</div>
         <Synonyms synonyms={definition.synonyms}/>
         </ul>
         
          
);
})}
</section>
);
    })}
    </div>
);
  } else {
    return null;
  }
}
