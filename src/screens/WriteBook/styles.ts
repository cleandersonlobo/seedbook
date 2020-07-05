import styled from 'styled-components/native';

export const NumberPage = styled.Text`
  color: ${props => props.theme.colors.text.dark};
  font-weight: bold;
`;

export const WordButton = styled.TouchableOpacity`
  background-color: ${props => props.theme.colors.blue.main};
  font-weight: bold;
  padding: 3px 10px;
  border-radius: 10px;
`;

export const WordButtonText = styled.Text`
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSize.tiny}px;
  font-weight: bold;
`;
