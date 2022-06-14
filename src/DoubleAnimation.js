import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import DoubleNote from "./doublemusicnote.png";
import "./DoubleAnimation.css";

export default function DoubleAnimation() {
  const [flip, set] = useState(false);
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 550,
    onRest: () => set(!flip),
  });

  return (
    <animated.h1 style={props}>
      <img
        src={DoubleNote}
        alt="music not by Luna Smith"
        className="doublemusicnote"
      />
    </animated.h1>
  );
}
