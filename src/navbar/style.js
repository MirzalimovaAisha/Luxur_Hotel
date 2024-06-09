import styled from "styled-components";

export const NavbarContainer = styled.div`  
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: absolute;
`
export const Container = styled.div`
    width: 1500px;
    justify-content: space-between;
    display: flex;
    align-items: center;
`
export const Logo = styled.div`
    background: #E0B973;
    width: 256px;
    height: 149px;
    color: #14274A;
    /* font-family: "Adobe Garamond Pro"; */
    font-family: "EB Garamond", serif;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 6px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 0px 0px 60px 60px;
`
export const LogoLuxury = styled.div`
    font-size: 40px;
`
export const LogoHotel = styled.div`
    font-size: 15px;
    top: -5px;
    position: relative;
`
export const NavbarMenu = styled.div`
    display: flex;
    gap: 88px;

    div{
        color: #fff;
        font-family: Montserrat;
        font-size: 25px;
        font-weight: 400;
    }
`

export const HeaderContainer = styled.div`
    background-image: url(headerImg);
`