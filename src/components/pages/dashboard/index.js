import React from "react";
import styled from "styled-components";

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
  return (
    <Container>
      <Title>
        This is DASHBOARD you can't assess this page until you login
      </Title>
    </Container>
  );
};

export default Dashboard;
