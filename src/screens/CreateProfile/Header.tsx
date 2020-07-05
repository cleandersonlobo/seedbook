import React from 'react';
import BackgroundSVG from 'assets/svg/background_form.svg';
import { View } from 'react-native';
import { ContentHeader, Description } from './styles';

const Header: React.FC = () => {
  return (
    <ContentHeader>
      <BackgroundSVG
        style={{ position: 'absolute', top: 0 }}
        fillLight="#EDE0F9"
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
