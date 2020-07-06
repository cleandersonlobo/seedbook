import React, { useContext } from 'react';
import { SafeAreaContainer, Container } from 'styles';
import { ScrollView, View } from 'react-native';
import {
  HeaderDetailsUser,
  BottomMascoteBar,
  CardAchivements,
} from 'components';
import { AlunoContext } from 'contexts';
import { useHandleNavigation } from 'hooks';

const Achievements: React.FC = () => {
  const { profilepicture, usuario } = useContext(AlunoContext);
  const [handleNavigate] = useHandleNavigation('Profile');
  return (
    <>
      <SafeAreaContainer>
        <ScrollView>
          <Container>
            <View style={{ height: 15 }} />
            <HeaderDetailsUser disableCenter />
            <View style={{ height: 15 }} />
            <CardAchivements
              icon="livraria"
              color="purple"
              level={2}
              max={10}
              title="Mestre da leitura"
              subtitle="Leia livros"
            />
            <CardAchivements
              icon="editora"
              color="blue"
              level={5}
              max={10}
              title="Artista nato"
              subtitle="Crie livros"
            />

            <CardAchivements
              icon="king"
              color="yellow"
              level={3}
              max={10}
              title="Autor renomado"
              subtitle="Venda livros"
            />

            <CardAchivements
              icon="curadoria"
              color="red"
              level={9}
              max={10}
              title="Aluno exemplar"
              subtitle="Faça atividades da curadoria"
            />
            <CardAchivements
              icon="editora"
              color="blue"
              level={6}
              max={10}
              title="Leitor amigo"
              subtitle="Compre livros de amigos"
            />
          </Container>
        </ScrollView>
      </SafeAreaContainer>
      <BottomMascoteBar />
    </>
  );
};

export default Achievements;
