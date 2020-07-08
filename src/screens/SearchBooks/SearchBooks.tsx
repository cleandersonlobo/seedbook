import React from 'react';
import { View, ScrollView } from 'react-native';
import { SafeAreaContainer, Container, gloablStyles } from 'styles';
import { HeaderDetailsUser, BottomTabNavigation } from 'components';
import BackgroundSVG from 'assets/svg/background_form.svg';
import dimensions from 'styles/dimensions';
import BooksMock from 'data/books.json';
import PHBooksPanel from './PHBooksPanel';
import { Input } from './styles';

let BooksPanel = React.lazy(() => import('./BooksPanel'));
const SearchBooks: React.FC = () => {
  React.useEffect(() => {
    return () => {
      BooksPanel = React.lazy(() => import('./BooksPanel'));
    };
  });
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
            <View style={{ marginVertical: 20 }}>
              <Input placeholder="Pesquise aqui" placeholderTextColor="gray" />
            </View>
            <HeaderDetailsUser disableCenter />
            <View style={{ height: 20 }} />
            <React.Suspense fallback={<PHBooksPanel color="yellow" />}>
              <BooksPanel
                color="yellow"
                books={BooksMock}
                title="Você pode gostar:"
              />
            </React.Suspense>
            <React.Suspense fallback={<PHBooksPanel color="purple" />}>
              <BooksPanel
                color="purple"
                books={BooksMock}
                title="Mais lidos do mês:"
              />
            </React.Suspense>
            <React.Suspense fallback={<PHBooksPanel color="blue" />}>
              <BooksPanel
                color="blue"
                books={BooksMock}
                title="Livros dos meu amigos:"
              />
            </React.Suspense>
            <React.Suspense fallback={<PHBooksPanel color="green" />}>
              <BooksPanel
                color="green"
                books={BooksMock}
                title="Baseados em jogos"
              />
            </React.Suspense>
          </Container>
        </ScrollView>
      </SafeAreaContainer>
      <BottomTabNavigation />
    </>
  );
};

export default SearchBooks;
