import * as React from "react";
import { View } from "react-native";
import Svg, { Circle } from "react-native-svg";
import { useState } from "react";
import {
  Accelerometer,
  Barometer,
  DeviceMotion,
  Gyroscope,
  LightSensor,
  Magnetometer,
  MagnetometerUncalibrated,
  Pedometer,
} from "expo-sensors";

export function DeviceMotionExample() {
  const [location, setLocation] = useState({
    x: 0,
    y: 0,
  });
  const CONFIG = { ballWidth: 150, ballHeight: 150 };

  return (
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
          stroke="black"
          strokeWidth="1.5"
          fill="yellow"
        />
      </Svg>
    </View>
  );
}
