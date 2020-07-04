import * as React from 'react';
import { View, ScrollView } from 'react-native';
import { SafeAreaContainer } from 'styles';
import { Button } from 'components';
import MascoteLogo from 'assets/svg/name_logo.svg';
import { Container, Description } from './styles';

const Home: React.FC = () => {
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
            <MascoteLogo />
          </View>
          <View style={{ paddingHorizontal: 40 }}>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut
              fringilla orci viverra nullam leo at eleifend turpis.
            </Description>
          </View>
          <View>
            <Button text="ENTRAR" color="purple" textColor="light" />
            <Button text="OPÇÕES" color="blue" />
            <Button text="LOJA" color="yellow" />
            <Button text="CERTIFICADOS" />
          </View>
        </Container>
      </ScrollView>
    </SafeAreaContainer>
  );
};

export default Home;
