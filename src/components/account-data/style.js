import styled from "styled-components";

export const AccountDataContainer = styled.View`
    padding: 15px;
    padding-top: 20px;
    padding-bottom: 20px;
    border-bottom-color: #f0f1f5;
    border-bottom-width: 2px;
`;

export const AccountDataHeader = styled.View`
    width: 100%;
    height: 80px;
    justify-content: space-between;
`;

export const Header = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const HeaderTitle = styled.Text`
    font-size: 20px;
    font-weight: 600;
`;

export const DataCurrentMoney = styled.Text`
    font-size: 23px;
    font-weight: bold;
`;

export const AccountDataOptions = styled.View`
    flex-direction: row;
    margin: 30px 0;
`;

export const AccountDataOption = styled.View`
    width: 80px;
    height: 130px;
    margin-right: 15px;
    align-items: center;
`;

export const OptionBackground = styled.View`
    width: 100%;
    height: 75px;
    justify-content: center;
    align-items: center;
    border-radius: 70px;
    background-color: #f0f1f5;
`;

export const OptionTitle = styled.Text`
    font-size: 15px;
    font-weight: 600;
    text-align: center;
    margin-top: 10px;
    flex-direction: row;
`;

export const AccountDataCards = styled.View`
    width: 100%;
    height: 60px;
    padding: 10px;
    flex-direction: row;
    align-items: center;
    border-radius: 10px;
    background-color: #f0f1f5;
`;

export const AccountDataCardsTitle = styled.Text`
    margin-left: 25px;
    font-size: 15px;
    font-weight: 600;
`;

export const AccountDataInfos = styled.View`
    margin-top: 20px;
    `;

export const AccountDataInfoCard = styled.View`
    width: 310px;
    height: 100px;
    padding: 10px 20px;
    margin-right: 15px;
    justify-content: center;
    border-radius: 10px;
    background-color: #f0f1f5;
`;

export const AccountDataInfoDescription = styled.Text`
    font-size: 15px;
    line-height: 25px;
`;

export const ColorPurple = styled.Text`
    color: #ae7acb;
`;