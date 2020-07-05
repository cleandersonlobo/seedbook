import styled from 'styled-components/native';
import { darken, lighten } from 'polished';

export const Content = styled.TouchableOpacity<StyledProps>`
  flex-direction: row;
  padding: 20px;
  justify-content: center;
  align-items: flex-start;
  background-color: ${props =>
    props.customColor
      ? props.customColor
      : props.theme.colors[props.color || 'purple'].light};
  border-radius: 20px;
  box-shadow: 0px 2px 1px
    ${props =>
      props.customColor
        ? lighten(0.2, props.customColor)
        : darken(0.1, props.theme.colors[props.color || 'purple'].light)};
`;

export const CircleRight = styled.View<StyledProps>`
  width: 100px;
  height: 100px;
  margin-left: 15px;
  background-color: ${props =>
    props.customColor
      ? props.customColor
      : props.theme.colors[props.color || 'purple'].main};
  justify-content: center;
  align-items: center;
  border-radius: 100px;
`;

export const Title = styled.Text<StyledProps>`
  color: ${props => props.theme.colors[props.color || 'dark']};
  font-weight: bold;
  font-size: ${props => props.theme.fontSize[props.fontSize || 'medium']}px;

  letter-spacing: 0.5px;
`;
export const Subtitle = styled.Text<StyledProps>`
  color: ${props => props.theme.colors[props.color || 'dark']};
  font-size: ${props => props.theme.fontSize[props.fontSize || 'tiny']}px;
  line-height: 20px;
  font-weight: 500;
  letter-spacing: 0.5px;
`;

export const SeparatorLine = styled.Text`
  height: 10px;
`;
