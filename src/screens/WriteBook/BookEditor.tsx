import React from 'react';
import { View } from 'react-native';
import { Container, gloablStyles } from 'styles';
import { NumberPage, Input } from './styles';
import WordBank from './WordBank';

const BookEditor: React.FC = () => {
  return (
    <Container style={{ flex: 0.9 }}>
      <View>
        <View style={{ alignItems: 'flex-end' }}>
          <NumberPage>1</NumberPage>
        </View>
        <View style={gloablStyles.alignCenter}>
          <Input
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
          <Input
            placeholder="Crie sua história"
            style={{ fontSize: 14, width: '100%', textAlign: 'center' }}
            multiline
          />
        </View>
        <WordBank />
      </View>
    </Container>
  );
};

export default BookEditor;
