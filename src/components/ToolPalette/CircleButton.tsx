import React, { useContext, useMemo, useCallback } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { CanvasContenxt } from 'contexts';
import { ButtonCircle } from './styles';

Icon.loadFont();

interface Props {
  iconSize?: number;
  iconColor?: string;
  onPress?: () => void;
}
const CircleButton: React.FC<Props & StyledProps> = ({
  iconSize = 14,
  iconColor = '#ffffff',
  color,
  ...restProps
}) => {
  const { colorSelected, handleSetState } = useContext(CanvasContenxt);
  const isSelected = useMemo(() => colorSelected === color, [
    colorSelected,
    color,
  ]);
  const handleOnPress = useCallback(() => {
    handleSetState({ colorSelected: color });
  }, [color, handleSetState]);
  return (
    <ButtonCircle
      color={color}
      {...restProps}
      selected={isSelected}
      onPress={handleOnPress}
    >
      {isSelected ? (
        <Icon name="check" color={iconColor} size={iconSize} />
      ) : null}
    </ButtonCircle>
  );
};

export default React.memo(CircleButton);
