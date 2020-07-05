import styled from 'styled-components/native';
import { darken } from 'polished';

interface ContentCharacterProps {
  color?: string;
  size?: number;
}
export const ContentCharacter = styled.TouchableOpacity<ContentCharacterProps>`
  width: ${props => props.size || 88}px;
  height: ${props => props.size || 88}px;
  justify-content: center;
  align-items: center;
  border-radius: ${props => props.size || 88}px;
  background-color: ${props =>
    darken(0.1, props.theme.colors[props.color || 'purple'].main)};
`;
