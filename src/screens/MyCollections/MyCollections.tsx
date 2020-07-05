import React from 'react';
import { View, ScrollView } from 'react-native';
import {
  SafeAreaContainer,
  Container,
  gloablStyles,
  CardBooks,
  CardBooksTitle,
  CardBooksBody,
} from 'styles';
import BackgroundSVG from 'assets/svg/background_form.svg';
import dimensions from 'styles/dimensions';
import LivrosMock from 'data/livros.json';
import { ButtonAddBook, ButtonBook, ButtonFindBook } from 'components';
import HeaderCollection from './HeaderCollection';

const MyCollections: React.FC = () => {
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
            <HeaderCollection />
            <CardBooks color="purple">
              <CardBooksTitle color="purple" size="medium">
                Livros que eu escrevi:
              </CardBooksTitle>
              <CardBooksBody>
                {LivrosMock.map((item, index) => (
                  <ButtonBook key={`livro_${index}`} uri={item.url} />
                ))}
                <ButtonAddBook />
              </CardBooksBody>
            </CardBooks>
            <CardBooks color="blue">
              <CardBooksTitle color="blue" size="medium">
                Livros dos meus amigos:
              </CardBooksTitle>
              <CardBooksBody>
                {LivrosMock.map((item, index) => (
                  <ButtonBook key={`livro_${index}`} uri={item.url} />
                ))}
                <ButtonFindBook color="blue" />
              </CardBooksBody>
            </CardBooks>

            <CardBooks color="green">
              <CardBooksTitle color="green" size="medium">
                Árvore de livros:
              </CardBooksTitle>
              <CardBooksBody>
                {LivrosMock.map((item, index) => (
                  <ButtonBook key={`livro_${index}`} uri={item.url} />
                ))}
                <ButtonFindBook color="green" />
              </CardBooksBody>
            </CardBooks>
          </Container>
        </ScrollView>
      </SafeAreaContainer>
    </>
  );
};

export default MyCollections;
