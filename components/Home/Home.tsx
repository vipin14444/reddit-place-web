import React from "react";
import styled from "styled-components";
import Coordinates from "./Coordinates";
import Grid from "./Grid";

const Home = () => {
  return (
    <Container>
      <Coordinates />
      <Grid />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  background-color: #a8a8a8;
  min-height: 100vh;
  display: grid;
  place-content: center;
`;
