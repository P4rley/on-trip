"use client";

import styled from "styled-components";
import Image from "next/image";

const About = () => {
  return (
    <Container>
      <Heading>
        <Title>
          FILL YOUR LIFE WITH ADVENTURES, HAVE STORIES TO TELL NOT STUFF TO
          SHOW.
        </Title>
        <Description>
          Be ready to fill your soul with a vacation in the most wondeful place
          in the world
        </Description>
      </Heading>
      <Background
        src="https://i.postimg.cc/ZYHHmRLV/about-img.jpg"
        width={4000}
        height={3000}
        priority
        alt="about background"
      />
    </Container>
  );
};
export default About;

const Container = styled.section`
  padding: 10% 5%;
  width: 100%;
  background-color: #222;

  @media screen and (min-width: 768px) {
    padding: 10%;
  }
`;
const Heading = styled.div`
  position: relative;

  @media screen and (min-width: 1024px) {
    height: 90px;
  }
`;
const Title = styled.h2`
  color: #eff5f5;
  font-size: 1.6rem;
  font-weight: 600;

  @media screen and (min-width: 1024px) {
    max-width: 600px;
  }
`;
const Description = styled.p`
  color: #a8afaf;
  font-weight: 300;
  font-size: 0.75rem;
  margin-top: 1rem;

  @media screen and (min-width: 1024px) {
    position: absolute;
    right: 0;
    bottom: 15px;
    width: 300px;
  }
`;
const Background = styled(Image)`
  width: 100%;
  height: 300px;
  object-fit: cover;
  margin-top: 1rem;
  border-radius: 5px;

  @media screen and (min-width: 1024px) {
    height: 400px;
  }
`;
