import React from 'react';

import { Container } from './Style';

import HeaderNu from './components/header';
import AccountData from './components/account-data';

const App = () => {
  return (
    <>
        <Container>
            <HeaderNu />
            <AccountData />
        </Container>
    </>
  )
};


export default App;