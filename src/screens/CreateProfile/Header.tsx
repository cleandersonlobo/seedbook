import React, { useContext } from 'react';
import BackgroundSVG from 'assets/svg/background_form.svg';
import { View } from 'react-native';
import { ThemeContext } from 'styled-components';
import { ContentHeader, Description } from './styles';

const Header: React.FC = () => {
  const { type, colors } = useContext(ThemeContext);
  return (
    <ContentHeader>
      <BackgroundSVG
        style={{ position: 'absolute', top: 0 }}
        fillLight={
          type === 'light' ? colors.purple.light : colors.purple.shadow
        }
      />

      <View>
        <Description size="medium" style={{ fontWeight: 'bold' }}>
          Queremos te conhecer.
        </Description>
        <Description size="medium">Selecione os cartões que mais</Description>
        <Description size="medium">combinam com você.</Description>
      </View>
    </ContentHeader>
  );
};

export default Header;
