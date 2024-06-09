import styled from "styled-components";

export const BigContainer = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
`;

export const Title = styled.div`
    color: #14274a;
    text-align: center;
    font-family: "EB Garamond", serif;
    font-size: 60px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 3px;
    margin-bottom: 34px;
`;
export const SubTitle = styled.div`
    color: #14274a;
    -webkit-text-stroke-width: 0.5;
    -webkit-text-stroke-color: #14274a;
    font-family: Montserrat;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

export const HomeContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 75px;
    flex-direction: column;
`;
export const Titles = styled.div`
    margin-top: 80px;
    margin-bottom: 85px;
    text-align: center;
`;
export const HomeTexts = styled.div`
    display: flex;
    align-items: center;
    text-align: left;
    gap: 48px;
`;
export const Line = styled.div`
    background: #14274a;
    width: 1px;
    /* height: 334px; */
    height: ${(props) => (props.$line2 ? "433px" : "334px")};
`;
export const SecTitle = styled.div`
    color: #14274a;
    font-family: "EB Garamond", serif;
    font-size: 60px;
    font-weight: 700;
    letter-spacing: 1.2px;
    margin-bottom: 25px;
`;
export const SecSubTitle = styled.div`
    color: #14274a;
    font-family: Montserrat;
    font-size: 25px;
    font-weight: 400;
    line-height: 40px;
    margin-bottom: 30px;
`;
export const HomeYellowButton = styled.button`
    padding: 20px 65px;
    color: #fff;
    font-family: Montserrat;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 1px;
    background: #e0b973;
    border: none;
    border-radius: 10px;
`;
export const SecImgContainer = styled.div`
    position: relative;
`;
export const SecImgs = styled.img`
    position: relative;
`;

export const ImgFont = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(20, 39, 74, 0.2);
    top: 0px;
`;
export const HomeContainerItems = styled.div`
    display: flex;
    width: 1570px;
    justify-content: space-between;
    align-items: center;
`;
export const FooterTopContainer = styled.div`
    margin-top: 115px;
    display: flex;
    justify-content: center;
    text-align: center;
    margin-bottom: 115px;
`;

export const FooterTopButtons = styled.div`
    display: flex;
    gap: 21px;
    justify-content: center;
`;
export const FooterButton = styled.button`
    background: #e0b973;
    padding: 15px 18px;
    border-radius: 10px;
    cursor: pointer;
    border: none;
`;

export const FooterContainer = styled.div`
    background: #14274a;
    padding: 70px;
    display: flex;
    justify-content: center;
    font-family: Montserrat;
    color: #fff;
`;
export const FooterItemsContainer = styled.div`
    display: flex;
    width: 1550px;
    justify-content: space-between;
    align-items: center;
`;
export const FooterItems = styled.div``;
export const FooterLogo = styled.div`
    color: #fff;
    font-family: "EB Garamond", serif;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 3.75px;
    width: 118px;
    margin-bottom: 22px;
`;
export const FooterLogoText1 = styled.div`
    font-size: 25px;
`;
export const FooterLogoText2 = styled.div`
    font-size: 9px;
    text-align: center;
`;
export const FooterContacts = styled.div`
    color: #fff;
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 400;
`;
export const FooterMenuTexts = styled.div`
    color: #f7f7f7;
    font-family: Montserrat;
    display: flex;
    flex-direction: column;
    gap: 15px;
`;
export const FooterSocial = styled.div`
    display: flex;
    gap: 26px;
`;
export const SocialImgs = styled.div`
    width: 20px;
    height: 20px;
`;
export const FooterSocialText = styled.div`
    flex: 1;
    display: flex;
`;
export const FooterSearch = styled.div`
    margin-top: 30px;
    /* width: 278px; */
    height: 50px;
    display: flex;
    align-items: center;
    input {
        background: #14274a;
        border: 2px solid #e0b973;
        padding: 15px 25px;

        color: #fff;
        font-family: Montserrat;
        font-size: 16px;
        font-weight: 600;
        border-radius: 5px 0px 0px 5px;
        width: 278px;
        height: 50px;
    }
    label {
        background: #e0b973;
        color: #14274a;
        font-family: Montserrat;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        height: 52px;
        width: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border-radius: 0px 5px 5px 0px;
    }
`;
export const FaciBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 186px;
`;
export const FacilitiesItems = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
`;
export const FacilitiesItemText = styled.div`
    position: absolute;
    bottom: 0;
    color: #14274a;
    text-align: center;
    font-family: Montserrat;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    width: 684px;
    height: 75px;
    background: #fff;
`;

export const RoomsButton = styled.button`
    width: 130px;
    height: 40px;
    background-color: #e0b973;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

export const ContactNavbar = styled.div`
    height: 400px;
    background-color: #14274a;
    /* position: absolute; */
    top: 0;
    width: 100%;
    z-index: -5;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 40px;
    font-weight: 900;
`;

export const RightArrow = styled.img`
    width: 30px;
`;

export const ContactButton = styled.button`
    height: 40px;
    width: 100px;
    border: none;
    border-radius: 6px;
    color: white;
    background-color: #e0b973;
    font-size: 17px;
    cursor: pointer;
`;

export const LoginButton = styled.button`
    width: 100%;
    height: 30px;
    background-color: #e0b973;
    border-radius: 6px;
    cursor: pointer;
    border: none;
    margin: 50px 0;
`;
export const RoomBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 81px;
`;
export const RoomItems = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 0px 0px 15px 15px;
    border: 2px solid #14274a;
    background: #fff;
`;
export const RoomsRadio = styled.div`
    position: absolute;
    bottom: 37px;
`;
export const RoomsImgs = styled.div`
    justify-content: center;
    display: flex;
    position: relative;
`;
export const RoomsItemTitle = styled.div`
    width: 100%;
    background: #14274a;
    color: #fff;
    font-family: Montserrat;
    font-size: 60px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding: 41px;
    text-align: center;
    position: relative;
    top: -10px;
`;
export const RoomsItemBotton = styled.div`
    display: flex;
    justify-content: center;
    gap: 618px;
    align-items: center;
    padding: 78px;
`;
export const RoomsText = styled.div`
    display: flex;
    gap: 40px;
    color: #14274a;
    text-align: center;
    font-family: Montserrat;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    align-items: center;
`;
export const YellowButton = styled.div`
    color: #fff;
    font-family: Montserrat;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    background: #e0b973;
    padding: 25px 45px;
    border-radius: 15px;
`;
