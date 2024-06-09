import React from "react";
import {
    FooterContacts,
    FooterContainer,
    FooterItems,
    FooterItemsContainer,
    FooterLogo,
    FooterLogoText1,
    FooterLogoText2,
    FooterMenuTexts,
    FooterSearch,
    FooterSocial,
    FooterSocialText,
    SocialImgs,
} from "../pages/style";
import { ImgWrapper } from "../header/headerStyle";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import instargam from "../assets/instagramm.svg";

const Footer = () => {
    return (
        <div>
            <FooterContainer>
                <FooterItemsContainer>
                    <FooterItems>
                        <FooterLogo>
                            <FooterLogoText1>LUXURY</FooterLogoText1>
                            <FooterLogoText2>HOTELS</FooterLogoText2>
                        </FooterLogo>
                        <FooterContacts>
                            <div>497 Evergreen Rd. Roseville, CA 95673</div>
                            <div>+44 345 678 903</div>
                            <div>luxury_hotels@gmail.com</div>
                        </FooterContacts>
                    </FooterItems>
                    <FooterItems>
                        <FooterMenuTexts>
                            <div>About Us</div>
                            <div>Contact</div>
                            <div>Terms & Conditions</div>
                        </FooterMenuTexts>
                    </FooterItems>
                    <FooterItems style={{display:"flex", flexDirection:"column", gap:"15px"}}>
                        <FooterSocial>
                            <SocialImgs>
                                <ImgWrapper src={facebook} />
                            </SocialImgs>
                            <FooterSocialText>Facebook</FooterSocialText>
                        </FooterSocial>
                        <FooterSocial>
                            <SocialImgs>
                                <ImgWrapper src={twitter} />
                            </SocialImgs>
                            <FooterSocialText>Twitter</FooterSocialText>
                        </FooterSocial>
                        <FooterSocial>
                            <SocialImgs>
                                <ImgWrapper src={instargam} />
                            </SocialImgs>
                            <FooterSocialText>Instargam</FooterSocialText>
                        </FooterSocial>
                    </FooterItems>

                    <FooterItems>
                        <div>Subscribe to our newsletter</div>
                        <FooterSearch>
                            <input type="text" placeholder="Email Address" />
                            <label>OK</label>
                        </FooterSearch>
                    </FooterItems>
                </FooterItemsContainer>
            </FooterContainer>
        </div>
    );
};

export default Footer;
