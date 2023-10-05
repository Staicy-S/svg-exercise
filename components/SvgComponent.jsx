import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import { Text } from "react-native";

export default function SvgComponent() {
  return (
    <>
      <Text>Crazy Micky Maus</Text>

      <Svg height="60%" width="60%" viewBox="0 0 100 100">
        <Circle
          cx="20"
          cy="10"
          r="15"
          stroke="hotpink"
          strokeWidth="1.5"
          fill="blue"
        />
        <Circle
          cx="80"
          cy="10"
          r="15"
          stroke="hotpink"
          strokeWidth="1.5"
          fill="blue"
        />
        <Circle
          cx="50"
          cy="50"
          r="34"
          stroke="blue"
          strokeWidth="2.5"
          fill="hotpink"
        />
        <Circle
          cx="36"
          cy="40"
          r="3"
          stroke="hotpink"
          strokeWidth="1.5"
          fill="black"
        />
        <Circle
          cx="62"
          cy="40"
          r="3"
          stroke="hotpink"
          strokeWidth="1.5"
          fill="black"
        />
        <Path
          d="M35 60 A20 20, 0, 0, 0, 65 60"
          fill="none"
          stroke="black"
          strokeWidth="2"
        />

        {/* <Rect
        x="15"
        y="15"
        width="70"
        height="70"
        stroke="red"
        strokeWidth="2"
        fill="yellow"
      /> */}
      </Svg>
    </>
  );
}
