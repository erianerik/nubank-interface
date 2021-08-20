import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
    AccountDataContainer,
    AccountDataHeader,
    Header,
    HeaderTitle,
    DataCurrentMoney,
    AccountDataOptions,
    AccountDataOption,
    OptionBackground,
    OptionTitle
} from './style'

export default function AccountData() {
    return (
        <AccountDataContainer>
            <AccountDataHeader>
                <Header>
                    <HeaderTitle>Conta</HeaderTitle>
                    <Icon name="chevron-right" size={25}/>
                </Header>

                <DataCurrentMoney>R$ 1000,00</DataCurrentMoney>

            </AccountDataHeader>
        

            <AccountDataOptions>
                <AccountDataOption>
                    <OptionBackground>
                        <Icon  name="api" size={30}/>
                    </OptionBackground>

                    <OptionTitle>Área Pix</OptionTitle>

                </AccountDataOption>
               
                <AccountDataOption>
                    <OptionBackground>
                        <Icon  name="view-week" size={30}/>
                    </OptionBackground>

                    <OptionTitle>Pagar</OptionTitle>

                </AccountDataOption>
             
                <AccountDataOption>
                    <OptionBackground>
                        <Icon  name="read-more" size={30}/>
                    </OptionBackground>

                    <OptionTitle>Transferir</OptionTitle>

                </AccountDataOption>

                <AccountDataOption>
                    <OptionBackground>
                        <Icon  name="payments" size={30}/>
                    </OptionBackground>

                    <OptionTitle>Depositar</OptionTitle>

                </AccountDataOption>

                <AccountDataOption>
                    <OptionBackground>
                        <Icon  name="payments" size={30}/>
                    </OptionBackground>

                    <OptionTitle>Depositar</OptionTitle>

                </AccountDataOption>
            </AccountDataOptions>
            
        </AccountDataContainer>
        
    )
}