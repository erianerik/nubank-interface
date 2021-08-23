import styled from "styled-components";

export const MainServiceContainer = styled.View`
    `;

export const MainServiceCard = styled.View`
    width: 100%;
    padding: 20px;
    border-bottom-color: #f0f1f5;
    border-bottom-width: 2px;
`;

export const MainServiceCardTitle = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const MainServiceCardMainTitle = styled.Text`
    font-size: 20px;
    font-weight: 600;
    margin: 10px 0;
`;

export const MainServiceCardSubtitle = styled.Text`
    font-size: 18px;
    font-weight: 600;
    color: #87868b;
`;

export const MainServiceCardInvoicePrice = styled.Text`
    font-size: 25px;
    font-weight: bold;
    margin: 10px 0;
`;

export const MainServiceCardInvoiceLimit = styled(MainServiceCardSubtitle)`
    font-size: 15px;
    width: 90%;
`;





