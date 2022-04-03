import React, { useContext } from "react";
import styled from "styled-components";
import { useStore } from "../../store/store";

const Coordinates = () => {
  const currentTileCoordinates = useStore((state) => state.coords);
  if (!currentTileCoordinates) return null;

  return (
    <Container>{`(${currentTileCoordinates.x}, ${currentTileCoordinates.y})`}</Container>
  );
};

export default Coordinates;

const Container = styled.div`
  position: fixed;
  top: 1rem;
  left: calc(50%);
  transform: translateX(-50%);
  background-color: white;
  padding: 0.5rem 1rem;
  border-radius: 10000px;
  font-size: 0.75rem;
  font-weight: 600;
`;
