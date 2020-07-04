import styled from 'styled-components/native';

interface TProps {
  selected?: boolean;
}
export const Button = styled.TouchableOpacity<TProps>`
  background: ${props => props.theme.colors.blue.light};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  ${props => (props.selected ? `border: 2px solid #3AAFFF;` : '')}
  justify-content: center;
  align-items: center;
  margin: 15px;
  width: 98px;
  height: 98px;
`;

export const Image = styled.Image`
  width: 78px;
  height: 78px;
`;
