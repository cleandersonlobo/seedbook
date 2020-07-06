import * as React from 'react';
import { View, ScrollView, Switch } from 'react-native';
import { SafeAreaContainer } from 'styles';
import { Button } from 'components';
import MascoteLogo from 'assets/svg/name_logo.svg';
import { useNavigation } from '@react-navigation/native';
import { ThemeModeContext } from 'contexts';
import { Container, Description } from './styles';

const Menu: React.FC = () => {
  const navigation = useNavigation();
  const { isDark, handleOnTheme } = React.useContext(ThemeModeContext);
  const handleNavigate = React.useCallback(route => {
    navigation.navigate(route);
  }, []);

  return (
    <SafeAreaContainer>
      <View
        style={{
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          paddingHorizontal: 20,
          backgroundColor: 'rgba(0,0,0,0)',
        }}
      >
        <Switch
          trackColor={{ false: '#767577', true: '#f4f3f4' }}
          thumbColor={isDark ? '#A55FEE' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={handleOnTheme}
          value={isDark}
        />
      </View>
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
