import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
    MainServiceContainer,
    MainServiceCard,
    MainServiceCardTitle,
    MainServiceCardMainTitle,
    MainServiceCardSubtitle,
    MainServiceCardInvoicePrice,
    MainServiceCardInvoiceLimit
} from './style';


export default function MainService() {
    return (
        <MainServiceContainer>
            <MainServiceCard>
                <Icon name="credit-card" size={30}/>

                <MainServiceCardTitle>
                    <MainServiceCardMainTitle>Cartão de crédito</MainServiceCardMainTitle>
                    <Icon name="chevron-right" size={25} color="#706f74"/>
                </MainServiceCardTitle>
                
                <MainServiceCardSubtitle>Fatura atual</MainServiceCardSubtitle>
                <MainServiceCardInvoicePrice>R$ 100,00</MainServiceCardInvoicePrice>
                <MainServiceCardInvoiceLimit>Limite disponível de R$ 2000,00</MainServiceCardInvoiceLimit>
            </MainServiceCard>
            
            <MainServiceCard>
                <Icon name="account-balance" size={30}/>

                <MainServiceCardTitle>
                    <MainServiceCardMainTitle>Empréstimo</MainServiceCardMainTitle>
                    <Icon name="chevron-right" size={25} color="#706f74"/>
                </MainServiceCardTitle>
                
                <MainServiceCardInvoiceLimit>Valor disponível até R$ 25.000,00</MainServiceCardInvoiceLimit>
            </MainServiceCard>
           
            <MainServiceCard>
                <Icon name="favorite" size={30}/>

                <MainServiceCardTitle>
                    <MainServiceCardMainTitle>Seguro de vida</MainServiceCardMainTitle>
                    <Icon name="chevron-right" size={25} color="#706f74"/>
                </MainServiceCardTitle>
                
                <MainServiceCardInvoiceLimit>Conheça Nubank Vida: um seguro simples e que cabe no bolso.</MainServiceCardInvoiceLimit>
            </MainServiceCard>
        </MainServiceContainer>
    )
} 