"use client";
import Image from "next/image";
import { FunctionComponent, useEffect, useState } from "react";
import styled from "styled-components";

import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import SliderComponent from "../components/SliderComponent";

const data = [
  {
    country: "Indonesia",
    countryImg: "",
    countryDestination: [
      {
        province: "Bali",
        destination: "Cappadocia",
        description:
          "Cappadocia is famous for its stretches of soft volcanic rock formed by erosion from volcanoes over millions of years. The rock takes on a variety of unique shapes such as towers, cones, valleys and caves.",
        imgUrl: "https://i.postimg.cc/76V3qsSf/cappadocia.jpg",
        reverse: false,
      },
      {
        province: "Indonesia",
        destination: "Lake Toba",
        description:
          "Toba is a place to  sit and take in the view of the picturesque mountains set against the cool clear lake, you will feel the worries of the world melt away. As the lake sits 900 meters above sea level, therefore the climate here is cooler which gives a well-needed break from the heat, humidity, and pollution of the destination.",
        imgUrl: "https://i.postimg.cc/V6j7nWn8/lake-toba.jpg",
        reverse: true,
      },
      {
        province: "Jakarta",
        destination: "Cape Town Central",
        description:
          "Tourist brochure-views at Blaauwberg Beach and Kirstenbosch National Botanical Gardens are within easy driving distance of 'The Mother City.' The Cape of Good Hope Nature Reserve provides sweeping sea vistas, hiking trails and wildlife encounters.",
        imgUrl: "https://i.postimg.cc/q7KQHxm3/cape-town.jpg",
        reverse: false,
      },
    ],
  },
  {
    country: "Usa",
    countryImg: "",
    countryDestination: [
      {
        province: "Usa",
        destination: "Cappadocia",
        description:
          "Cappadocia is famous for its stretches of soft volcanic rock formed by erosion from volcanoes over millions of years. The rock takes on a variety of unique shapes such as towers, cones, valleys and caves.",
        imgUrl: "https://i.postimg.cc/76V3qsSf/cappadocia.jpg",
        reverse: false,
      },
      {
        province: "Usa",
        destination: "Lake Toba",
        description:
          "Toba is a place to  sit and take in the view of the picturesque mountains set against the cool clear lake, you will feel the worries of the world melt away. As the lake sits 900 meters above sea level, therefore the climate here is cooler which gives a well-needed break from the heat, humidity, and pollution of the destination.",
        imgUrl: "https://i.postimg.cc/V6j7nWn8/lake-toba.jpg",
        reverse: true,
      },
      {
        province: "Usa",
        destination: "Cape Town Central",
        description:
          "Tourist brochure-views at Blaauwberg Beach and Kirstenbosch National Botanical Gardens are within easy driving distance of 'The Mother City.' The Cape of Good Hope Nature Reserve provides sweeping sea vistas, hiking trails and wildlife encounters.",
        imgUrl: "https://i.postimg.cc/q7KQHxm3/cape-town.jpg",
        reverse: false,
      },
    ],
  },
];

export interface ICountryDestination {}

const CountryDestination: FunctionComponent<ICountryDestination> = () => {
  const [index, setIndex] = useState(0);

  const handleArrow = (direction: string) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : data.length - 1);
    }
    if (direction === "r") {
      setIndex(index !== data.length - 1 ? index + 1 : 0);
    }
  };

  return (
    <Container>
      <SectionWrapper
        index={data.length}
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        {data.map((el, i) => {
          return <SliderComponent data={el} key={i} />;
        })}
      </SectionWrapper>
      <ArrowWrapper>
        <Left onClick={() => handleArrow("l")}>
          <ArrowLeft style={{ color: "#eff5f5" }} />
        </Left>
        <Right onClick={() => handleArrow("r")}>
          <ArrowRight style={{ color: "#eff5f5" }} />
        </Right>
      </ArrowWrapper>
    </Container>
  );
};
export default CountryDestination;

const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
`;

const SectionWrapper = styled.div<{ index: number }>`
  position: relative;
  width: ${({ index }) => index && `${index * 100}vw`};
  height: 100vh;
  display: flex;
  transition: all 1s ease-in-out;
`;
const ArrowWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 10%;
  bottom: 5%;
`;

const ArrowLeft = styled(BsArrowLeft)`
  font-size: 1.5em;
  @media screen and (max-width: 500px) {
    font-size: 1rem;
  }
`;
const ArrowRight = styled(BsArrowRight)`
  font-size: 1.5em;
  @media screen and (max-width: 500px) {
    font-size: 1rem;
  }
`;

const Left = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 1rem;
  cursor: pointer;
  background-color: #404258;
  transition: all 0.4s ease-in-out;

  &:hover {
    background-color: #dbdcde;
    color: black;
    border-color: #dbdcde;
  }
  @media screen and (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;
const Right = styled(Left)``;
