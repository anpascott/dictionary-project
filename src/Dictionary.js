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
      <h1 className="title display-2"> 
      English Dictionary 
      </h1>
      <section>
      < div className="search-engine">
          <form onSubmit={search}>
          <div className="row">
            <div className="col-auto">
              <input
                type="search"
                placeholder="Enter a word to discover its meaning..."
                className="search form-control"
                autoFocus="on"
                onChange={updateKeyword}
              />
            </div>
            <div className="col-auto">
              <input
                type="submit"
                value="Search"
                className="btn btn-light"
              />
              
            </div>
          </div>
          </form>
        </div>
        </section>
 <Results results={results}/>
   </div>  
    );
}