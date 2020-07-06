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

export const ViewLoading = styled.View<StyledProps>`
  padding: 20px
  border-radius: 20px;
  margin-bottom: 30px;
  height: 305px;
  background-color: ${props => props.theme.colors[props.color || 'blue'].light};
`;

export const Button = styled.TouchableOpacity`
  height: 220px;
  width: 140px;
  border-radius: 5px;
`;

export const Image = styled.Image`
  height: 200px;
  border-radius: 5px;
`;

export const Input = styled.TextInput`
  background-color: ${props => props.theme.colors.light};
  padding: 15px;
  font-size: ${props => props.theme.fontSize.medium}px;
  border: 1px solid #333333;
  border-radius: 20px;
  color: ${props => props.theme.colors.text.dark};
`;
