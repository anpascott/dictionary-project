import React, { useState } from "react";
import Axios from "axios";
import "./Dictionary.css";
import axios from "axios";
import "./WordSearch.js";

export default function Dictionary () {

let [keyword, setKeyword] = useState("");
let [wordInfo, setWordInfo] = useState( { ready:false } );

    function handleResponse (response){
      setWordInfo({
      ready: true,
      // word: response.data.word,
      // phonetics: response.data.phonetics[0].text,
      // audio: response.data.phonetics[0].audio,
    });
    }

  function search (event){
    event.preventDefault();
    let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`
    axios.get(apiUrl).then(handleResponse);
  }

  function updateKeyword (event) {
  setKeyword(event.target.value);
    
  }
  if (wordInfo.ready) {
    return (
     <div className="Dictionary">
<h1 className="title">
Dictionary
  </h1>
< div className="search-engine">
  <div className="row row-cols-lg-auto g-3 align-items-center">
  <div className="col-md-9">
  <form  onSubmit={search}>
    <input type="Search" autoFocus={true} placeholder="Type a word" onChange={updateKeyword}/>
  </form>
  </div>
    <div className="col-md-3">
  <button type="button" className="btn btn-light" onClick={search}>Search</button>
  </div>
  </div>
  </div>
 <h2> Searching for {keyword} </h2>
 {/* <WordSearch info={wordInfo}/> */}
   </div>  
    );
  } 
  else {
  return (
  <div className="Dictionary">
<h1 className="title">
False
  </h1>
< div className="search-engine">
  <div className="row row-cols-lg-auto g-3 align-items-center">
  <div className="col-md-9">
  <form onSubmit={search}>
    <input type="Search" autoFocus={true} placeholder="Type a word" onChange={updateKeyword}/>
  </form>
  </div>
    <div className="col-md-3">
  <button type="button" className="btn btn-light" onClick={search}>Search</button>
  </div>
  </div>
  </div>
   </div>
  );
}
}