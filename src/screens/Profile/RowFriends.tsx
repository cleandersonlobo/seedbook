import React, { useCallback, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { Character } from 'components';
import { gloablStyles } from 'styles';
import { ContentCharacter, Description } from './styles';

interface Props {
  colegas: ColegasProps[];
  usuario: string;
}

const RowFriends: React.FC<Props> = ({ colegas, usuario }) => {
  return (
    <>
      {colegas.map(item => (
        <>
          <View style={gloablStyles.alignCenter} key={item.usuario}>
            <ContentCharacter size={58} color="blue">
              <Character name={item.profilepicture} width={40} height={40} />
            </ContentCharacter>
            <Description size="xtiny">{usuario}</Description>
          </View>
          <View style={{ width: 20 }} />
        </>
      ))}
    </>
  );
};

export default RowFriends;
