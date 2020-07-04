import styled from 'styled-components/native';

interface Props {
  spacing?: string;
  color?: string;
  size?: string;
  textSize?: string;
}

export const TouchOpacity = styled.TouchableOpacity<Props>`
  padding: ${props => props.theme.spacing[props.spacing || 'medium']}px;
  background-color: ${props => props.theme.colors[props.color || 'green'].main};
  border-radius: 20px;
  box-shadow: 0px 2px 1px
    ${props => props.theme.colors[props.color || 'green'].shadow};
  margin: 15px 0px;
  width: ${props => props.size || '100%'};
`;

export const Text = styled.Text<Props>`
  font-style: normal;
  font-weight: 800;
  color: ${props => props.theme.colors.text[props.color || 'dark']};
  font-size: ${props => props.theme.fontSize[props.textSize || 'large']}px;
  line-height: 26px;
  text-align: center;
`;
