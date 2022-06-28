import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "../../../context/auth/Context";
import DashNav from "./DashNav";

const Container = styled.div`
  height: 200vh;
  background-color: aqua;
`;
const Title = styled.h1`
  font-size: 50px;
  margin-bottom: 20px;
  text-align: center;
`;
const Dashboard = () => {
  const { user } = useContext(Context);
  console.log("asff", user);
  return (
    <Container>
      <DashNav />
      <Title>Welcome to the Dashboard</Title>
    </Container>
  );
};

export default Dashboard;
