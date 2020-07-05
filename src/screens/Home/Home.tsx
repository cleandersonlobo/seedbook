import React from 'react';
import { SafeAreaContainer, Container, gloablStyles } from 'styles';
import AlunoMock from 'data/aluno.json';
import { View, ScrollView } from 'react-native';
import { CharacterButton, CardMenu } from 'components';
import IconDollar from 'assets/svg/dollar.svg';
import { Description, CoinsText } from './styles';

const Home: React.FC = () => {
  const { profilepicture, usuario } = AlunoMock;
  return (
    <SafeAreaContainer>
      <ScrollView>
        <Container>
          <View style={[gloablStyles.alignCenter, { marginBottom: 20 }]}>
            <CharacterButton btnSize={50} size={35} name={profilepicture} />
            <Description>{usuario}</Description>
          </View>
          <CardMenu
            style={{ marginBottom: 20 }}
            color="purple"
            icon="editora"
            title="Editora"
            subtitle="Crie sua própria história, como quiser, aqui não tem limites para sua
          imaginação."
          />
          <CardMenu
            style={{ marginBottom: 20 }}
            color="blue"
            icon="livraria"
            title="Livraria"
            subtitle="Leia, curta e compartilhe histórias com seus amigos."
          />
          <CardMenu
            color="yellow"
            icon="curadoria"
            title="Curadoria"
            subtitle="Crie livros a partir de temas e palavras selecionadas pelo seus professores."
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
  );
};

export default Home;
