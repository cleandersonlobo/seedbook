import React from 'react';
import { View } from 'react-native';
import { Button } from 'components';

const Footer: React.FC<{ onConfirm: () => void }> = ({ onConfirm }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
      }}
    >
      <Button
        spacing="tiny"
        text="CONTINUAR"
        textSize="small"
        size="75%"
        onPress={onConfirm}
      />
    </View>
  );
};

export default Footer;
