import React from 'react';
import { View } from 'react-native';
import MascoteLogo from 'assets/svg/name_logo.svg';
import { SafeAreaContainer } from 'styles';

const Loading: React.FC = () => {
  return (
    <SafeAreaContainer>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <MascoteLogo
          fillMain="#A55FEE"
          fillShadow="#D0A5FD"
          fillLight="#EDE0F9"
        />
      </View>
    </SafeAreaContainer>
  );
};

export default Loading;
