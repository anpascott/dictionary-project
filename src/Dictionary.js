import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results.js";

export default function Dictionary () {

let [keyword, setKeyword] = useState("");
let [results, setResults] = useState(null);

    function handleResponse (response){
      setResults(response.data[0]);
    }

  function search (event){
    event.preventDefault();
    let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`
    axios.get(apiUrl).then(handleResponse);
  }

  function updateKeyword (event) {
  setKeyword(event.target.value);   
  }
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
 <Results results={results}/>
   </div>  
    );
}