import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary () {

let [keyword, setKeyword] = useState("");

  function search (event){
    event.preventDefault();
    alert(`searching for ${keyword}`);
  }

  function updateKeyword (event) {
  setKeyword(event.target.value);
    
  }
  return (
  <div className="Dictionary">
<h1 className="title">
Dictionary
  </h1>
  <form onSubmit={search}>
    <input type="Search" autofocus={true} placeholder="Type a word" onChange={updateKeyword}/>
  </form>
  </div>
  );
}