import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Easing,
  Extrapolate,
  interpolateColor,
} from 'react-native-reanimated';

const SWITCH_BUTTON_PADDING = 4;
const InterpolateXInput = [0, 1];
interface swtichBase {
    onChange: any,
    value:any,
    containerStyle: any,
   // toggleOffColor = '#c3c3c3',
   // toggleOnColor = '#008ECC'
  }
{

  }

const AnimatedSwitchButton = (props: swtichBase) => {
 
    

  const BUTTON_WIDTH = 38;
  const BUTTON_HEIGHT = 22;
  const SWITCH_BUTTON_AREA = BUTTON_HEIGHT - SWITCH_BUTTON_PADDING;
  const [toggled, setToggled] = useState(false);
  const shareValue = useSharedValue(props.value ? 1 : 0);

  const containerScale = {
    height: BUTTON_HEIGHT,
    width: BUTTON_WIDTH,
  };
  const switchScale = {
    height: SWITCH_BUTTON_AREA,
    width: SWITCH_BUTTON_AREA,
  };

  const onChangeToggle = () => {
    setToggled(!toggled);
    props.onChange?.(!toggled);
  };

  const onPressSwitch = () => {
    if (shareValue.value === 0) {
      shareValue.value = withTiming(1, {
        duration: 800,
        easing: Easing.bezier(0.4, 0.0, 0.2, 1),
      });
    } else {
      shareValue.value = withTiming(0, {
        duration: 800,
        easing: Easing.bezier(0.4, 0.0, 0.2, 1),
      });
    }
    onChangeToggle();
  };

  const switchAreaStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(
            shareValue.value,
            InterpolateXInput,
            [0, BUTTON_WIDTH - SWITCH_BUTTON_AREA - 2 * SWITCH_BUTTON_PADDING],
            Extrapolate.CLAMP,
          ),
        },
      ],
      backgroundColor: interpolateColor(shareValue.value, InterpolateXInput, [
        '#c3c3c3',
        '#22CDE4'
      ]),
    };
  });

  return (
    <TouchableOpacity
      onPress={onPressSwitch}
      activeOpacity={1}
      style={[styles.containerStyle, containerScale, props.containerStyle]}>
      <Animated.View
        style={[styles.switchButton, switchScale, switchAreaStyles]}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 500,
    borderColor: '#D8D8D8',
    borderWidth: 1,
  },
  switchButton: {
    backgroundColor: 'red',
    position: 'absolute',
    left: SWITCH_BUTTON_PADDING,
    borderRadius: 100,
  },
});

export default AnimatedSwitchButton;