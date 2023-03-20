"use client";

import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "../styles/swiper.css";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";

const data = [
  {
    province: "Bali",
    destination: "Cappadocia",
    description:
      "Cappadocia is famous for its stretches of soft volcanic rock formed by erosion from volcanoes over millions of years. The rock takes on a variety of unique shapes such as towers, cones, valleys and caves.",
    imgUrl: "https://i.postimg.cc/76V3qsSf/cappadocia.jpg",
    reverse: false,
  },
  {
    province: "Sumatera Utara",
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
];

export interface IDestinationContainer {}

const DestinationContainer: FunctionComponent<IDestinationContainer> = () => {
  return (
    <Container>
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {data.map((el, i) => {
          return (
            <SwiperSlide key={i}>
              <Wrapper>
                <Left>
                  <City>{el.province}</City>
                  <Destination>{el.destination}</Destination>
                  <Description>{el.description}</Description>
                  <Explore
                    href={`/destination/${el.destination
                      .toLowerCase()
                      .replace(/ /g, "-")
                      .replace(/[^\w-]+/g, "")}`}
                  >
                    Explore
                  </Explore>
                </Left>
                <Right>
                  <Card key={i}>
                    <DestinationName>{el.destination}</DestinationName>
                    <CityCard>{el.province}</CityCard>
                    <CardImg
                      src={el.imgUrl}
                      alt="Destination Image"
                      width={1920}
                      height={1080}
                      priority
                    />
                  </Card>
                </Right>
              </Wrapper>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Container>
  );
};
export default DestinationContainer;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 10%;
`;
const Wrapper = styled.div`
  width: 100%;
  padding: 10%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;
const Left = styled.div`
  text-align: left;
  width: 500px;
`;

const City = styled.h1`
  font-weight: 700;
  color: #f57f5b;
  font-size: 6rem;
`;
const Destination = styled.p`
  font-size: 16px;
  color: #eff5f5;
`;
const Description = styled.p`
  font-weight: 300;
  font-size: 12px;
  color: #777777;
  margin: 1.5rem 0;
`;
const Explore = styled(Link)`
  color: #222;
  padding: 0.5rem 1rem;
  background-color: #f57f5b;
  border-radius: 10px;
`;
const Right = styled.div`
  text-align: left;
`;
const Card = styled.div`
  width: 100%;
  height: 70px;

  @media screen and (min-width: 768px) {
    height: 200px;
    width: 180px;
  }

  @media screen and (min-width: 1024px) {
    height: 250px;
    width: 220px;
  }
`;
const DestinationName = styled.h3`
  color: #eff5f5;
  font-weight: 400;
  font-size: 1rem;
`;
const CityCard = styled.p`
  color: #dbdcde;
  font-weight: 300;
  font-size: 0.8rem;
`;
const CardImg = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  margin: 1rem 0;
  object-fit: cover;
`;
