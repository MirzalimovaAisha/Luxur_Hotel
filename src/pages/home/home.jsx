import React from "react";
import Header from "../../header/header";
import {
    BigContainer,
    HomeContainer,
    HomeContainerItems,
    HomeTexts,
    HomeYellowButton,
    ImgFont,
    Line,
    SecImgContainer,
    SecImgs,
    SecSubTitle,
    SecTitle,
    SubTitle,
    Titles,
} from "../style";
import { HeaderContainer, HeaderImg, SecContainer } from "../../header/headerStyle";
import homeImg1 from "../../assets/home_1.png";
import homeImg2 from "../../assets/home_2.png";
import FooterTop from "../../footer/footerTop";
import Footer from "../../footer/footer";
import headerImg2 from "../../assets/header_img1.png"

const Home = () => {
    return (
        <div>
            <HeaderImg style={{backgroundImage:`url(${headerImg2})`}}/>
            <Header />

            <BigContainer>
                <SecContainer>
                    <Titles>
                        <SubTitle>
                            All our room types are including complementary
                            breakfast
                        </SubTitle>
                    </Titles>
                    <HomeContainer>
                        <HomeContainerItems>
                            <HomeTexts>
                                <div>
                                    <Line></Line>
                                </div>
                                <div>
                                    <SecTitle>Luxury redefined</SecTitle>
                                    <SecSubTitle $home>
                                        Our rooms are designed to transport{" "}
                                        <br /> you into an environment made for
                                        leisure. <br /> Take your mind off the
                                        day-to-day of home <br /> life and find
                                        a private paradise for yourself.
                                    </SecSubTitle>
                                    <HomeYellowButton>EXPLORE</HomeYellowButton>
                                </div>
                            </HomeTexts>

                            <SecImgContainer>
                                <SecImgs src={homeImg1} />
                                <ImgFont></ImgFont>
                            </SecImgContainer>
                        </HomeContainerItems>
                        <HomeContainerItems>
                            <HomeTexts>
                                <div>
                                    <Line $line2></Line>
                                </div>
                                <div>
                                    <SecTitle>
                                        Leave your worries in the sand
                                    </SecTitle>
                                    <SecSubTitle $home>
                                        We love life at the beach. Being close <br />
                                        to the ocean with access to endless
                                        sandy <br />beach ensures a relaxed state of
                                        mind. It <br /> seems like time stands still
                                        watching the <br /> ocean.
                                    </SecSubTitle>
                                    <HomeYellowButton>EXPLORE</HomeYellowButton>
                                </div>
                            </HomeTexts>

                            <SecImgContainer>
                                <SecImgs src={homeImg2} />
                                <ImgFont></ImgFont>
                            </SecImgContainer>
                        </HomeContainerItems>
                    </HomeContainer>
                </SecContainer>
            </BigContainer>

            <FooterTop/>
            <Footer/>
        </div>
    );
};

export default Home;
