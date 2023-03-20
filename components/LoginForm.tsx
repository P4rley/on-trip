import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next";
import {
  ChangeEvent,
  FormEvent,
  FunctionComponent,
  HTMLInputTypeAttribute,
  useState,
} from "react";
import styled from "styled-components";
import img from "../public/login-background.jpg";

export interface ILoginForm {}
export interface ILoginInput {
  email: string;
  password: string;
}

const LoginForm: FunctionComponent<ILoginForm> = () => {
  const [input, setInput] = useState<ILoginInput>({
    email: "",
    password: "",
  });
  const [inputType, setInputType] =
    useState<HTMLInputTypeAttribute>("password");

  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      const { data } = await axios({
        url: "http://localhost:8080/users/login",
        method: "POST",
        data: input,
      });

      setCookie("access_token", data.access_token);
      localStorage.setItem("access_token", data.access_token);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Background src={img} alt="Login Image" />
      <DarkBg />

      <Wrapper>
        <Headline>
          &quot;Escape to Paradise: The World&apos;s Most Beautiful Places&quot;
        </Headline>
        <Text>
          Dont&apos;t have an account yet?{" "}
          <Link href="/register" style={{ color: "rgb(245, 127, 91)" }}>
            Register
          </Link>
        </Text>
        <Form onSubmit={handleSubmit}>
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

          <Button type="submit" value="Login" />
        </Form>
      </Wrapper>
    </Container>
  );
};
export default LoginForm;

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

const Background = styled(Image)`
  width: 100%;
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
    font-size: 0 10%;
  }
`;
const Text = styled.p`
  color: #dbdcde;
`;
const Headline = styled.h3`
  font-size: 2rem;
  color: #eff5f5;
  margin-bottom: 1rem;

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
