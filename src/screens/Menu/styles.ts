import styled from 'styled-components/native';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

IconMaterialCommunityIcons.loadFont();
export const Container = styled.View`
  padding: ${props => props.theme.spacing.medium}px;
  justify-content: center;
`;

export const Description = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: ${props => props.theme.fontSize.small}px;
  line-height: ${props => props.theme.fontSize.large}px;
  color: ${props => props.theme.colors.text.dark};
  text-align: center;
`;

export const ViewButton = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const ButtonIcon = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

export const Icon = styled(IconMaterialCommunityIcons)`
  color: ${props => props.theme.colors.text.dark};
  font-size: 40px;
`;
