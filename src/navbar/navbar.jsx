import React from "react";
import { Container, Logo, LogoHotel, LogoLuxury, NavbarContainer, NavbarMenu,
} from "./style";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <NavbarContainer>
        <Container>
          <Logo>
            <LogoLuxury>LUXURY</LogoLuxury>
            <LogoHotel>HOTEL</LogoHotel>
          </Logo>
          <NavbarMenu>
            <Link to="/">
              <div>Home</div>
            </Link>
            <Link to="/facilities">
              <div>Facilities</div>
            </Link>
            <Link to="/rooms">
              <div>Rooms</div>
            </Link>
            <Link to="/contact-us">
              <div>Contact-us</div>
            </Link>
          </NavbarMenu>
        </Container>
      </NavbarContainer>
    </div>
  );
};

export default Navbar;
