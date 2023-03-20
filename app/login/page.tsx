"use client";

import { FunctionComponent } from "react";
import styled from "styled-components";
import LoginForm from "../../components/LoginForm";

export interface ILogin {}

const Login: FunctionComponent<ILogin> = () => {
  return (
    <Container>
      <title>Login | On Trip</title>
      <LoginForm />
    </Container>
  );
};
export default Login;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
