import React from 'react'
import Icon  from 'react-native-vector-icons/MaterialIcons';


import { 
    HeaderContainer, 
    HeaderTop, 
    TopOptions, 
    IconBackgroundColor, 
    TitleHello 
} from "./style";


export default function HeaderNu() {
    return (
        <HeaderContainer > 
            <HeaderTop>
                <IconBackgroundColor>
                    <Icon name="perm-identity" size={30} color="#fff" /> 
                </IconBackgroundColor>

                <TopOptions>
                    <Icon name="visibility" size={25} color="#fff" />
                    <Icon name="help" size={25} color="#fff" />
                    <Icon name="email" size={25} color="#fff" />
                </TopOptions>
            </HeaderTop>

        <TitleHello>Olá, Erian</TitleHello>

        </HeaderContainer>
    )
}