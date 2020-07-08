import React, { useContext, useMemo, useCallback } from 'react';
import { CanvasContenxt } from 'contexts';
import { ButtonCircle, Circle } from './styles';

interface Props {
  iconSize?: number;
  iconColor?: string;
  onPress?: () => void;
  enableIcon?: boolean | undefined;
  stroke: number;
}
const ButtonStroke: React.FC<Props & StyledProps> = ({
  stroke,
  size,
  ...restProps
}) => {
  const { strokeWidth, colorSelected, handleSetState } = useContext(
    CanvasContenxt,
  );
  const color = useMemo(() => (strokeWidth === stroke ? colorSelected : ''), [
    stroke,
    strokeWidth,
    colorSelected,
  ]);

  const handleOnPress = useCallback(() => {
    handleSetState({ strokeWidth: stroke });
  }, []);
  return (
    <ButtonCircle
      {...restProps}
      size={size}
      color="#fff"
      stroke={2}
      style={{ marginHorizontal: 1 }}
      borderColor={!color ? '#fff' : color}
      onPress={handleOnPress}
    >
      <Circle size={stroke + 3} color={color || '#000'} />
    </ButtonCircle>
  );
};

export default React.memo(ButtonStroke);
