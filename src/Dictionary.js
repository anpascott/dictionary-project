import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results.js"; 
import Meaning from "./Meaning.js"; 
import Images from "./Images.js";

export default function Dictionary () {

let [keyword, setKeyword] = useState("");
let [results, setResults] = useState(null);
let [meaning, setMeaning] = useState(null);
let [images, setImages] = useState(null);

    function handleResponse (response){
      setResults(response.data[0]);
      setMeaning(response.data[0].meanings);
      handleImages();
      console.log(response.data[0].meanings);
    }

 function handleImages(event) {   
        const url = `https://api.pexels.com/v1/search?query=${keyword}&per_page=15`;  
        const access_token = '563492ad6f9170000100000105bd6c37933d47cba37c5e53114eb48f';  
        axios.get(url, {  
            headers: {  
                'Authorization': `${access_token}`  
            }  
        }).then(data => {  
            console.log(data);  
            setImages(data.data.photos);  
        })
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
      Dictionary 
      </h1>
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
            <p> Examples: dog, flower, rainbow, cake...</p>
          </div>
          </form>
        </div>
 <Results results={results}/>
 <Images images={images}/>
 <Meaning meaning={meaning}/>
   </div>  
    );
}