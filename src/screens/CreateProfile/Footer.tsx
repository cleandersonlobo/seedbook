import React from 'react';
import { View } from 'react-native';
import { Button } from 'components';
import { useNavigation } from '@react-navigation/native';

const Footer: React.FC = () => {
  const navigation = useNavigation();
  function handleNavigate(): void {
    navigation.navigate('Profile');
  }
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
        onPress={handleNavigate}
      />
    </View>
  );
};

export default Footer;
