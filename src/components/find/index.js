import React from 'react';
import { ScrollView } from 'react-native';

import {
    FindMoreContainer,
    FindMoreContainerTitle,
    FindMoreContainerCard,
    FindMoreCard,
    FindMoreCardInfoContainer,
    FindMoreCardTitle,
    FindMoreCardDescription,
    FindMoreCardContainerButton,
    FindMoreCardButton,
} from './style'

export default function FindMore() {
    return (
        <FindMoreContainer>
            <FindMoreContainerTitle>Descubra mais</FindMoreContainerTitle>
            
            <FindMoreContainerCard>

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <FindMoreCard>

                        <FindMoreCardInfoContainer>
                            <FindMoreCardTitle>Função débito</FindMoreCardTitle>
                            <FindMoreCardDescription>Você no controle das suas compras do dia a dia de um jeito fácil e transparente.</FindMoreCardDescription>
                        </FindMoreCardInfoContainer>
                        
                        <FindMoreCardContainerButton>
                            <FindMoreCardButton>Ativar débito</FindMoreCardButton>
                        </FindMoreCardContainerButton>

                    </FindMoreCard>
                  
                    <FindMoreCard>

                        <FindMoreCardInfoContainer>
                            <FindMoreCardTitle>WhatsApp</FindMoreCardTitle>
                            <FindMoreCardDescription>Pagamentos seguros, rápidos e sem tarifa. A experiência Nubank sem nem sair da conversa.</FindMoreCardDescription>
                        </FindMoreCardInfoContainer>
                        
                        <FindMoreCardContainerButton>
                            <FindMoreCardButton>Quero conhecer</FindMoreCardButton>
                        </FindMoreCardContainerButton>

                    </FindMoreCard>
                  
                    <FindMoreCard>

                        <FindMoreCardInfoContainer>
                            <FindMoreCardTitle>Indique seus amigos</FindMoreCardTitle>
                            <FindMoreCardDescription>Mostre aos seus amigos como é fácil ter uma vida sem burocracia.</FindMoreCardDescription>
                        </FindMoreCardInfoContainer>
                        
                        <FindMoreCardContainerButton>
                            <FindMoreCardButton>Inidicar amigos</FindMoreCardButton>
                        </FindMoreCardContainerButton>

                    </FindMoreCard>
                </ScrollView>

            </FindMoreContainerCard>

        </FindMoreContainer>
    )
}