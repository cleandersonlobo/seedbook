import styled from 'styled-components/native';

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
