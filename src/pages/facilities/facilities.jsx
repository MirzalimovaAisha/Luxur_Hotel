import React from "react";
import Header from "../../header/header";
import { HeaderImg } from "../../header/headerStyle";
import headerImg2 from "../../assets/header_img2.png";
import FooterTop from "../../footer/footerTop";
import Footer from "../../footer/footer";
import {
    FaciBox,
    FacilitiesContainer,
    FacilitiesItemText,
    FacilitiesItems,
    ImgFont,
    SecImgContainer,
    SecImgs,
    SubTitle,
    Title,
    Titles,
} from "../style";
import facilities1 from "../../assets/facilities_1.png";
import facilities2 from "../../assets/facilities_2.png";
import facilities3 from "../../assets/facilities_3.png";
import facilities4 from "../../assets/facilities_4.png";
import facilities5 from "../../assets/facilities_5.png";
import facilities6 from "../../assets/facilities_6.png";

const Facilities = () => {
    return (
        <div>
            <HeaderImg style={{ backgroundImage: `url(${headerImg2})` }} />
            <Header />

            <div>
                <Titles>
                    <Title>FACILITIES</Title>
                    <SubTitle>
                        We want your stay at our lush hotel to be truly
                        unforgettable. That is why we give special attention to
                        all of your needs so <br />
                        that we can ensure an experience quite uniquw. Luxury
                        hotels offers the perfect setting with stunning views
                        for leisure <br /> and our modern luxury resort
                        facilities will help you enjoy the best of all.{" "}
                    </SubTitle>
                </Titles>

                <FaciBox>
                    <FacilitiesItems>
                        <SecImgContainer>
                            <SecImgs src={facilities1} />
                            <ImgFont></ImgFont>
                        </SecImgContainer>
                        <FacilitiesItemText>THE GYM</FacilitiesItemText>
                    </FacilitiesItems>
                    <FacilitiesItems>
                        <SecImgContainer>
                            <SecImgs src={facilities2} />
                            <ImgFont></ImgFont>
                        </SecImgContainer>
                        <FacilitiesItemText>POOLSIDE BAR</FacilitiesItemText>
                    </FacilitiesItems>
                    <FacilitiesItems>
                        <SecImgContainer>
                            <SecImgs src={facilities3} />
                            <ImgFont></ImgFont>
                        </SecImgContainer>
                        <FacilitiesItemText>THE SPA</FacilitiesItemText>
                    </FacilitiesItems>
                    <FacilitiesItems>
                        <SecImgContainer>
                            <SecImgs src={facilities4} />
                            <ImgFont></ImgFont>
                        </SecImgContainer>
                        <FacilitiesItemText>SWIMMING POOL</FacilitiesItemText>
                    </FacilitiesItems>
                    <FacilitiesItems>
                        <SecImgContainer>
                            <SecImgs src={facilities5} />
                            <ImgFont></ImgFont>
                        </SecImgContainer>
                        <FacilitiesItemText>RESTAURANT</FacilitiesItemText>
                    </FacilitiesItems>
                    <FacilitiesItems>
                        <SecImgContainer>
                            <SecImgs src={facilities6} />
                            <ImgFont></ImgFont>
                        </SecImgContainer>
                        <FacilitiesItemText>LAUNDRY</FacilitiesItemText>
                    </FacilitiesItems>
                </FaciBox>
            </div>

            <FooterTop />
            <Footer />
        </div>
    );
};

export default Facilities;
