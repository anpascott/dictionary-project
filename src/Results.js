import React from "react";
import ReactDOM from "react-dom";
import Meaning from "./Meaning.js";
import ReactAudioPlayer from 'react-audio-player';

export default function Results (props) {

if (props.results) {

  return (
    <div className="Results">
    <h1>{props.results.word}</h1>
    <h2>{props.results.phonetics[0].text}</h2>
    <ReactAudioPlayer
  src={props.results.phonetics[0].audio}
  controls
/>

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