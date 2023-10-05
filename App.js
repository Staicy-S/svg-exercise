import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SvgComponent from "./components/SvgComponent";
import { SvgCircle } from "./components/SvgCircle";
import { SvgMoveableCircle } from "./components/SvgMoveableCircle";
import { PinchableCircle } from "./components/PinchableCircle";
import { DeviceMotionExample } from "./components/DeviceMotionExample.js";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { DeviceMotionTest } from "./components/DeviceMotionTest";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        {/* <SvgComponent /> */}
        {/* <SvgCircle /> */}
        {/* <SvgMoveableCircle /> */}
        {/* <PinchableCircle /> */}
        {/* <DeviceMotionExample /> */}
        <DeviceMotionTest />
        <StatusBar style="auto" />
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
