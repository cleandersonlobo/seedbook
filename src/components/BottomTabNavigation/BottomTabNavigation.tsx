import React, { useCallback } from 'react';
import { View, TouchableOpacity } from 'react-native';
import IconHome from 'assets/svg/home.svg';
import IconLeft from 'assets/svg/left_icon.svg';
import IconRight from 'assets/svg/right_icon.svg';
import { useNavigation } from '@react-navigation/native';
import { Container } from './styles';

interface Props {
  leftOnPress?: () => void;
  centerOnPress?: () => void;
  rightOnPress?: () => void;
}

const BottomTabNavigation: React.FC<Props> = ({
  leftOnPress,
  rightOnPress,
  centerOnPress,
}) => {
  const navigation = useNavigation();

  const handleOnLeftPress = useCallback((): void => {
    if (leftOnPress) leftOnPress();
    else navigation.goBack();
  }, [navigation, leftOnPress]);

  const handleOnRightPress = useCallback((): void => {
    if (rightOnPress) rightOnPress();
  }, [rightOnPress]);

  const handleOnCenterPress = useCallback((): void => {
    if (centerOnPress) centerOnPress();
    else navigation.navigate('Menu');
  }, [centerOnPress, navigation]);
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
        <TouchableOpacity onPress={handleOnCenterPress}>
          <IconHome fillLight="#EDE0F9" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleOnRightPress}>
          <IconRight />
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default BottomTabNavigation;
