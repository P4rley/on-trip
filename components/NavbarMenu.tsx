import Link from "next/link";
import styled from "styled-components";

type Props = {
  click: boolean;
  setClick: (val: boolean) => void;
};

const NavbarMenu = ({ click, setClick }: Props) => {
  return (
    <Container click={click}>
      <Wrapper>
        <MenuLink>
          <Link href="/" onClick={() => setClick(false)}>
            <LinkItem>Home</LinkItem>
          </Link>
          <Link href="/discover" onClick={() => setClick(false)}>
            <LinkItem>Discover</LinkItem>
          </Link>
          <Link href="/destination" onClick={() => setClick(false)}>
            <LinkItem>Destination</LinkItem>
          </Link>
          <Link href="/tripplan" onClick={() => setClick(false)}>
            <LinkItem>Trip Plan</LinkItem>
          </Link>
          <Link href="/about" onClick={() => setClick(false)}>
            <LinkItem>About Us</LinkItem>
          </Link>
        </MenuLink>
        <Line />
      </Wrapper>
    </Container>
  );
};
export default NavbarMenu;

const Container = styled.div<{ click: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  transform: ${({ click }) =>
    click ? "translate(0,0)" : "translate(calc(100% + 10vw), 0)"};
  background-color: #222;
  transition: transform 1s cubic-bezier(0.7, 0, 0.2, 1);
  will-change: transform;
  padding-top: 20%;
  padding-left: 10%;
  padding-right: 10%;
  padding-bottom: 10%;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
`;

const MenuLink = styled.ul`
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const LinkItem = styled.p`
  color: #fff;
  cursor: pointer;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  transition: all 0.4s ease-in-out;
  &:hover {
    color: #5b5b5b;
  }

  @media screen and (min-width: 768px) {
    font-size: 3.5rem;
  }
`;

const Line = styled.hr`
  width: 100%;
  height: 2px;
  background-color: #fff;
  opacity: 0.5;
`;
