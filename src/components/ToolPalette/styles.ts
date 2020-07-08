import styled from 'styled-components/native';

export const ToolCard = styled.View`
  background: #f2f2f2;
  border-radius: 10px;
  width: 87px;
  padding-bottom: 15px;
  margin: 0px 5px;
  right: 0;
  justify-content: center;
  align-items: center;
`;

export const PaletteCard = styled.View`
  background: #ffffff;
  justify-content: space-between;
  border-radius: 10px;
  width: 67px;
`;

export const ButtonOpacity = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  margin: 2px;
`;

export const ButtonCircle = styled.TouchableOpacity<
  StyledProps & { selected?: boolean }
>`
  background-color: ${props => props.color || props.theme.colors.black};
  width: ${props => props.size || 20}px;
  height: ${props => props.size || 20}px;
  border-radius: ${props => props.size || 20}px;
  border-width: ${props => props.stroke || 0}px;
  border-color: ${props => props.borderColor || props.theme.colors.black};
  justify-content: center;
  align-items: center;
`;

export const Circle = styled.View<StyledProps>`
  background-color: ${props => props.color || props.theme.colors.white};
  width: ${props => props.size || 20}px;
  height: ${props => props.size || 20}px;
  border-radius: ${props => props.size || 20}px;
  justify-content: center;
  align-items: center;
`;

export const RowColors = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 6px 0px;
`;
