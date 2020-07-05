import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaContainer } from 'styles';

import { BottomTabNavigation } from 'components';
import Canvas from './Canvas';
import BookEditor from './BookEditor';

const WriteBook: React.FC = () => {
  return (
    <>
      <SafeAreaContainer>
        <ScrollView style={{ flexGrow: 1 }} contentContainerStyle={{ flex: 1 }}>
          <BookEditor />
        </ScrollView>
        <Canvas />
      </SafeAreaContainer>
      <BottomTabNavigation />
    </>
  );
};

export default WriteBook;
