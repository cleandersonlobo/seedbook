import styled from 'styled-components/native';
import { darken } from 'polished';

export const Container = styled.View`
  box-shadow: 0px -2px -2px rgba(0, 0, 0, 0.25);
  background-color: ${props => darken(0.1, props.theme.colors.background)};
  flex: 0.2;
`;
