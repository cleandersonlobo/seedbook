import styled from 'styled-components/native';

export const Description = styled.Text<{ size?: string }>`
  font-size: ${props => props.theme.fontSize[props.size || 'tiny']}px;
  color: ${props => props.theme.colors.text.dark};
  text-align: center;
  margin-bottom: 10px;
`;

export const CoinsText = styled.Text`
  font-size: ${props => props.theme.fontSize.large}px;
  color: ${props => props.theme.colors.text.dark};
  text-align: center;
`;
