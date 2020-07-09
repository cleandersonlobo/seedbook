import React, { useState, useEffect, useContext, useMemo } from 'react';
import { View, FlatList } from 'react-native';

import axios from 'config/axios';
import { AlunoContext } from 'contexts';
import { Placeholder, PlaceholderLine, Fade } from 'rn-placeholder';
import AxiosMain from 'axios';
import { WordButton, WordButtonText } from './styles';

const LoadingWords: React.FC = () => {
  return (
    <View style={{ height: 20, width: 80, flexDirection: 'row' }}>
      <Placeholder
        Animation={Fade}
        style={{ height: 50, flexDirection: 'row', width: 20 }}
      >
        <PlaceholderLine height={20} width={80} />
      </Placeholder>
      <Placeholder
        Animation={Fade}
        style={{ height: 50, flexDirection: 'row', width: 20 }}
      >
        <PlaceholderLine height={20} width={80} />
      </Placeholder>
      <Placeholder
        Animation={Fade}
        style={{ height: 50, flexDirection: 'row', width: 20 }}
      >
        <PlaceholderLine height={20} width={80} />
      </Placeholder>
      <Placeholder
        Animation={Fade}
        style={{ height: 50, flexDirection: 'row', width: 20 }}
      >
        <PlaceholderLine height={20} width={80} />
      </Placeholder>
      <Placeholder
        Animation={Fade}
        style={{ height: 50, flexDirection: 'row', width: 20 }}
      >
        <PlaceholderLine height={20} width={80} />
      </Placeholder>
    </View>
  );
};

const WordBank: React.FC = () => {
  const [words, setWords] = useState([]);
  const { id: kidId } = useContext(AlunoContext);
  useEffect(() => {
    const ourRequest = AxiosMain.CancelToken.source();
    const getWords = async (): Promise<void> => {
      const { data } = await axios.get(`kids/words/${kidId}`, {
        cancelToken: ourRequest.token,
      });
      setWords(data.palavras);
    };
    getWords();
    return () => {
      ourRequest.cancel();
    };
  }, []);
  return (
    <View style={{ flex: 0 }}>
      <FlatList
        data={words.slice(0, 15)}
        horizontal
        contentContainerStyle={{
          maxWidth: 600,
          flexWrap: 'wrap',
        }}
        ListEmptyComponent={<LoadingWords />}
        keyExtractor={(item, index) => `${index}_${item}`}
        ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
        renderItem={({ item }) => (
          <WordButton style={{ marginBottom: 10 }}>
            <WordButtonText>{item}</WordButtonText>
          </WordButton>
        )}
      />
    </View>
  );
};

export default React.memo(WordBank);
