"use client";

import Image from "next/image";
import styled, { keyframes } from "styled-components";
import background from "../public/background.jpg";
import { FaSearchLocation, FaCalendarAlt, FaChevronDown } from "react-icons/fa";
import { IoMdPeople } from "react-icons/io";
import { ChangeEvent, useState } from "react";
import { motion } from "framer-motion";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Link from "next/link";

const Hero = () => {
  const [showDate, setShowDate] = useState(false);
  const [showPeople, setShowPeople] = useState(false);
  const [date, setDate] = useState({
    startDate: new Date().toISOString().slice(0, 10),
    endDate: new Date().toISOString().slice(0, 10),
  });
  const [people, setPeople] = useState("");
  const [index, setIndex] = useState(0);

  const handleDate = (e: ChangeEvent<HTMLInputElement>) => {
    setDate({ ...date, [e.target.name]: e.target.value });
  };

  const handleShowDate = () => {
    if (showDate) {
      setShowDate(false);
    } else {
      setShowDate(true);
    }
  };

  const handleShowPeople = () => {
    if (showPeople) {
      setShowPeople(false);
    } else {
      setShowPeople(true);
    }
  };

  const handleArrow = (direction: string) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : 2);
    }
    if (direction === "r") {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };

  return (
    <Container>
      <BodyWrapper style={{ transform: `translateX(${-100 * index}vw)` }}>
        <Background
          src="https://i.postimg.cc/qB2GPGY7/background.jpg"
          width={4896}
          height={3264}
          alt="Background Image"
          priority
        />
        <Video autoPlay loop muted>
          <source src="bg-video.mp4" type="video/mp4" />
        </Video>
        <Background
          src="https://i.postimg.cc/qB2GPGY7/background.jpg"
          alt="Background Image"
          priority
          width={4896}
          height={3264}
        />
      </BodyWrapper>

      <DarkBg></DarkBg>

      <Wrapper>
        <BoxWrapper>
          <Box>
            <Heading>
              <FaSearchLocation style={{ color: "#eff5f5", fontSize: 20 }} />
              <Text>Location</Text>
              <DownIcon style={{ color: "#eff5f5", fontSize: 20 }} />
            </Heading>
            <Desc>Find your destination</Desc>
          </Box>

          <Box>
            <Heading>
              <FaCalendarAlt style={{ color: "#eff5f5", fontSize: 20 }} />
              <Text>Date</Text>
              <DownIcon
                style={{ color: "#eff5f5", fontSize: 20 }}
                onClick={handleShowDate}
              />
            </Heading>

            <Desc>When it will start?</Desc>

            {showDate && (
              <DateWrapper
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <Label>
                  Start Date
                  <Input
                    type="date"
                    name="startDate"
                    id=""
                    value={date.startDate}
                    onChange={handleDate}
                    min={new Date().toISOString().slice(0, 10)}
                  />
                </Label>
                <Label>
                  End Date
                  <Input
                    type="date"
                    name="endDate"
                    id=""
                    value={date.endDate}
                    onChange={handleDate}
                    min={new Date().toISOString().slice(0, 10)}
                  />
                </Label>
              </DateWrapper>
            )}
          </Box>

          <Box>
            <Heading>
              <IoMdPeople style={{ color: "#eff5f5", fontSize: 20 }} />
              <Text>People</Text>
              <DownIcon
                style={{ color: "#eff5f5", fontSize: 20 }}
                onClick={handleShowPeople}
              />
            </Heading>
            <Desc>How many people?</Desc>

            {showPeople && (
              <Label
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                People
                <Input
                  type="number"
                  name="people"
                  id=""
                  placeholder="0"
                  value={people}
                  onChange={(e) => setPeople(e.target.value)}
                />
              </Label>
            )}
          </Box>
        </BoxWrapper>
        <Button href="/cart">
          <p>Confirm</p>
        </Button>
      </Wrapper>
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
export default Hero;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;
const Background = styled(Image)`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`;
const DarkBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
`;
const Wrapper = styled.div`
  z-index: 2;
  padding: 1rem;
  position: absolute;
  top: 15%;
  left: 5%;
  right: 5%;

  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);

  @media screen and (min-width: 768px) {
    width: unset;
    height: unset;
    top: 40%;
    left: 7%;
    right: 7%;
  }

  @media screen and (min-width: 1024px) {
    width: unset;
    height: unset;
    top: 40%;
    left: 15%;
    right: 15%;
  }

  @media screen and (min-width: 1280px) {
    width: unset;
    height: unset;
    top: 40%;
    left: 25%;
    right: 25%;
  }
`;
const BoxWrapper = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 1rem;
  flex-direction: column;

  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (min-width: 768px) {
    justify-content: space-between;
    flex-direction: row;
  }
`;
const Box = styled.div`
  padding: 1rem;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
`;
const Heading = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: space-between;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    justify-content: space-between;
  }
`;
const Text = styled.p`
  color: #eff5f5;
`;
const Desc = styled.p`
  font-size: 10px;
  font-weight: 300;
  color: #eff5f5;
  margin-top: 1rem;
  text-align: left;
`;
const Input = styled(motion.input)`
  display: block;
  border: none;
  border-radius: 0.25rem;
  border: 1px solid transparent;
  line-height: 1.5rem;
  font-size: 1rem;
  color: #eff5f5;
  width: 100%;
  margin-top: 0.5rem;
  background-color: transparent;

  &::placeholder {
    color: #eff5f5;
  }

  &:focus {
    outline: none;
  }
`;

const DownIcon = styled(FaChevronDown)`
  transition: all 0.4s ease-in-out;
`;
const DateWrapper = styled(motion.div)``;
const Label = styled(motion.label)`
  font-size: 0.75rem;
  font-weight: 400;
  display: block;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  color: #b0bec5;
  border: 1px solid #eceff1;
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
`;
const BodyWrapper = styled.div`
  position: relative;
  width: 300vw;
  height: 100%;
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
  transition: all 0.4s ease-in-out;
  &:hover {
    background-color: #dbdcde;
    color: black;
    border-color: #dbdcde;
  }
  @media screen and (max-width: 500px) {
    width: 30px;
    height: 30px;
  }
`;
const Right = styled(Left)``;
const Video = styled.video`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`;

const Button = styled(Link)`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  p {
    color: #222;
    background-color: #f57f5b;
    padding: 0.5rem 1.5rem;
    border-radius: 10px;
  }
`;
