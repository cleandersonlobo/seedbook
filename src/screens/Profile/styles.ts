import styled from 'styled-components/native';
import { darken } from 'polished';

interface PText {
  size?: string;
}
export const ContentHeader = styled.View`
  justify-content: center;
  align-items: center;
  height: 100px;
`;

export const Card = styled.View`
  padding: 20px
  border-radius: 20px;
  background-color: ${props => props.theme.colors.blue.light};
`;

export const CardTitle = styled.Text<PText>`
  font-weight: 600;
  font-size: ${props => props.theme.fontSize[props.size || 'small']}px;
  line-height: 24px;
  text-align: center;
  color: ${props => props.theme.colors.blue.main};
`;

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

export const Description = styled.Text<PText>`
  font-size: ${props => props.theme.fontSize[props.size || 'small']}px;
  color: ${props => props.theme.colors.text.dark}
  text-align: center;
  margin-bottom: 10px;
`;

export const UsuarioText = styled.Text<PText>`
  font-size: ${props => props.theme.fontSize[props.size || 'small']}px;
  color: ${props => props.theme.colors.dark}
  text-align: center;
  margin-bottom: 10px;
`;

export const Title = styled.Text<PText>`
  font-size: ${props => props.theme.fontSize[props.size || 'small']}px;
  color: ${props => props.theme.colors.text.dark};
  text-align: center;
  margin-bottom: 10px;
`;
