import React, { useContext, useCallback } from 'react';
import { View, ScrollView } from 'react-native';
import { ThemeContext } from 'styled-components';
import IconEraser from 'assets/icons/eraser.svg';
import { CanvasContenxt } from 'contexts';
import Animated from 'react-native-reanimated';
import { ToolCard, PaletteCard, ButtonOpacity, RowColors } from './styles';
import CircleButton from './CircleButton';
import ButtonStroke from './ButtonStroke';

const ToolPalette: React.FC = () => {
  const { colors } = useContext(ThemeContext);
  const { canvasRef, translateX, closePalette } = useContext(CanvasContenxt);

  const handleOnClearAll = useCallback(() => {
    canvasRef.current.clear();
    closePalette(false);
  }, [canvasRef, closePalette]);

  return (
    <Animated.View
      style={{
        position: 'absolute',
        right: 0,
        transform: [{ translateX }],
        zIndex: 1,
      }}
    >
      <ToolCard>
        <ScrollView>
          <View style={{ height: 58 }} />
          <PaletteCard>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                paddingVertical: 10,
              }}
            >
              <ButtonStroke
                size={20}
                stroke={3}
                borderColor="#000000"
                color="#ffffff"
              />
              <ButtonStroke
                size={20}
                stroke={5}
                borderColor="#000000"
                color="#ffffff"
              />
              <ButtonStroke
                size={20}
                stroke={7}
                borderColor="#000000"
                color="#ffffff"
              />
            </View>

            <ButtonOpacity onPress={handleOnClearAll}>
              <IconEraser />
            </ButtonOpacity>
            <View>
              <RowColors>
                <CircleButton size={25} color="#2d3436" />
                <CircleButton size={25} color="#bdc3c7" />
              </RowColors>
              <RowColors>
                <CircleButton size={25} color={colors.purple.main} />
                <CircleButton size={25} color={colors.blue.main} />
              </RowColors>
              <RowColors>
                <CircleButton size={25} color={colors.yellow.main} />
                <CircleButton size={25} color={colors.green.main} />
              </RowColors>
              <RowColors>
                <CircleButton size={25} color="#e74c3c" />
                <CircleButton size={25} color="#e67e22" />
              </RowColors>
            </View>
          </PaletteCard>
        </ScrollView>
      </ToolCard>
    </Animated.View>
  );
};

export default React.memo(ToolPalette);
