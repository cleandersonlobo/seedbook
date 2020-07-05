import React from 'react';
import { View, TextInput } from 'react-native';
import { Container, gloablStyles } from 'styles';

import { FlatList } from 'react-native-gesture-handler';
import { NumberPage, WordButton, WordButtonText } from './styles';

const BookEditor: React.FC = () => {
  return (
    <Container style={{ flex: 1 }}>
      <View>
        <View style={{ alignItems: 'flex-end' }}>
          <NumberPage>1</NumberPage>
        </View>
        <View style={gloablStyles.alignCenter}>
          <TextInput
            placeholder="TÍTULO"
            maxLength={100}
            numberOfLines={2}
            style={{
              fontSize: 24,
              fontWeight: 'bold',
              width: '100%',
              textAlign: 'center',
            }}
          />
        </View>
      </View>
      <View
        style={[
          {
            flex: 1,
            justifyContent: 'space-between',
          },
        ]}
      >
        <View
          style={[
            {
              flex: 1,
            },
            gloablStyles.alignCenter,
          ]}
        >
          <TextInput
            placeholder="Crie sua história"
            style={{ fontSize: 14, width: '100%', textAlign: 'center' }}
            multiline
          />
        </View>
        <View style={{ flex: 0 }}>
          <FlatList
            data={[
              'uma',
              'sábia',
              'vez',
              'menino',
              'lindo',
              'muito',
              'era',
              'vez',
              'bela',
              'lindo',
              'uma',
              'sábia',
              'falava',
              'gostava',
              'lindo',
            ]}
            horizontal
            contentContainerStyle={{
              maxWidth: 500,
              flexWrap: 'wrap',
            }}
            keyExtractor={(item, index) => `${index}_${item}`}
            ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
            renderItem={({ item }) => (
              <WordButton style={{ marginBottom: 10 }}>
                <WordButtonText>{item}</WordButtonText>
              </WordButton>
            )}
          />
        </View>
      </View>
    </Container>
  );
};

export default BookEditor;
