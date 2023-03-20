"use client";

import Image from "next/image";
import {
  ChangeEvent,
  FormEvent,
  FunctionComponent,
  MouseEvent,
  useState,
} from "react";
import styled from "styled-components";

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

export interface IDestinationData {
  province: string;
  destination: string;
  description: string;
  imgUrl: string;
  reverse: boolean;
}

export interface IDestinationSearch {}

const DestinationSearch: FunctionComponent<IDestinationSearch> = () => {
  const [input, setInput] = useState("");
  const [destination, setDestination] = useState<IDestinationData[]>([]);
  const [notFound, setNotFound] = useState("");
  const [filter, setFilter] = useState(false);

  const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    const res = data.filter((el) => {
      return el.province
        .toLowerCase()
        .replace(/\s+/g, "")
        .includes(e.target.value.toLowerCase().replace(/\s+/g, ""));
    });

    setFilter(true);
    setDestination(res);
  };

  const handleClear = () => {
    setFilter(false);
    setDestination([]);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = data.filter((el) => {
      return el.destination
        .toLowerCase()
        .replace(/\s+/g, "")
        .includes(input.toLowerCase().replace(/\s+/g, ""));
    });

    if (res.length === 0) {
      setNotFound("No destination");
      setDestination([]);
    } else {
      setNotFound("");
      setDestination(res);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <form action="">
            <label>Province</label>
            <br />
            <br />
            <input
              type="radio"
              id="html"
              name="fav_language"
              value="Sumatera Utara"
              onChange={handleFilterChange}
            />
            <label>Sumatera Utara</label>
            <br />
            <input
              type="radio"
              id="css"
              name="fav_language"
              value="Bali"
              onChange={handleFilterChange}
            />
            <label>Bali</label>
            <br />
            <input
              type="radio"
              id="javascript"
              name="fav_language"
              value="Jakarta"
              onChange={handleFilterChange}
            />
            <label>Jakarta</label>
            <br />
            <br />

            <input type="reset" value="Clear" onClick={handleClear} />
          </form>
        </Left>
        <Right>
          <form action="" onSubmit={handleSubmit}>
            <Input
              type="search"
              name=""
              id=""
              placeholder="Search your destination"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button>Search</button>
          </form>

          {destination.length !== 0 ? (
            <CardWrapper>
              {destination.map((el, i) => {
                return (
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
                );
              })}
            </CardWrapper>
          ) : (
            <div>{notFound}</div>
          )}
        </Right>
      </Wrapper>
    </Container>
  );
};
export default DestinationSearch;

const Container = styled.div`
  padding: 0 10%;
  width: 100%;
`;
const Input = styled.input`
  margin: 0 auto;
  padding: 0.5rem 1rem;
  width: 300px;
  border-radius: 10px;
  border: none;
`;

const Card = styled.div`
  width: 100%;
  height: 70px;
  margin: 1.5rem 1.5rem 1.5rem 0;

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
const CardWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Left = styled.div`
  width: 250px;

  background-color: #eff5f5;
  margin-right: 60px;
  border-radius: 10px;
  padding: 1rem;
`;
const Right = styled.div``;
