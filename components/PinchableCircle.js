import * as React from "react";
import { View } from "react-native";
import Svg, { Circle } from "react-native-svg";
import { useState } from "react";
import { GestureDetector, Gesture } from "react-native-gesture-handler";

export function PinchableCircle() {
  const [location, setLocation] = useState({
    x: 0,
    y: 0,
  });

  const initialSize = 150;
  const [size, setSize] = useState(initialSize);

  const pinch = Gesture.Pinch().onChange(({ scale, scaleChange }) => {
    // setSize({ width: width * 2, height: height * 2 });
    // setSize({ width: 2 * size.width, height: 2 * size.height });
    // size = {width++20, height++20}
    // setSize(size);
    const sizeAfterPinch = initialSize * scale;
    console.log(sizeAfterPinch);
    setSize(sizeAfterPinch);
    console.log(scale, scaleChange);
    console.log("being pinched");
  });

  const gesture = Gesture.Manual()
    .onTouchesDown(({ allTouches }) => {
      setLocation({ x: allTouches[0].x, y: allTouches[0].y });
    })
    .onTouchesMove(({ allTouches }) => {
      setLocation({ x: allTouches[0].x, y: allTouches[0].y });
    });

  return (
    <GestureDetector gesture={gesture}>
      <GestureDetector gesture={pinch}>
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
            height={size}
            width={size}
            style={{
              position: "absolute",
              top: Math.round(location.y - size / 2),
              left: Math.round(location.x - size / 2),
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
    </GestureDetector>
  );
}
