import React from 'react';
import BackgroundSVG from 'assets/svg/background_form.svg';
import { View } from 'react-native';
import { ContentHeader, Description } from './styles';

const Header: React.FC = () => {
  return (
    <ContentHeader>
      <BackgroundSVG style={{ position: 'absolute', top: -20 }} height={120} />
      <View>
        <Description size="xlarge" style={{ fontWeight: 'bold' }}>
          PERFIL
        </Description>
      </View>
    </ContentHeader>
  );
};

export default Header;
