import React, { useState } from "react";
import "./Main.css";
import axios from "axios";
import HandleResults from "./HandleResults";

export default function Main() {
  let [musicSearch, setMusicSearch] = useState("bad boys");
  let [resultSearch, setResultSearch] = useState(null);
  function search(response) {
    setMusicSearch(response.target.value);
  }
  function handleSearch(event) {
    event.preventDefault();
    const options = {
      method: "GET",
      url: "https://shazam.p.rapidapi.com/search",
      params: {
        term: musicSearch,
        locale: "en-US",
        offset: "0",
        limit: "5",
      },
      headers: {
        "X-RapidAPI-Key": "088a2d0d0amsh310e93f2069e6f2p1dde27jsn032a05667de9",
        "X-RapidAPI-Host": "shazam.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setResultSearch(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }
  return (
    <div className="Main">
      <form className="flex mx-auto">
        <input
          type="search"
          placeholder="type here"
          className="form-control input"
          onChange={search}
        />
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSearch}
        >
          Search
        </button>
      </form>
      <HandleResults data={resultSearch} />
    </div>
  );
}
