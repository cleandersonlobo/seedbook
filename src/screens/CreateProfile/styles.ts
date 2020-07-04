import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: ${props => props.theme.spacing.medium}px;
  justify-content: center;
`;

export const ContentHeader = styled.View`
  justify-content: center;
  align-items: center;
  height: 160px;
`;

interface PText {
  size?: string;
}

export const Description = styled.Text<PText>`
  font-size: ${props => props.theme.fontSize[props.size || 'small']}px;
  line-height: ${props => props.theme.fontSize.large}px;
  text-align: center;
`;
