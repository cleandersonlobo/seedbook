import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import IconMascote from 'assets/svg/mascote.svg';
import IconLeft from 'assets/svg/left_icon.svg';
import IconRight from 'assets/svg/right_icon.svg';
import { useNavigation } from '@react-navigation/native';
import { Container } from './styles';

interface Props {
  leftOnPress?: () => void;
  rightOnPress?: () => void;
}

const BottomMascoteBar: React.FC<Props> = ({ leftOnPress, rightOnPress }) => {
  const navigation = useNavigation();
  function handleOnLeftPress(): void {
    if (leftOnPress) leftOnPress();
    else navigation.goBack();
  }

  function handleOnRightPress(): void {
    if (rightOnPress) rightOnPress();
  }

  return (
    <Container>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 30,
        }}
      >
        <TouchableOpacity onPress={handleOnLeftPress}>
          <IconLeft />
        </TouchableOpacity>
        <View>
          <IconMascote />
        </View>
        <TouchableOpacity onPress={handleOnRightPress}>
          <IconRight />
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default BottomMascoteBar;
