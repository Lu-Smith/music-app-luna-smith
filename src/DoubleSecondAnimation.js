import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import DoubleNote from "./doublemusicnote.png";
import "./DoubleSecondAnimation.css";

export default function DoubleSecondAnimation() {
  const [flip, set] = useState(false);
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 50,
    onRest: () => set(!flip),
  });

  return (
    <animated.h1 style={props}>
      <img
        src={DoubleNote}
        alt="music not by Luna Smith"
        className="doublesecondmusicnote"
      />
    </animated.h1>
  );
}
