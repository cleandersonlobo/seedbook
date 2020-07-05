import React from 'react';
import { FlatList } from 'react-native';
import { SafeAreaContainer } from 'styles';
import { BottomTabNavigation } from 'components';
import CardLoading from 'components/CardButton/CardLoading';
import Header from './Header';
import { DATA_ICONS } from '../../data/category';
import Footer from './Footer';

const CardButton = React.lazy(() => import('components/CardButton/CardButton'));
const CreateProfile: React.FC = () => {
  return (
    <>
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
              <CardButton item={item} />
            </React.Suspense>
          )}
          numColumns={3}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
          ListFooterComponent={<Footer />}
        />
      </SafeAreaContainer>
      <BottomTabNavigation />
    </>
  );
};

export default React.memo(CreateProfile);
