import * as React from "react";
import { View, PanResponder, Animated } from "react-native";
import Svg, { Circle } from "react-native-svg";

export function SvgMoveableCircle() {
  const [circlePosition, setCirclePosition] = React.useState({
    x: 0,
    y: 0,
  });

  const panResponder = React.useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (_, gestureState) => {
          setCirclePosition({
            x: circlePosition.x + gestureState.dx,
            y: circlePosition.y + gestureState.dy,
          });
        },
      }),
    [circlePosition]
  );

  return (
    <View style={{ flex: 1 }}>
      <Svg height="100%" width="100%" style={{ position: "absolute" }}>
        <Circle
          cx={circlePosition.x + 75} // Adjust the initial position of the circle
          cy={circlePosition.y + 75} // Adjust the initial position of the circle
          r="25%"
          stroke="white"
          strokeWidth="1.5"
          fill="hotpink"
          {...panResponder.panHandlers}
        />
      </Svg>
    </View>
  );
}
