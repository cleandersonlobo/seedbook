import React, { useContext } from 'react';
import BackgroundSVG from 'assets/svg/background_form.svg';
import { View } from 'react-native';
import { ThemeContext } from 'styled-components';
import { ContentHeader, Title } from './styles';

const Header: React.FC = () => {
  const { type, colors } = useContext(ThemeContext);
  return (
    <ContentHeader>
      <BackgroundSVG
        style={{ position: 'absolute', top: -20 }}
        height={120}
        fillLight={
          type === 'light' ? colors.purple.light : colors.purple.shadow
        }
      />
      <View>
        <Title size="xlarge" style={{ fontWeight: 'bold' }}>
          PERFIL
        </Title>
      </View>
    </ContentHeader>
  );
};

export default Header;
