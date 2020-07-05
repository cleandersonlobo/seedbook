import styled from 'styled-components/native';
import { lighten, darken } from 'polished';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { DefaultTheme } from '../../styles/styled.d';

IconMaterialCommunityIcons.loadFont();

export const Icon = styled(IconMaterialCommunityIcons)`
  color: ${props => props.theme.colors.text.dark};
`;

const getplaceholderTextColor = (theme: DefaultTheme): string => {
  if (theme.type === 'light') return lighten(0.3, theme.colors.text.dark);
  return darken(0.3, theme.colors.text.dark);
};

export const NumberPage = styled.Text`
  color: ${props => props.theme.colors.text.dark};
  font-weight: bold;
`;

export const Input = styled.TextInput.attrs(props => ({
  placeholderTextColor: getplaceholderTextColor(props.theme),
}))`
  color: ${props => props.theme.colors.text.dark};
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
