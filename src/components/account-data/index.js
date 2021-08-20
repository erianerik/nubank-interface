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
    OptionTitle,
    AccountDataCards,
    AccountDataCardsTitle,
    AccountDataInfos,
    AccountDataInfoCard,
    AccountDataInfoDescription,
    ColorPurple

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

            <AccountDataCards>
                <Icon name="credit-card" size={30} />
                <AccountDataCardsTitle>Meus Cartões</AccountDataCardsTitle>
            </AccountDataCards>

            <AccountDataInfos>
                <AccountDataInfoCard>
                    <AccountDataInfoDescription>Você tem R$ 25.000,00 disponíveis para <ColorPurple>empréstimo.</ColorPurple>
                    </AccountDataInfoDescription>
                </AccountDataInfoCard>
            </AccountDataInfos>
            
        </AccountDataContainer>
        
    )
}