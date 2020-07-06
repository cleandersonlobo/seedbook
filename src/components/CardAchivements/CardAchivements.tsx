import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useMenuIconSvg, useHandleNavigation } from 'hooks';
import {
  Content,
  Title,
  Subtitle,
  ProgressBar,
  ProgressBarContent,
  CircleRight,
  ProgressText,
  CircleText,
} from './styles';

interface Props {
  icon: string;
  color: string;
  title: string;
  subtitle: string;
  iconSize?: number;
  textSizes?: {
    title: string;
    subtitle: string;
  };
  level: number;
  max: number;
  customColor?: string | undefined;
  onPress?: () => void;
  style?: any;
}

const CardAchivements: React.FC<Props> = ({
  icon = 'editora',
  level,
  max,
  iconSize = 29,
  color = 'purple',
  textSizes = { title: 'medium', subtitle: 'tiny' },
  title,
  subtitle,
  customColor,
  ...btnProps
}) => {
  const [handleNavigate] = useHandleNavigation(title);
  const { Icon } = useMenuIconSvg({ name: icon });
  return (
    <Content
      color={color}
      onPress={handleNavigate}
      customColor={customColor}
      {...btnProps}
    >
      <View style={{ flex: 1 }}>
        <Title color={color} fontSize={textSizes.title}>
          {title || ''}
        </Title>
        <Subtitle color={color} fontSize={textSizes.subtitle}>
          {subtitle || ''}
        </Subtitle>
        <View
          style={{
            marginVertical: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <View style={{ width: '88%', marginRight: 5 }}>
            <ProgressBarContent>
              <ProgressBar
                style={StyleSheet.absoluteFill}
                color={color}
                progress={level * 10}
              />
            </ProgressBarContent>
          </View>
          <View>
            <ProgressText color={color}>
              {level}/{max}
            </ProgressText>
          </View>
        </View>
      </View>
      <CircleRight color={color} customColor={customColor}>
        {Icon ? <Icon height={iconSize} width={iconSize} /> : null}
        <CircleText>LEVEL {level}</CircleText>
      </CircleRight>
    </Content>
  );
};

export default CardAchivements;
