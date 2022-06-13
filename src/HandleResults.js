import React from "react";
import "./HandleResults.css";

export default function HandleResults(props) {
  console.log(props.data.tracks.hits);
  if (props.data !== null) {
    return (
      <div className="HandleResults">
        {props.data.tracks.hits.map(function (song, index) {
          return (
            <div key={index} className="Track">
              <div className="Title">{song.track.title}</div>
              <div className="Subtitle">{song.track.subtitle}</div>
              <div className="Video">
                <a
                  href={song.track.url}
                  className="Url"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Video
                </a>
              </div>
              <img
                src={song.track.images.coverart}
                className="Image"
                alt={song.track.title}
              />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
