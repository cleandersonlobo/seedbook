import React from 'react';
import { View, ScrollView } from 'react-native';
import { SafeAreaContainer, Container, gloablStyles } from 'styles';
import { HeaderDetailsUser, BottomTabNavigation } from 'components';
import BackgroundSVG from 'assets/svg/background_form.svg';
import dimensions from 'styles/dimensions';
import LivrosMock from 'data/livros.json';
import { useHandleNavigation } from 'hooks';
import PHBooksPanel from './PHBooksPanel';

let BooksPanel = React.lazy(() => import('./BooksPanel'));

const MyCollections: React.FC = () => {
  React.useEffect(() => {
    return () => {
      BooksPanel = React.lazy(() => import('./BooksPanel'));
    };
  });
  const [handleNavigateEditora] = useHandleNavigation('Editora');
  const [handleNavigateSearch] = useHandleNavigation('Pesquisar');
  return (
    <>
      <SafeAreaContainer>
        <View style={gloablStyles.alignCenter}>
          <BackgroundSVG
            style={{ position: 'absolute', top: -155 }}
            height={(dimensions.fullWidth - 10) / 2}
            width={(dimensions.fullHeight - 10) / 2}
            fillLight="#EDE0F9"
          />
        </View>
        <ScrollView>
          <Container>
            <HeaderDetailsUser />
            <React.Suspense fallback={<PHBooksPanel color="purple" />}>
              <BooksPanel
                color="purple"
                books={LivrosMock}
                title="Livros que eu escrevi:"
                actionPress={handleNavigateEditora}
              />
            </React.Suspense>
            <React.Suspense fallback={<PHBooksPanel color="blue" />}>
              <BooksPanel
                color="blue"
                books={LivrosMock}
                buttonType="find"
                title="Livros dos meus amigos:"
                actionPress={handleNavigateSearch}
              />
            </React.Suspense>
            <React.Suspense fallback={<PHBooksPanel color="green" />}>
              <BooksPanel
                color="green"
                books={LivrosMock}
                buttonType="find"
                title="Árvore de livros:"
                actionPress={handleNavigateSearch}
              />
            </React.Suspense>
          </Container>
        </ScrollView>
      </SafeAreaContainer>
      <BottomTabNavigation />
    </>
  );
};

export default MyCollections;
