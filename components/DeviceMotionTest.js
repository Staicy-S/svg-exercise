import * as React from "react";
import { View } from "react-native";
import Svg, { Circle } from "react-native-svg";
import { useState, useEffect, useRef } from "react";
import * as Sensors from "expo-sensors";

export function DeviceMotionTest() {
  const [location, setLocation] = useState({
    x: 0,
    y: 0,
  });
  const CONFIG = { ballWidth: 150, ballHeight: 150 };

  const requestDeviceMotionPermission = async () => {
    const { granted } = await Sensors.DeviceMotion.getPermissionsAsync();
    if (!granted) {
      console.log("Device motion sensor permission denied.");
    }
  };

  useEffect(() => {
    requestDeviceMotionPermission();
  }, []);

  // Function to check if device motion sensor is available
  const checkDeviceMotionAvailability = async () => {
    const available = await Sensors.DeviceMotion.isAvailableAsync();
    if (!available) {
      console.log("Device motion sensor is not available on this device.");
    }
  };

  useEffect(() => {
    checkDeviceMotionAvailability();
  }, []);

  // Create a reference to the device motion listener
  const deviceMotionListener = useRef(null);

  // Function to handle device motion updates
  const handleDeviceMotion = (data) => {
    // Update the position of the ball based on device motion data
    // You can use data.rotation for tilting the device
    // Example: Update the x and y position based on device motion
    const newX = location.x + data.rotation.gamma * 10; // Adjust the multiplier as needed
    const newY = location.y + data.rotation.beta * 10; // Adjust the multiplier as needed
    setLocation({ x: newX, y: newY });
  };

  useEffect(() => {
    // Add a listener for device motion updates when the component mounts
    deviceMotionListener.current =
      Sensors.DeviceMotion.addListener(handleDeviceMotion);

    // Remove the listener when the component unmounts
    return () => {
      if (deviceMotionListener.current) {
        deviceMotionListener.current.remove();
      }
    };
  }, []);

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
