import React from 'react';
import { View } from 'react-native';
import { Character } from 'components';
import { gloablStyles } from 'styles';
import { ContentCharacter, Description } from './styles';

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
        <Description size="xtiny">{usuario}</Description>
      </View>
      <View style={{ width: 20 }} />
    </>
  );
};

export default BtnCircleFirend;
