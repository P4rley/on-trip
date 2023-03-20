"use client";

import Image from "next/image";
import { FunctionComponent } from "react";
import styled from "styled-components";
import RegisterForm from "../../components/RegisterForm";

export interface IRegister {}

const Register: FunctionComponent<IRegister> = () => {
  return (
    <Container>
      <title>Register | On Trip</title>
      <RegisterForm />
    </Container>
  );
};
export default Register;

const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
