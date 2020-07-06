import React, { useContext, useEffect, useState } from 'react';
import { Container, SafeAreaContainer, gloablStyles } from 'styles';
import { Character, Button, BottomTabNavigation } from 'components';
import { View, ScrollView } from 'react-native';
import { formatFriendList } from 'helpers';
import { useHandleNavigation } from 'hooks';
import axios from 'config/axios';
import { AlunoContext } from 'contexts';
import Header from './Header';
import { ContentCharacter, Description, Card, CardTitle } from './styles';
import RowFriends from './RowFriends';
import { FrindListLoading } from './PlaceholdLoading';

const Profile: React.FC = () => {
  const [handleOnNavigate] = useHandleNavigation('Home');
  const [colegas, setColegas] = useState(null);
  const {
    id: kidId,
    profilepicture,
    nome,
    usuario,
    escola,
    turma,
    livros,
  } = useContext(AlunoContext);
  useEffect(() => {
    const getColegas = async (): Promise<void> => {
      const { data } = await axios.get(`kids/sameclass/${kidId}`);
      setColegas(formatFriendList(data.kids));
    };
    getColegas();
  }, []);

  return (
    <>
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
            <View style={[gloablStyles.alignCenter, { paddingVertical: 5 }]}>
              <Description>{nome}</Description>
              <Description>{escola}</Description>
              <Description>{turma}</Description>
              <Description>Leu {livros.lidos} livros</Description>
            </View>
            <Card>
              <CardTitle style={{ marginBottom: 20 }}>Amigos</CardTitle>
              <ScrollView horizontal>
                <View>
                  {!colegas ? (
                    <FrindListLoading />
                  ) : (
                    Object.keys(colegas).map((key, pos) => (
                      <View style={{ flexDirection: 'row' }}>
                        <RowFriends
                          key={key}
                          pos={pos}
                          colegas={colegas[key]}
                          usuario={usuario}
                        />
                      </View>
                    ))
                  )}
                </View>
              </ScrollView>
            </Card>
            <View style={gloablStyles.alignCenter}>
              <Button
                onPress={handleOnNavigate}
                spacing="tiny"
                text="CONTINUAR"
                textSize="small"
                size="75%"
              />
            </View>
          </Container>
        </ScrollView>
      </SafeAreaContainer>
      <BottomTabNavigation rightOnPress={handleOnNavigate} />
    </>
  );
};

export default Profile;
