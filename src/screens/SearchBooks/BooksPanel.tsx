import React from 'react';
import { CardBooks, CardBooksTitle } from 'styles';
import { FlatList, View } from 'react-native';
import { Button, Image } from './styles';

interface Props {
  color?: string;
  title: string;
  books?: any;
}

const BooksPanel: React.FC<Props> = ({ color = 'purple', title, books }) => {
  return (
    <CardBooks color={color}>
      <CardBooksTitle color={color} size="medium">
        {title}
      </CardBooksTitle>
      <FlatList
        data={books}
        horizontal
        keyExtractor={(item, index) => `${index}_${item.id}`}
        ItemSeparatorComponent={() => <View style={{ width: 15 }} />}
        renderItem={({ item }) => (
          <Button>
            <Image source={{ uri: item?.cover?.url }} resizeMode="cover" />
          </Button>
        )}
      />
    </CardBooks>
  );
};

export default BooksPanel;
