import styled from "styled-components";
import img1 from "../assets/header_img1.png";

export const HeaderContainer = styled.div`
    width: 100%;
    height: 1080px;
    display: flex;
    justify-content: center;
    align-items: end;
    top: 0;
    `;
export const HeaderImg = styled.div`
z-index: -5;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 1080px;
    position: absolute;
`;
export const SecContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 1500px;
`;

export const HeaderTexts = styled.div`
    margin-bottom: 108px;
`;
export const HeaderText1 = styled.div`
    color: #fff;
    font-family: Montserrat;
    font-size: 50px;
    position: relative;
    bottom: -40px;
`;
export const HeaderText2 = styled.div`
    color: #fff;
    font-family: "EB Garamond", serif;
    font-size: 154px;
    font-weight: 700;
    letter-spacing: 10.78px;
`;
export const HeaderText3 = styled.div`
    color: #fff;
    font-family: "EB Garamond", serif;
    font-size: 60px;
    font-weight: 700;
    letter-spacing: 24px;
`;
export const HeaderText4 = styled.div`
    color: #fff;
    -webkit-text-stroke-width: 0.5;
    -webkit-text-stroke-color: #fff;
    font-family: Montserrat;
    font-size: 25px;
    font-weight: 400;
    letter-spacing: 2.5px;
`;

export const HeaderButtons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 38px;
`;
export const HeaderYellowButton = styled.button`
    margin-bottom: 80px;
    background: #e0b973;
    padding: 25px 33px;
    cursor: pointer;
    color: #fff;
    font-family: Montserrat;
    font-size: 25px;
    font-weight: 700;
    border: none;
    gap: 18px;
    border-radius: 10px;
    display: flex;
`;
export const ImgWrapper = styled.img``;
export const HeaderScrolls = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    color: #fff;
    font-family: Montserrat;
    font-size: 25px;
    font-weight: 700;
    letter-spacing: 1.25px;
`;
