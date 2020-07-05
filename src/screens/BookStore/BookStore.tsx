import React from 'react';
import { SafeAreaContainer, Container, gloablStyles } from 'styles';
import AlunoMock from 'data/aluno.json';
import { View, ScrollView } from 'react-native';
import { CharacterButton, CardMenu, BottomMascoteBar } from 'components';
import IconDollar from 'assets/svg/dollar.svg';
import { useHandleNavigation } from 'hooks';
import { Description, CoinsText } from './styles';

const BookStore: React.FC = () => {
  const [handleOnNavigate] = useHandleNavigation('Profile');
  const { profilepicture, usuario } = AlunoMock;

  return (
    <>
      <SafeAreaContainer>
        <ScrollView>
          <Container>
            <View style={[gloablStyles.alignCenter, { marginVertical: 20 }]}>
              <CharacterButton
                btnSize={47}
                size={30}
                name={profilepicture}
                onPress={handleOnNavigate}
              />
              <Description>{usuario}</Description>
            </View>
            <CardMenu
              style={{ marginBottom: 20 }}
              color="purple"
              icon={profilepicture}
              title="Minha coleção"
              subtitle="Livros que eu fiz, que lí e que adquiri."
            />
            <CardMenu
              style={{ marginBottom: 20 }}
              color="blue"
              icon="pesquisar"
              title="Pesquisar"
              subtitle="Encontre livros dos seus amigos, os mais lidos e sugestões para você."
            />
            <CardMenu
              color="green"
              customColor="#45CBCD"
              textColor="light"
              textSizes={{ title: 'large', subtitle: 'medium' }}
              icon="arvore"
              title="Árvore"
              iconSize={110}
              subtitle="Aqui tem mais de 30 mil lívros para você escolher."
            />
            <View
              style={[
                {
                  flexDirection: 'row',
                  marginTop: 20,
                },
                gloablStyles.alignCenter,
              ]}
            >
              <View>
                <IconDollar height={40} />
              </View>
              <View style={[gloablStyles.alignCenter, { marginLeft: 10 }]}>
                <CoinsText>50</CoinsText>
              </View>
            </View>
          </Container>
        </ScrollView>
      </SafeAreaContainer>
      <BottomMascoteBar />
    </>
  );
};

export default BookStore;
