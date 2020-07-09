import React, { useState, useCallback, useEffect, useMemo } from 'react';
import { View, TouchableOpacity, Keyboard } from 'react-native';
import Animated, { Easing } from 'react-native-reanimated';
import { SketchCanvas } from '@terrylinla/react-native-sketch-canvas';
import IconPaint from 'assets/svg/paint.svg';
import { gloablStyles } from 'styles';
import { ToolPalette } from 'components';
import { CanvasContenxt } from 'contexts';

import { Icon } from './styles';

interface StateProps {
  strokeWidth: number;
  colorSelected: string;
  eraser: boolean;
}
const { Value, timing } = Animated;

const Canvas: React.FC = () => {
  const canvasRef = React.createRef();
  const [visible, setVisible] = useState(null);
  const translateX = useMemo(() => new Value(100), []);
  const opacity = translateX.interpolate({
    inputRange: [0, 100],
    outputRange: [1, 0.8],
    extrapolate: Animated.Extrapolate.CLAMP,
  });

  const [state, setState] = useState<StateProps>({
    strokeWidth: 5,
    colorSelected: '#A55FEE',
    eraser: false,
  });

  useEffect(() => {
    const runAction = (): void => {
      const toValue = visible ? 0 : 100;
      const config = {
        duration: 300,
        toValue,
        easing: Easing.inOut(Easing.ease),
      };
      const runAnimation = timing(translateX, config);

      runAnimation.start();
    };
    if (visible !== null) runAction();
  }, [visible]);
  const handleSetState = useCallback(values => {
    setState(vals => ({ ...vals, ...values }));
  }, []);

  const handleOnPalette = useCallback(value => {
    setVisible(value);
  }, []);

  const handleOnPressPalette = useCallback(() => {
    Keyboard.dismiss();
    setVisible((val): SetStateAction<null> => (val === null ? true : !val));
  }, []);

  const onStrokeStart = useCallback(() => {
    if (visible) handleOnPalette(false);
    Keyboard.dismiss();
  }, [handleOnPalette, visible]);

  return (
    <>
      <View
        style={[
          gloablStyles.alignCenter,
          {
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 30,
            paddingVertical: 5,
          },
        ]}
      >
        <TouchableOpacity>
          <Icon name="microphone" size={40} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="camera" size={40} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onStrokeStart}>
          <Icon name="pencil" size={40} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1.1,
          borderColor: 'black',
          borderWidth: 2,
          backgroundColor: 'white',
        }}
      >
        <Animated.View
          style={[
            {
              position: 'absolute',
              right: 0,
              opacity,
              zIndex: 2,
              elevation: 2,
            },
          ]}
        >
          <TouchableOpacity
            style={[
              {
                right: 20,
                top: 0,
              },
            ]}
            onPress={handleOnPressPalette}
          >
            <IconPaint />
          </TouchableOpacity>
        </Animated.View>
        <CanvasContenxt.Provider
          value={{
            canvasRef,
            handleSetState,
            ...state,
            translateX,
            visible,
            closePalette: handleOnPalette,
          }}
        >
          <ToolPalette />
          <SketchCanvas
            ref={canvasRef}
            onStrokeStart={onStrokeStart}
            style={{ flex: 1 }}
            strokeColor={state.colorSelected}
            strokeWidth={state.strokeWidth}
          />
        </CanvasContenxt.Provider>
      </View>
    </>
  );
};

export default React.memo(Canvas);
