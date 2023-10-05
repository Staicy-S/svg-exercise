import * as React from "react";
import { View } from "react-native";
import Svg, { Circle } from "react-native-svg";
import { useState } from "react";
import { GestureDetector, Gesture } from "react-native-gesture-handler";

export function SvgCircle() {
  const [location, setLocation] = useState({
    x: 0,
    y: 0,
  });

  const CONFIG = { ballWidth: 150, ballHeight: 150 };
  console.debug(location);
  const gesture = Gesture.Manual()
    .onTouchesDown(({ allTouches }) => {
      console.log("x: " + allTouches[0].x);
      console.log("y: " + allTouches[0].y);
      setLocation({ x: allTouches[0].x, y: allTouches[0].y });
    }) //hier will ich den Ball moveable machen
    .onTouchesMove(({ allTouches }) => {
      console.log("x: " + allTouches[0].x);
      console.log("y: " + allTouches[0].y);
      setLocation({ x: allTouches[0].x, y: allTouches[0].y });
    }); //hier soll man die Bewegung nutzen

  return (
    <GestureDetector gesture={gesture}>
      <View
        style={{ width: "100%", height: "100%", backgroundColor: "blue" }}
        onLayout={({ nativeEvent }) =>
          setLocation({
            x: nativeEvent.layout.width / 2,
            y: nativeEvent.layout.height / 2,
          })
        }
      >
        <Svg
          height={CONFIG.ballHeight}
          width={CONFIG.ballWidth}
          style={{
            position: "absolute",
            top: Math.round(location.y - CONFIG.ballHeight / 2),
            left: Math.round(location.x - CONFIG.ballWidth / 2),
          }}
        >
          <Circle
            cx="50%"
            cy="50%"
            r="45%"
            stroke="white"
            strokeWidth="1.5"
            fill="hotpink"
          />
        </Svg>
      </View>
    </GestureDetector>
  );
}
