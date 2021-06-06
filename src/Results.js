import React from "react";
import Meaning from "./Meaning.js";
import ReactAudioPlayer from 'react-audio-player';

export default function Results (props) {

if (props.results) {

  return (
    <div className="Results">
      <section>
    <span className="display-3">{props.results.word}</span> <space />
    <span className="display-5">{props.results.phonetics[0].text}</span>
    <br/>
    <ReactAudioPlayer
    className="m-3"
  src={props.results.phonetics[0].audio}
  controls
/>
</section>

    {props.results.meanings.map(function(meaning , index) {
      return (
        
        <div key={index}>
         <Meaning meaning={meaning} />
          </div>
      );
    })}
    </div>
    
  );
}
else {
  return null;
}
}