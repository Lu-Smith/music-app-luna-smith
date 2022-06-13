import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Note from "./musicnote.png";
import "./Animation.css";

export default function Animation() {
  const [flip, set] = useState(false);
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 400,
    onRest: () => set(!flip),
  });

  return (
    <animated.h1 style={props}>
      <img src={Note} alt="music not by Luna Smith" className="musicnote" />
    </animated.h1>
  );
}
