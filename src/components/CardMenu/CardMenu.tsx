import React from 'react';
import { View } from 'react-native';
import { useMenuIconSvg, useHandleNavigation } from 'hooks';
import { Content, Title, Subtitle, SeparatorLine, CircleRight } from './styles';

interface Props {
  icon: string;
  color: string;
  title: string;
  subtitle: string;
  iconSize?: number;
  textColor?: string;
  textSizes?: {
    title: string;
    subtitle: string;
  };
  customColor?: string | undefined;
  onPress?: () => void;
  style?: any;
}

const CardMenu: React.FC<Props> = ({
  icon = 'editora',
  iconSize = 65,
  color = 'purple',
  textColor = 'dark',
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
      {...btnProps}
      customColor={customColor}
      onPress={handleNavigate}
    >
      <View style={{ flex: 1 }}>
        <Title color={textColor} fontSize={textSizes.title}>
          {title || ''}
        </Title>
        <SeparatorLine />
        <Subtitle color={textColor} fontSize={textSizes.subtitle}>
          {subtitle || ''}
        </Subtitle>
      </View>
      <CircleRight color={color} customColor={customColor}>
        {Icon ? <Icon height={iconSize} width={iconSize} /> : null}
      </CircleRight>
    </Content>
  );
};

export default CardMenu;
