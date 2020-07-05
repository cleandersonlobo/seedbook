import styled from 'styled-components/native';
import { darken } from 'polished';

export const Content = styled.TouchableOpacity<StyledProps>`
  flex-direction: row;
  padding: 20px;
  justify-content: center;
  align-items: flex-start;
  background-color: ${props =>
    props.theme.colors[props.color || 'purple'].light};
  border-radius: 20px;
  box-shadow: 0px 2px 1px
    ${props => darken(0.1, props.theme.colors[props.color || 'purple'].light)};
`;

export const CircleRight = styled.View<StyledProps>`
  width: 100px;
  height: 100px;
  margin-left: 15px;
  background-color: ${props =>
    props.theme.colors[props.color || 'purple'].main};
  justify-content: center;
  align-items: center;
  border-radius: 100px;
`;

export const Title = styled.Text`
  color: ${props => props.theme.colors.dark};
  font-weight: bold;
  font-size: ${props => props.theme.fontSize.medium}px;
  line-height: ${props => props.theme.fontSize.medium}px;
`;
export const Subtitle = styled.Text`
  color: ${props => props.theme.colors.dark};
  font-size: ${props => props.theme.fontSize.tiny}px;
  line-height: ${props => props.theme.fontSize.medium}px;
`;

export const SeparatorLine = styled.Text`
  height: 10px;
`;
