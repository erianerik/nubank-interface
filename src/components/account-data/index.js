import React from 'react';
import { ScrollView } from 'react-native';
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
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

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
                            <Icon  name="account-balance" size={30}/>
                        </OptionBackground>

                        <OptionTitle>Pegar emprestado</OptionTitle>
                    </AccountDataOption>
                    
                    <AccountDataOption>
                        <OptionBackground>
                            <Icon  name="smartphone" size={30}/>
                        </OptionBackground>

                        <OptionTitle>Recarga de celular</OptionTitle>
                    </AccountDataOption>
                    
                    <AccountDataOption>
                        <OptionBackground>
                            <Icon  name="chat-bubble" size={30}/>
                        </OptionBackground>

                        <OptionTitle>Cobrar</OptionTitle>
                    </AccountDataOption>
                  
                    <AccountDataOption>
                        <OptionBackground>
                            <Icon  name="favorite" size={30}/>
                        </OptionBackground>

                        <OptionTitle>Doação</OptionTitle>
                    </AccountDataOption>
                </ScrollView>
            </AccountDataOptions>

            <AccountDataCards>
                <Icon name="credit-card" size={30} />
                <AccountDataCardsTitle>Meus Cartões</AccountDataCardsTitle>
            </AccountDataCards>

            <AccountDataInfos>

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <AccountDataInfoCard>
                        <AccountDataInfoDescription>Você tem R$ 25.000,00 disponíveis para <ColorPurple>empréstimo.</ColorPurple>
                        </AccountDataInfoDescription>
                    </AccountDataInfoCard>
                  
                    <AccountDataInfoCard>
                        <AccountDataInfoDescription>Salve seus amigos da burocracia. <ColorPurple>faça um convite para o Nubank.</ColorPurple>
                        </AccountDataInfoDescription>
                    </AccountDataInfoCard>
                </ScrollView>

            </AccountDataInfos>
            
        </AccountDataContainer>
    )
}