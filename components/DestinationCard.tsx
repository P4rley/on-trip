"use client";
import Image, { StaticImageData } from "next/image";
import styled from "styled-components";

type Props = {
  city: string;
  description: string;
  imgUrl: string;
  reverse: boolean;
};

const DestinationCard = ({ city, description, imgUrl, reverse }: Props) => {
  return (
    <Container reverse={reverse}>
      <Top>
        <Img
          src={imgUrl}
          alt="City Image"
          width={1920}
          height={1080}
          priority
        />
      </Top>
      <Bottom>
        <City>{city}</City>
        <Description>{description}</Description>
      </Bottom>
    </Container>
  );
};
export default DestinationCard;

const Container = styled.div<{ reverse: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    width: 250px;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: ${({ reverse }) => (reverse ? "column-reverse" : "column")};
    margin: 1.5rem;
  }
`;
const Top = styled.div`
  margin: 1rem 0;
`;
const Img = styled(Image)`
  width: 100%;
  height: 300px;
  object-fit: cover;

  @media screen and (min-width: 768px) {
    width: 250px;
  }
`;
const Bottom = styled.div`
  margin: 1rem 0;
`;
const City = styled.h2`
  color: #eff5f5;
  font-weight: 500;
  font-size: 1.3rem;
  margin: 0.75rem 0;
`;
const Description = styled.p`
  color: #9ba3a3;
  font-weight: 300;
  font-size: 10px;
`;
