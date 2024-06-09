import React from "react";
import {
    HeaderButtons,
    HeaderContainer,
    HeaderImg,
    HeaderScrolls,
    HeaderText1,
    HeaderText2,
    HeaderText3,
    HeaderText4,
    HeaderTexts,
    HeaderYellowButton,
    ImgWrapper,
    SecContainer,
} from "./headerStyle";
import homeBook from "../assets/homeBook.svg";
import scrolls from "../assets/scroll.svg";

const Header = () => {
    return (
        <div style={{width:"100%", height:"1080px"}}>
            <HeaderImg>
                <HeaderContainer>
                    <SecContainer>
                        <HeaderTexts>
                            <HeaderText1>WELCOME TO</HeaderText1>
                            <HeaderText2>LUXURY</HeaderText2>
                            <HeaderText3>HOTELS</HeaderText3>
                            <HeaderText4>
                                Book your stay and enjoy Luxury <br /> redefined
                                at the most affordable rates.
                            </HeaderText4>
                        </HeaderTexts>

                        <HeaderButtons>
                            <HeaderYellowButton>
                                <ImgWrapper src={homeBook} />
                                <div>BOOK NOW</div>
                            </HeaderYellowButton>

                            <HeaderScrolls>
                                <div>Scroll</div>
                                <ImgWrapper src={scrolls} />
                            </HeaderScrolls>
                        </HeaderButtons>
                    </SecContainer>
                </HeaderContainer>
            </HeaderImg>
        </div>
    );
};

export default Header;
