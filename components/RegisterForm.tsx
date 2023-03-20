"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ChangeEvent,
  FormEvent,
  FormEventHandler,
  FunctionComponent,
  HTMLInputTypeAttribute,
  useEffect,
  useState,
} from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import img from "../public/register-background.jpg";

export interface IRegisterForm {}
export interface IRegisterInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const RegisterForm: FunctionComponent<IRegisterForm> = () => {
  const [inputType, setInputType] =
    useState<HTMLInputTypeAttribute>("password");
  const [input, setInput] = useState<IRegisterInput>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [confirmPass, setConfirmPass] = useState<String>("");
  const [match, setMatch] = useState<Boolean>(true);

  const router = useRouter();

  useEffect(() => {
    if (input.password !== confirmPass) {
      setMatch(false);
    } else {
      setMatch(true);
    }
  }, [match, input.password, confirmPass]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      await axios({
        url: "http://localhost:8080/users/register",
        method: "POST",
        data: input,
      });

      router.push("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Background src={img} alt="Login Image" />
      <DarkBg />

      <Wrapper>
        {/* <Headline>
          &quot;Escape to Paradise: The World&apos;s Most Beautiful Places&quot;
        </Headline> */}
        <Headline>
          Create new account
          <span style={{ color: "#f57f5b", fontSize: "3.5rem" }}>.</span>
        </Headline>
        <Text>
          Already have an account?{" "}
          <Link href="/login" style={{ color: "#f57f5b" }}>
            Log In
          </Link>
        </Text>
        <Form onSubmit={handleSubmit}>
          <FormWrapper>
            <InputWrapper>
              <Label>
                First Name <span style={{ color: "#a72020" }}>*</span>
              </Label>
              <Input
                type="text"
                name="firstName"
                placeholder="Write your first name"
                required={true}
                onChange={handleChange}
                value={input.firstName}
              />
            </InputWrapper>
            <InputWrapper>
              <Label>
                Last Name <span style={{ color: "#a72020" }}>*</span>
              </Label>
              <Input
                type="text"
                name="lastName"
                placeholder="Write your last name"
                required={true}
                onChange={handleChange}
                value={input.lastName}
              />
            </InputWrapper>
          </FormWrapper>
          <InputWrapper>
            <Label>
              Email <span style={{ color: "#a72020" }}>*</span>
            </Label>
            <Input
              type="email"
              name="email"
              placeholder="example@mail.com"
              required={true}
              onChange={handleChange}
              value={input.email}
            />
          </InputWrapper>
          <InputWrapper>
            <Label>
              Password <span style={{ color: "#a72020" }}>*</span>
            </Label>
            <Input
              type={inputType}
              name="password"
              placeholder="Psssst"
              required={true}
              onChange={handleChange}
              value={input.password}
            />
          </InputWrapper>
          <InputWrapper
            style={{ border: !match ? "1px solid red" : "1px solid #454545" }}
          >
            <Label>
              Confirm Password <span style={{ color: "#a72020" }}>*</span>
            </Label>
            <Input
              type={inputType}
              name="password"
              placeholder="Psssst"
              required={true}
              onChange={(e) => setConfirmPass(e.target.value)}
            />
          </InputWrapper>
          <div>
            <input
              style={{
                marginRight: "10px",
                padding: "1rem",
                border: "none",
                outline: "none",
                width: "17px",
                height: "17px",
              }}
              type="checkbox"
              name=""
              id=""
              onChange={(e) => {
                if (e.target.checked) {
                  setInputType("text");
                } else {
                  setInputType("password");
                }
              }}
              className="mr-2"
            />
            <label style={{ color: "#b0b0b0" }}>Show password</label>
          </div>

          <Button type="submit" value="Register" disabled={!match} />
        </Form>
      </Wrapper>
    </Container>
  );
};
export default RegisterForm;

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

const Background = styled(Image)`
  width: 100%;
  height: 100vh;
`;

const DarkBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(
    90deg,
    rgb(34, 34, 34) 0%,
    rgba(34, 34, 34, 0.9) 40%,
    rgba(34, 34, 34, 0.8) 70%,
    rgba(34, 34, 34, 0.5) 100%
  );
`;

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  padding: 0 5%;
  padding-top: 10rem;

  @media screen and (min-width: 768px) {
    padding: 10%;
  }
`;
const Text = styled.p`
  color: #dbdcde;
`;
const Headline = styled.h3`
  font-size: 2rem;
  color: #eff5f5;

  @media screen and (min-width: 768px) {
    font-size: 3.5rem;
  }
`;
const Form = styled.form`
  margin: 1.5rem 0;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 470px;
  }
`;

const FormWrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #454545;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  margin: 1rem 0;
`;
const Label = styled.label`
  margin-bottom: 0.5rem;
  font-size: 0.8rem;
  font-weight: 700;
  color: #222;
`;

const Input = styled.input`
  background-color: #454545;
  outline: none;
  border: none;
  color: #dbdcde;
  font-size: 16px;
`;

const Button = styled.input`
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  border-radius: 10px;
  border: none;
  font-size: 18px;
  font-weight: 500;
  color: #222;
  background-color: #f57f5b;
  cursor: pointer;
`;
