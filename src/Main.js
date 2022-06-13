import React from "react";
import "./Main.css";

export default function Main() {
  return (
    <div className="Main">
      <form class="flex mx-auto">
        <input
          type="search"
          placeholder="type here"
          className="form-control input"
        />

        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>
    </div>
  );
}
