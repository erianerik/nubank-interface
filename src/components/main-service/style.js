import styled from "styled-components";

export const MainServiceContainer = styled.View`
    `;

export const MainServiceSection = styled.View`
    width: 100%;
    padding: 20px;
    border-bottom-color: #f0f1f5;
    border-bottom-width: 2px;
`;

export const MainServiceSectionHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const MainServiceSectionHeaderTitle = styled.Text`
    font-size: 20px;
    font-weight: 600;
    margin: 10px 0;
`;

export const MainServiceSectionSubtitle = styled.Text`
    font-size: 18px;
    font-weight: 600;
    color: #87868b;
`;

export const MainServiceSectionInvoicePrice = styled.Text`
    font-size: 25px;
    font-weight: bold;
    margin: 10px 0;
`;

export const MainServiceSectiondInvoiceLimit = styled(MainServiceSectionSubtitle)`
    font-size: 15px;
    width: 90%;
`;





