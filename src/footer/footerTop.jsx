import React from "react";
import {
    FooterButton,
    FooterTopButtons,
    FooterTopContainer,
    SecSubTitle,
    SubTitle,
    Title,
} from "../pages/style";
import { ImgWrapper, SecContainer } from "../header/headerStyle";
import beforeButton from "../assets/beforeButton.png";
import afterButton from "../assets/afterButton.png";

const FooterTop = () => {
    return (
        <div>
            <FooterTopContainer>
                <SecContainer>
                    <Title>Testimonials</Title>
                    <SubTitle>
                        "Calm, Serene, Retro – What a way to relax and enjoy"
                    </SubTitle>
                    <SecSubTitle> Mr. and Mrs. Baxter, UK</SecSubTitle>
                    <FooterTopButtons>
                        <FooterButton>
                            <ImgWrapper src={beforeButton} />
                        </FooterButton>
                        <FooterButton>
                            <ImgWrapper src={afterButton} />
                        </FooterButton>
                    </FooterTopButtons>
                </SecContainer>
            </FooterTopContainer>
        </div>
    );
};

export default FooterTop;
