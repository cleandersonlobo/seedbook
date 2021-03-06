import React, { useContext } from 'react';
import IconAdd from 'assets/svg/search_book.svg';
import { ThemeContext } from 'styled-components';
import { Button } from './styles';

const ButtonFindBook: React.FC<{ color?: string }> = ({ color, ...props }) => {
  const themeContext = useContext(ThemeContext);
  themeContext.colors;
  return (
    <Button {...props}>
      <IconAdd
        height={115}
        fillMain={themeContext.colors[color || 'purple'].main}
        fillShadow={themeContext.colors[color || 'purple'].main}
        fillLight={themeContext.colors[color || 'purple'].light}
      />
    </Button>
  );
};

export default ButtonFindBook;
