"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, FunctionComponent } from "react";
import styled from "styled-components";
import logo from "../public/ontrip-logo.png";
import NavbarMenu from "./NavbarMenu";
import { deleteCookie, getCookie, hasCookie } from "cookies-next";
import { usePathname, useRouter } from "next/navigation";

export interface INavbar {}

const Navbar: FunctionComponent<INavbar> = () => {
  const [click, setClick] = useState<boolean>(false);
  const [login, setLogin] = useState<boolean>(true);

  const router = useRouter();

  const token = hasCookie("access_token");

  useEffect(() => {
    if (token) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, [token]);

  const handleClick = () => {
    if (click) {
      setClick(false);
    } else {
      setClick(true);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Link href="/">
          <Logo src={logo} alt="On trip logo" priority />
        </Link>

        <LinksWrapper>
          <Links>
            <NavLink href="/discover">Discover</NavLink>
          </Links>
          <Links>
            <NavLink href="/destination">Destination</NavLink>
          </Links>
          <Links>
            <NavLink href="/tripplan">Trip Plan</NavLink>
          </Links>
          <Links>
            <NavLink href="/about">About Us</NavLink>
          </Links>
          {login ? (
            <Links>
              <AuthButton
                href="/login"
                onClick={() => {
                  deleteCookie("access_token");
                  router.push("/login");
                  setLogin(false);
                }}
              >
                Logout
              </AuthButton>
            </Links>
          ) : (
            <>
              <Links>
                <AuthButton href="/login">Login</AuthButton>
              </Links>

              <Links>
                <AuthButton href="/register">Sign Up</AuthButton>
              </Links>
            </>
          )}
        </LinksWrapper>
      </Wrapper>
      <MenuWrapper onClick={handleClick}>
        <Menu click={click}>
          <div></div>
          <div></div>
          <div></div>
        </Menu>
      </MenuWrapper>

      <Button href="/login">Login</Button>

      <NavbarMenu click={click} setClick={setClick} />
    </Container>
  );
};
export default Navbar;

const Container = styled.nav`
  padding: 0.5rem 5%;
  background-color: transparent;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;

  @media screen and (min-width: 768px) {
    padding: 0.5rem 10%;
  }
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled(Image)`
  width: 60px;
  height: 60px;
  object-fit: cover;

  @media screen and (min-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;
const LinksWrapper = styled.ul`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
const NavLink = styled(Link)`
  color: #000;
  font-weight: bold;
  transition: all 0.4s ease-in-out;
`;
const Links = styled.li`
  margin: 0 0.5rem;
  &:hover ${NavLink} {
    color: #f57f5b;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const AuthButton = styled(Link)`
  color: #000;
  font-weight: bold;
  transition: all 0.4s ease-in-out;
  padding: 0.3rem 1rem;
  border-radius: 10px;
  border: 1px solid #f57f6b;

  &:hover {
    color: #000;
    background-color: #f57f6b;
  }
`;

const Button = styled(Link)`
  display: none;

  @media screen and (min-width) {
    font-weight: 500;
    border: 1px solid #eff5f5;
    background-image: linear-gradient(rgba(211, 211, 211, 0.1), #d3d3d3);
    color: #222;
    padding: 0.5rem 1.5rem;
    border-radius: 40px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    position: relative;
    overflow: hidden;

    &:hover {
      background-image: none;
    }

    &::before {
      content: "";
      position: absolute;
      top: -60px;
      left: 0;
      z-index: -1;
      width: 200%;
      height: 250%;
      background-color: #f57f5b;
      transform: scaleY(0) skewY(-35deg);
      transform-origin: top;
      transition: transform 1s;
      overflow: hidden;
    }

    &:hover::before {
      transform: scaleY(1.1) skewY(-35deg);
    }
  }
`;

const Menu = styled.div<{ click: boolean }>`
  display: flex;
  transition: all 0.4s ease-in-out;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  div {
    width: 30px;
    height: 3px;
    border-radius: 20px;
    background-color: #fff;
    margin: 3px;
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ click }) =>
        click ? "rotate(45deg) translate(-1.5px)" : "rotate(0)"};
    }
    &:nth-child(2) {
      width: 10px;
      opacity: ${({ click }) => (click ? "0" : "1")};
    }

    &:nth-child(3) {
      transform: ${({ click }) =>
        click ? "rotate(-45deg) translate(-1.5px)" : "rotate(0)"};
    }
  }
`;

const MenuWrapper = styled.div`
  position: fixed;
  top: 13px;
  right: 10%;
  z-index: 999;
  background-color: #222;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  transition: all 0.4s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover ${Menu} div:nth-child(2) {
    width: 30px;
  }

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;
