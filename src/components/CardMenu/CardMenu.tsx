import React from 'react';
import { View } from 'react-native';
import { useMenuIconSvg } from 'hooks';
import { Content, Title, Subtitle, SeparatorLine, CircleRight } from './styles';

interface Props {
  icon: string;
  color: string;
  title: string;
  subtitle: string;
  onPress?: () => void;
  style?: any;
}

const CardMenu: React.FC<Props> = ({
  icon = 'editora',
  color = 'purple',
  title,
  subtitle,
  ...btnProps
}) => {
  const { Icon } = useMenuIconSvg({ name: icon });
  return (
    <Content color={color} {...btnProps}>
      <View style={{ flex: 1 }}>
        <Title>{title || ''}</Title>
        <SeparatorLine />
        <Subtitle>{subtitle || ''}</Subtitle>
      </View>
      <CircleRight color={color}>
        {Icon ? <Icon height={65} /> : null}
      </CircleRight>
    </Content>
  );
};

export default CardMenu;
