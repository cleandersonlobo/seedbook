import styled from 'styled-components/native';
import { darken, lighten } from 'polished';

export const Content = styled.TouchableOpacity<StyledProps>`
  flex-direction: row;
  padding: 20px;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
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

export const CircleText = styled.Text<StyledProps>`
  color: ${props => props.theme.colors.dark};
  font-size: 9px;
  line-height: 20px;
  letter-spacing: 0.5px;
`;
export const CircleRight = styled.View<StyledProps>`
  width: 60px;
  height: 60px;
  margin-left: 15px;
  background-color: ${props =>
    props.customColor
      ? props.customColor
      : props.theme.colors[props.color || 'blue'].main};
  justify-content: center;
  align-items: center;
  border-radius: 100px;
`;

export const Title = styled.Text<StyledProps>`
  color: ${props => props.theme.colors[props.color || 'blue'].main};
  font-weight: bold;
  font-size: ${props => props.theme.fontSize[props.fontSize || 'medium']}px;

  letter-spacing: 0.5px;
`;
export const Subtitle = styled.Text<StyledProps>`
  color: ${props => props.theme.colors[props.color || 'blue'].main};
  font-size: ${props => props.theme.fontSize[props.fontSize || 'tiny']}px;
  line-height: 20px;
  font-weight: 500;
  letter-spacing: 0.5px;
`;
export const ProgressBar = styled.View<StyledProps & { progress: number }>`
  background-color: ${props =>
    props.customColor
      ? props.customColor
      : props.theme.colors[props.color || 'blue'].main};
  height: 28px;
  width: ${props => props.progress || 0}%;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  border-top-right-radius: ${props =>
    props.progress <= 19 || props.progress > 80 ? 20 : 0}px;
  border-bottom-right-radius: ${props =>
    props.progress <= 19 || props.progress > 80 ? 20 : 0}px;}
`;

export const ProgressBarContent = styled.View`
  background: #ffe8c2;
  border: 1px solid #000000;
  border-radius: 20px;
  height: 30px;
`;
export const SeparatorLine = styled.View`
  height: 10px;
`;

export const ProgressText = styled.Text<StyledProps>`
  color: ${props => props.theme.colors[props.color || 'blue'].main};
  font-weight: bold;
  font-size: ${props => props.theme.fontSize[props.fontSize || 'small']}px;

  letter-spacing: 0.5px;
`;
