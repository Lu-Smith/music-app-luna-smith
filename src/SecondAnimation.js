import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import SmallNote from "./musicnotesmall.png";
import "./SecondAnimation.css";

export default function SecondAnimation() {
  const [flip, set] = useState(false);
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 200,
    onRest: () => set(!flip),
  });

  return (
    <animated.h1 style={props}>
      <img
        src={SmallNote}
        alt="music note by Luna Smith"
        className="smallmusicnote"
      />
    </animated.h1>
  );
}
