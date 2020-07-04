import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { Text as TextDefault } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export const Text = styled(TextDefault)`
  font-family: 'Palanquin';
`;

export const SafeProvider = styled(SafeAreaProvider)`
  background-color: ${props => props.theme.colors.background};
`;
export const SafeAreaContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${props => props.theme.colors.background};
`;

export const gloablStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerStyles: {
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
  },
  headerLeftContainerStyle: {
    paddingLeft: 15,
  },
  alignCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
