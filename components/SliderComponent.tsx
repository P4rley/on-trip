"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";
import styled from "styled-components";

type Destination = {
  province: string;
  destination: string;
  description: string;
  imgUrl: string;
  reverse: boolean;
};

type Data = {
  country: string;
  countryDestination: Destination[];
};

export interface ISliderComponnet {
  data: Data;
}

const SliderComponent: FunctionComponent<ISliderComponnet> = ({ data }) => {
  return (
    <Slider>
      <div>
        <Background
          src="https://i.postimg.cc/FRn2dNj4/country-background.jpg"
          alt="Country Background"
          width={1920}
          height={1080}
          priority
        />
        <DarkBg></DarkBg>
      </div>

      <Wrapper>
        <Title>Beatiful locations for your trip</Title>
        <CountryWrapper>
          <Country>{data.country.toUpperCase()}</Country>

          <More href={`/destination/${data.country.toLowerCase()}`}>More</More>
        </CountryWrapper>
        <CardWrapper>
          {data.countryDestination.map((el, i) => {
            return (
              <Card key={i}>
                <DestinationName>{el.destination}</DestinationName>
                <CityCard>{el.province}</CityCard>
                <CardImg
                  src={el.imgUrl}
                  alt=""
                  width={1920}
                  height={1080}
                  priority
                />
              </Card>
            );
          })}
        </CardWrapper>
      </Wrapper>
    </Slider>
  );
};
export default SliderComponent;

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-weight: 400;
  color: #eff5f5;
  width: 200px;
  text-align: center;
  font-size: 0.75rem;
  margin-bottom: 2rem;
`;

const Country = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #f57f5b;

  @media screen and (min-width: 768px) {
    font-size: 4rem;
  }

  @media screen and (min-width: 1024px) {
    font-size: 7rem;
  }
`;
const Card = styled.div`
  width: 100%;
  height: 70px;
  margin: 2rem 0;

  @media screen and (min-width: 768px) {
    height: 200px;
    width: 180px;
    margin: 2rem 0;
  }

  @media screen and (min-width: 1024px) {
    height: 250px;
    width: 220px;
  }
`;
const DestinationName = styled.h3`
  color: #eff5f5;
  font-weight: 400;
  font-size: 0.75rem;
`;
const CityCard = styled.p`
  color: #dbdcde;
  font-weight: 300;
  font-size: 0.5rem;
`;
const CardImg = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  margin: 1rem 0;
  object-fit: cover;
`;
const CardWrapper = styled.div`
  padding: 0 10%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
const More = styled(Link)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #000;
  color: #eff5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 8px;
  margin-left: 10px;

  @media screen and (min-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: unset;
    font-size: 12px;
  }

  @media screen and (min-width: 1024px) {
    width: 70px;
    height: 70px;
    font-size: unset;
    margin-left: unset;
  }
`;
const CountryWrapper = styled.div`
  display: flex;
`;

const Background = styled(Image)`
  width: 100%;
  height: 100vh;
  object-fit: cover;
`;
const DarkBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  min-height: 100vh;
  background-image: linear-gradient(#222, rgb(34, 34, 34, 0.5));
`;

const Slider = styled.div`
  width: 100vw;
  min-height: 100vh;
  position: relative;
`;
