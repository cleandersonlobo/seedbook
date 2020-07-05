import React from 'react';
import { View, ScrollView } from 'react-native';
import { SafeAreaContainer, Container, gloablStyles } from 'styles';
import BackgroundSVG from 'assets/svg/background_form.svg';
import { HeaderDetailsUser, BottomTabNavigation } from 'components';
import dimensions from 'styles/dimensions';
import LivrosMock from 'data/livros.json';
import PHBooksPanel from './PHBooksPanel';

let CharacterPanel = React.lazy(() => import('./CharacterPanel'));

const Storage: React.FC = () => {
  React.useEffect(() => {
    return () => {
      CharacterPanel = React.lazy(() => import('./CharacterPanel'));
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
            <HeaderDetailsUser />
            <React.Suspense fallback={<PHBooksPanel color="purple" />}>
              <CharacterPanel
                color="purple"
                pack="characters"
                title="Personagens:"
              />
            </React.Suspense>
            <React.Suspense fallback={<PHBooksPanel color="blue" />}>
              <CharacterPanel color="blue" pack="animais" title="Animais:" />
            </React.Suspense>
            <React.Suspense fallback={<PHBooksPanel color="green" />}>
              <CharacterPanel color="green" pack="cenarios" title="Cenários:" />
            </React.Suspense>
          </Container>
        </ScrollView>
      </SafeAreaContainer>
      <BottomTabNavigation />
    </>
  );
};

export default Storage;
