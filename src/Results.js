import React from "react";
import ReactAudioPlayer from 'react-audio-player';

export default function Results (props) {

if (props.results) {

  return (
    <section className="Results">
    <span className="display-3 m-1">{props.results.word}</span> <space />
    <span className="display-5 m-1">{props.results.phonetics[0].text}</span>
    <br/>
    <ReactAudioPlayer
    className="m-3"
  src={props.results.phonetics[0].audio}
  controls
/>
</section>    
  );
}
else {
  return null;
}
}