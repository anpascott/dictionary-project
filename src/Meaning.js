import React from "react";
import Synonyms from "./Synonyms.js";
import "./Meaning.css";

export default function Meaning (props){
return (
  <div className="meaning">
    <section>
<span className="display-6"> <strong> {props.meaning.partOfSpeech} </strong> </span>
{props.meaning.definitions.map(function( definition,index )
{
return (
        <ul key={index}>
         <li>{definition.definition}</li>
         <div className="example">{definition.example}</div>
         <div className="synonyms"> <Synonyms synonyms={definition.synonyms} /> </div>
         </ul>
          
);
})}
</section>
  </div>
);

}