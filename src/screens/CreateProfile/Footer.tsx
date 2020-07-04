import React from 'react';
import { View } from 'react-native';
import { Button } from 'components';

const Footer: React.FC = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
      }}
    >
      <Button spacing="tiny" text="CONTINUAR" textSize="small" size="75%" />
    </View>
  );
};

export default Footer;
