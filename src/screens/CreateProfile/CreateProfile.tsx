import React from 'react';
import { FlatList } from 'react-native';
import { SafeAreaContainer } from 'styles';
import CardLoading from 'components/CardButton/CardLoading';
import { Container } from './styles';
import Header from './Header';
import { DATA_ICONS } from '../../data/category';
import Footer from './Footer';

const CardButton = React.lazy(() => import('components/CardButton/CardButton'));
const CreateProfile: React.FC = () => {
  return (
    <SafeAreaContainer>
      <Container>
        <FlatList
          ListHeaderComponent={<Header />}
          data={DATA_ICONS}
          style={{ flex: 1 }}
          keyExtractor={item => item.name}
          renderItem={({ item }) => (
            <React.Suspense fallback={<CardLoading />}>
              <CardButton item={item} />
            </React.Suspense>
          )}
          numColumns={3}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flex: 1,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
          ListFooterComponent={<Footer />}
        />
      </Container>
    </SafeAreaContainer>
  );
};

export default React.memo(CreateProfile);
