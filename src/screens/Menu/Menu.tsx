import * as React from 'react';
import { View, ScrollView } from 'react-native';
import { SafeAreaContainer } from 'styles';
import { Button } from 'components';
import MascoteLogo from 'assets/svg/name_logo.svg';
import { useNavigation } from '@react-navigation/native';
import { Container, Description } from './styles';

const Menu: React.FC = () => {
  const navigation = useNavigation();

  const handleNavigate = React.useCallback(route => {
    navigation.navigate(route);
  }, []);

  return (
    <SafeAreaContainer>
      <ScrollView
        contentContainerStyle={{
          justifyContent: 'center',
          flex: 1,
        }}
      >
        <Container>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <MascoteLogo
              fillMain="#A55FEE"
              fillShadow="#D0A5FD"
              fillLight="#EDE0F9"
            />
          </View>
          <View style={{ paddingHorizontal: 40 }}>
            <Description>
              Uma nova forma de ler e escrever, onde a regra é sem limites para
              imaginação.
            </Description>
          </View>
          <View>
            <Button
              text="COMERÇAR"
              color="purple"
              textColor="light"
              onPress={() => handleNavigate('CreateProfile')}
            />
            <Button
              text="OPÇÕES"
              color="blue"
              onPress={() => handleNavigate('Home')}
            />
            <Button
              text="LOJA"
              color="yellow"
              onPress={() => handleNavigate('Loja')}
            />
            <Button
              text="CONQUISTAS"
              onPress={() => handleNavigate('Conquistas')}
            />
          </View>
        </Container>
      </ScrollView>
    </SafeAreaContainer>
  );
};

export default Menu;
