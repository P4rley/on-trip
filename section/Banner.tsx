"use client";

import styled from "styled-components";

const Banner = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Come join and gave an amazing trip with us</Title>
        <Content>Prepare yourself and let&apos;s explore</Content>
        <Description>
          Explore the beauty of the world with someone special and enjoy
        </Description>
        <Button>Get Started</Button>
      </Wrapper>
    </Container>
  );
};
export default Banner;

const Container = styled.div`
  padding: 10%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #c76243;
  flex-direction: column;
  width: 100%;
  padding: 50px 20px;
  border-radius: 10px;
`;
const Title = styled.p`
  color: #eff5f5;
  font-size: 0.75rem;
  font-weight: 300;
  margin-bottom: 1.5rem;
`;
const Content = styled.h2`
  color: #eff5f5;
  font-size: 2rem;
  font-weight: 500;
`;
const Description = styled.p`
  color: #eff5f5;
  font-size: 0.5rem;
  font-weight: 300;
  margin: 0.7rem 0;
`;
const Button = styled.button`
  background-color: #eff5f5;
  color: #222;
  margin-top: 1.5rem;
  padding: 0.5rem 1rem;
  border: 1px solid #eff5f5;
  border-radius: 40px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.4s ease-in-out;

  &:hover {
    background-color: #222;
    color: #eff5f5;
  }
`;
