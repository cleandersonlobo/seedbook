import React, { useContext } from 'react';
import { View } from 'react-native';
import { AlunoContext } from 'contexts';
import { CharacterButton } from 'components';
import { gloablStyles } from 'styles';
import IconDollar from 'assets/svg/dollar.svg';
import IconMascote from 'assets/svg/mascote.svg';
import { CoinsText } from './styles';

const HeaderDetailsUser: React.FC = () => {
  const { profilepicture } = useContext(AlunoContext);
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <View style={gloablStyles.alignCenter}>
        <CharacterButton btnSize={40} size={28} name={profilepicture} />
      </View>
      <View>
        <IconMascote height={100} />
      </View>
      <View
        style={[
          {
            flexDirection: 'row',
          },
          gloablStyles.alignCenter,
        ]}
      >
        <View>
          <IconDollar height={40} />
        </View>
        <View style={[gloablStyles.alignCenter, { marginLeft: 5 }]}>
          <CoinsText>50</CoinsText>
        </View>
      </View>
    </View>
  );
};

export default HeaderDetailsUser;
