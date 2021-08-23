import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
    MainServiceContainer,
    MainServiceSection,
    MainServiceSectionHeader,
    MainServiceSectionHeaderTitle,
    MainServiceSectionSubtitle,
    MainServiceSectionInvoicePrice,
    MainServiceSectiondInvoiceLimit
} from './style';


export default function MainService() {
    return (
        <MainServiceContainer>
            <MainServiceSection>
                <Icon name="credit-card" size={30}/>

                <MainServiceSectionHeader>
                    <MainServiceSectionHeaderTitle>Cartão de crédito</MainServiceSectionHeaderTitle>
                    <Icon name="chevron-right" size={25} color="#706f74"/>
                </MainServiceSectionHeader>
                
                <MainServiceSectionSubtitle>Fatura atual</MainServiceSectionSubtitle>
                <MainServiceSectionInvoicePrice>R$ 100,00</MainServiceSectionInvoicePrice>
                <MainServiceSectiondInvoiceLimit>Limite disponível de R$ 2000,00</MainServiceSectiondInvoiceLimit>
            </MainServiceSection>
            
            <MainServiceSection>
                <Icon name="account-balance" size={30}/>

                <MainServiceSectionHeader>
                    <MainServiceSectionHeaderTitle>Empréstimo</MainServiceSectionHeaderTitle>
                    <Icon name="chevron-right" size={25} color="#706f74"/>
                </MainServiceSectionHeader>
                
                <MainServiceSectiondInvoiceLimit>Valor disponível até R$ 25.000,00</MainServiceSectiondInvoiceLimit>
            </MainServiceSection>
           
            <MainServiceSection>
                <Icon name="favorite" size={30}/>

                <MainServiceSectionHeader>
                    <MainServiceSectionHeaderTitle>Seguro de vida</MainServiceSectionHeaderTitle>
                    <Icon name="chevron-right" size={25} color="#706f74"/>
                </MainServiceSectionHeader>
                
                <MainServiceSectiondInvoiceLimit>Conheça Nubank Vida: um seguro simples e que cabe no bolso.</MainServiceSectiondInvoiceLimit>
            </MainServiceSection>
        </MainServiceContainer>
    )
} 