import React, { useMemo } from 'react';
import { Container, SafeAreaContainer, gloablStyles } from 'styles';
import AlunoMock from 'data/aluno.json';
import ColegasMock from 'data/colegas.json';
import { Character, Button } from 'components';
import { View, ScrollView } from 'react-native';
import { formatFriendList } from 'helpers';
import Header from './Header';
import { ContentCharacter, Description, Card, CardTitle } from './styles';
import RowFriends from './RowFriends';

const Profile: React.FC = () => {
  const colegas = useMemo(() => formatFriendList(ColegasMock), []);

  const { profilepicture, nome, usuario, escola, turma, livros } = AlunoMock;

  return (
    <SafeAreaContainer>
      <ScrollView>
        <Container>
          <Header />
          <View style={gloablStyles.alignCenter}>
            <ContentCharacter>
              <Character name={profilepicture} width={60} height={60} />
            </ContentCharacter>
            <Description>{usuario}</Description>
          </View>
          <View style={[gloablStyles.alignCenter, { paddingVertical: 20 }]}>
            <Description>{nome}</Description>
            <Description>{escola}</Description>
            <Description>{turma}</Description>
            <Description>Leu {livros.lidos} livros</Description>
          </View>
          <Card>
            <CardTitle style={{ marginBottom: 20 }}>Amigos</CardTitle>
            <ScrollView horizontal>
              <View>
                {Object.keys(colegas).map((key, pos) => (
                  <View style={{ flexDirection: 'row' }}>
                    <RowFriends
                      key={key}
                      pos={pos}
                      colegas={colegas[key]}
                      usuario={usuario}
                    />
                  </View>
                ))}
              </View>
            </ScrollView>
          </Card>
          <View style={gloablStyles.alignCenter}>
            <Button
              spacing="tiny"
              text="CONTINUAR"
              textSize="small"
              size="75%"
            />
          </View>
        </Container>
      </ScrollView>
    </SafeAreaContainer>
  );
};

export default Profile;
