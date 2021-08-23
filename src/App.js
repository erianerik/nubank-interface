import React from 'react';
import { ScrollView } from 'react-native';

import { Container } from './Style';

import HeaderNu from './components/header';
import AccountData from './components/account-data';
import MainService from './components/main-service';

const App = () => {
  return (
    <>
        <Container>
            <ScrollView>
              <HeaderNu />
              <AccountData />
              <MainService />
            </ScrollView>
        </Container>
    </>
  )
};


export default App;