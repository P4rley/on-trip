"use client";
import styled from "styled-components";
import DestinationCard from "../components/DestinationCard";

const data = [
  {
    city: "Cappadocia",
    description:
      "Cappadocia is famous for its stretches of soft volcanic rock formed by erosion from volcanoes over millions of years. The rock takes on a variety of unique shapes such as towers, cones, valleys and caves.",
    imgUrl: "https://i.postimg.cc/76V3qsSf/cappadocia.jpg",
    reverse: false,
  },
  {
    city: "Lake Toba",
    description:
      "Toba is a place to  sit and take in the view of the picturesque mountains set against the cool clear lake, you will feel the worries of the world melt away. As the lake sits 900 meters above sea level, therefore the climate here is cooler which gives a well-needed break from the heat, humidity, and pollution of the city.",
    imgUrl: "https://i.postimg.cc/V6j7nWn8/lake-toba.jpg",
    reverse: true,
  },
  {
    city: "Cape Town Central",
    description:
      "Tourist brochure-views at Blaauwberg Beach and Kirstenbosch National Botanical Gardens are within easy driving distance of 'The Mother City.' The Cape of Good Hope Nature Reserve provides sweeping sea vistas, hiking trails and wildlife encounters.",
    imgUrl: "https://i.postimg.cc/q7KQHxm3/cape-town.jpg",
    reverse: false,
  },
];

const Destination = () => {
  return (
    <Container>
      <Circle>
        <Title>Destination</Title>
      </Circle>

      <Header>
        <Heading>Our best destination for you.</Heading>
        <SubHeading>
          With a world full of fascinating destinations, choosing the perfect
          vacation spot can present a challenge. That&apos;s why On Trip to
          compile this list of the world&apos;s best places to visit.
        </SubHeading>
      </Header>

      <CardContainer>
        {data.map((el, i) => {
          return (
            <div key={i}>
              <DestinationCard
                city={el.city}
                description={el.description}
                imgUrl={el.imgUrl}
                reverse={el.reverse}
              />
            </div>
          );
        })}
      </CardContainer>
    </Container>
  );
};
export default Destination;

const Container = styled.section`
  padding: 10% 5%;

  @media screen and (min-width: 1024px) {
    padding: 0 10%;
  }
`;
const Circle = styled.div`
  width: 100px;
  height: 100px;
  background-color: rgba(245, 127, 91, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;
const Title = styled.h3`
  color: #f57f5b;
  font-weight: 400;
  font-size: 1rem;
`;
const Header = styled.div`
  margin: 1.5rem 0;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
`;
const Heading = styled.h2`
  color: #eff5f5;
  font-weight: 400;
`;
const SubHeading = styled.p`
  margin-top: 1rem;
  color: #c38d7d;
  font-weight: 300;
  font-size: 0.75rem;

  @media screen and (min-width: 768px) {
    max-width: 400px;
    margin-top: 0;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
