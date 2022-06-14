import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import SmallNote from "./musicnotesmall.png";
import "./ThirdAnimation.css";

export default function ThirdAnimation() {
  const [flip, set] = useState(false);
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 250,
    onRest: () => set(!flip),
  });

  return (
    <animated.h1 style={props}>
      <img
        src={SmallNote}
        alt="music not by Luna Smith"
        className="thirdmusicnote"
      />
    </animated.h1>
  );
}
