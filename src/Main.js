import React, { useState } from "react";
import "./Main.css";
import axios from "axios";
import HandleResults from "./HandleResults";
import Animation from "./Animation";
import SecondAnimation from "./SecondAnimation";
import DoubleAnimation from "./DoubleAnimation";
import ThirdAnimation from "./ThirdAnimation";
import DoubleSecondAnimation from "./DoubleSecondAnimation";

export default function Main() {
  let [musicSearch, setMusicSearch] = useState("Life Story");
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
        setResultSearch(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }
  if (resultSearch) {
    return (
      <div className="Main">
        <form className="flex mx-auto">
          <input
            type="search"
            placeholder="type a title or an artist.."
            className="form-control input"
            onChange={search}
          />
          <button type="submit" className="btn" onClick={handleSearch}>
            Search
          </button>
        </form>
        <HandleResults data={resultSearch} />
      </div>
    );
  } else {
    return (
      <div className="Main">
        <form className="flex mx-auto">
          <input
            type="search"
            placeholder="type a title or an artist.."
            className="form-control input"
            onChange={search}
          />
          <button type="submit" className="btn" onClick={handleSearch}>
            Search
          </button>
        </form>
        <SecondAnimation />
        <Animation />
        <DoubleAnimation />
        <ThirdAnimation />
        <DoubleSecondAnimation />
      </div>
    );
  }
}
