import React from 'react';
import { View } from 'react-native';
import { Character } from 'components';
import { gloablStyles } from 'styles';
import { ContentCharacter, UsuarioText } from './styles';

interface Props {
  colega: ColegasProps;
  usuario: string;
}

const BtnCircleFirend: React.FC<Props> = ({ colega, usuario }) => {
  return (
    <>
      <View style={gloablStyles.alignCenter}>
        <ContentCharacter size={58} color="blue">
          <Character name={colega.profilepicture} width={40} height={40} />
        </ContentCharacter>
        <UsuarioText size="xtiny">{usuario}</UsuarioText>
      </View>
      <View style={{ width: 20 }} />
    </>
  );
};

export default BtnCircleFirend;
