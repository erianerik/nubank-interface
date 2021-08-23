import React from 'react';

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

                <FindMoreCard>

                    <FindMoreCardInfoContainer>
                        <FindMoreCardTitle>Função débito</FindMoreCardTitle>
                        <FindMoreCardDescription>Você no controle das suas compras do dia a dia de um jeito fácil e transparente.</FindMoreCardDescription>
                    </FindMoreCardInfoContainer>
                    
                    <FindMoreCardContainerButton>
                        <FindMoreCardButton>Ativar débito</FindMoreCardButton>
                    </FindMoreCardContainerButton>
                </FindMoreCard>

            </FindMoreContainerCard>

        </FindMoreContainer>
    )
}