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

export const Container = styled.View`
  padding: ${props => props.theme.spacing.medium}px;
  justify-content: center;
`;

export const CardBooks = styled.View<StyledProps>`
  padding: 20px
  border-radius: 20px;
  margin-bottom: 30px;
  background-color: ${props => props.theme.colors[props.color || 'blue'].light};
`;

export const CardBooksBody = styled.View<StyledProps>`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

export const CardBooksTitle = styled.Text<StyledProps>`
  font-weight: 600;
  font-size: ${props => props.theme.fontSize[props.size || 'small']}px;
  line-height: 24px;
  text-align: center;
  margin-bottom: 20px;
  color: ${props => props.theme.colors[props.color || 'blue'].main};
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
