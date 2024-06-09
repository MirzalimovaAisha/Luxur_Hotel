import React from "react";
import { HeaderImg, ImgWrapper } from "../../header/headerStyle";
import Header from "../../header/header";
import headerImg from "../../assets/header_img3.png";
import FooterTop from "../../footer/footerTop";
import Footer from "../../footer/footer";
import {
    ImgFont,
    RoomBox,
    RoomItems,
    RoomsImgs,
    RoomsItemBotton,
    RoomsItemTitle,
    RoomsRadio,
    RoomsText,
    SecImgContainer,
    SecImgs,
    SubTitle,
    Title,
    Titles,
    YellowButton,
} from "../style";
import rooms1 from "../../assets/rooms_1.png";
import rooms2 from "../../assets/rooms_2.png";
import rooms3 from "../../assets/rooms_3.png";
import radio from "../../assets/radios.svg";
import add from "../../assets/add_Icon.svg";

const Rooms = () => {
    return (
        <div>
            <HeaderImg style={{ backgroundImage: `url(${headerImg})` }} />
            <Header />

            <div>
                <Titles>
                    <Title>ROOMS AND RATES</Title>
                    <SubTitle>
                        Each of our bright, light-flooded rooms come with
                        everything you could possibly need for a comfortable
                        stay. And yes, <br /> comfort isn’t our only objective,
                        we also value good design, sleek contemporary furnishing
                        complemented <br />
                        by the rich tones of nature’s palette as visible from
                        our rooms’ sea-view windows and terraces.{" "}
                    </SubTitle>
                </Titles>

                <RoomBox>
                    <RoomItems>
                        <RoomsImgs>
                            <SecImgContainer>
                                <SecImgs src={rooms1} />
                                <ImgFont></ImgFont>
                            </SecImgContainer>
                        <RoomsRadio>
                            <ImgWrapper src={radio} />
                        </RoomsRadio>
                        </RoomsImgs>
                        <RoomsItemTitle>SINGLE ROOM</RoomsItemTitle>
                        <RoomsItemBotton>
                            <RoomsText>
                                <ImgWrapper src={add} />
                                <div>VIEW ROOM DETAILS</div>
                            </RoomsText>
                            <YellowButton>$147 Avg/night</YellowButton>
                        </RoomsItemBotton>
                    </RoomItems>
                    <RoomItems>
                        <RoomsImgs>
                            <SecImgContainer>
                                <SecImgs src={rooms2}/>
                                <ImgFont></ImgFont>
                            </SecImgContainer>
                        <RoomsRadio>
                            <ImgWrapper src={radio} />
                        </RoomsRadio>
                        </RoomsImgs>
                        <RoomsItemTitle>SINGLE ROOM</RoomsItemTitle>
                        <RoomsItemBotton>
                            <RoomsText>
                                <ImgWrapper src={add} />
                                <div>VIEW ROOM DETAILS</div>
                            </RoomsText>
                            <YellowButton>$147 Avg/night</YellowButton>
                        </RoomsItemBotton>
                    </RoomItems>
                    <RoomItems>
                        <RoomsImgs>
                            <SecImgContainer>
                                <SecImgs src={rooms3} />
                                <ImgFont></ImgFont>
                            </SecImgContainer>
                        <RoomsRadio>
                            <ImgWrapper src={radio} />
                        </RoomsRadio>
                        </RoomsImgs>
                        <RoomsItemTitle>SINGLE ROOM</RoomsItemTitle>
                        <RoomsItemBotton>
                            <RoomsText>
                                <ImgWrapper src={add} />
                                <div>VIEW ROOM DETAILS</div>
                            </RoomsText>
                            <YellowButton>$147 Avg/night</YellowButton>
                        </RoomsItemBotton>
                    </RoomItems>
                </RoomBox>
            </div>

            <FooterTop />
            <Footer />
        </div>
    );
};

export default Rooms;
