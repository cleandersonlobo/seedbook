import React, { useState, useCallback, useContext, useEffect } from 'react';
import { FlatList, Alert } from 'react-native';
import { SafeAreaContainer } from 'styles';
import { BottomTabNavigation, LoadingOverlay } from 'components';
import CardLoading from 'components/CardButton/CardLoading';
import axios from 'config/axios';
import { AlunoContext } from 'contexts';
import { DATA_ICONS } from 'data/category';
import { useNavigation } from '@react-navigation/native';
import Header from './Header';
import Footer from './Footer';

let CardButton = React.lazy(() => import('components/CardButton/CardButton'));
const CreateProfile: React.FC = () => {
  const { id: kidId } = useContext(AlunoContext);
  useEffect(() => {
    return () => {
      CardButton = React.lazy(() => import('components/CardButton/CardButton'));
    };
  }, []);
  const [cards, setCard] = useState({});
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  async function handleOnCreateProfile(): Promise<void> {
    try {
      const cardlist = Object.values(cards)
        .filter((it: T) => it.isSelected && it.card.id)
        .map((it: T) => it.card.id);
      if (!cardlist.length) cardlist.push('5f009d1a3ed4d29bf3f6e69b');
      setLoading(true);
      await axios.post(`kids/cards/${kidId}`, { cardlist });
      setLoading(false);
      Alert.alert('Sucesso!', 'Perfil criado com sucesso!', [
        { text: 'OK', onPress: () => navigation.navigate('Profile') },
      ]);
    } catch (error) {
      setLoading(false);
      Alert.alert('Ops', 'Aconteceu alguma coisa errada, tente novamente!');
    }
  }

  const handleOnSelectCard = useCallback(
    (card: CardButtonItem, isSelected: boolean) => {
      setCard(vals => ({
        ...vals,
        [card.name]: {
          card,
          isSelected,
        },
      }));
    },
    [],
  );

  return (
    <>
      <LoadingOverlay visible={loading} />
      <SafeAreaContainer>
        <FlatList
          ListHeaderComponent={<Header />}
          data={DATA_ICONS}
          style={{
            flexGrow: 1,
          }}
          keyExtractor={item => item.name}
          renderItem={({ item }) => (
            <React.Suspense fallback={<CardLoading />}>
              <CardButton item={item} onSelectedCard={handleOnSelectCard} />
            </React.Suspense>
          )}
          numColumns={3}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
          ListFooterComponent={<Footer onConfirm={handleOnCreateProfile} />}
        />
      </SafeAreaContainer>
      <BottomTabNavigation />
    </>
  );
};

export default React.memo(CreateProfile);
