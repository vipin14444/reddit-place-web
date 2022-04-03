import React, { FC, useContext, useState } from "react";
import styled from "styled-components";
import COLOR from "../../../enums/color";
import { ITile } from "../../../models/ITile";
import { useStore } from "../../../store/store";
import TileOptions from "./TileOptions";

type Props = {
  data: ITile;
};

const TileComponent: FC<Props> = ({ data }) => {
  const { x, y } = data;
  const [color, setColor] = useState(data.color);
  const [id, setId] = useState(data.id);
  const [showOptions, setShowOptions] = useState(false);

  const setCurrentTileCoordinates = useStore((state) => state.setCoords);

  const updateCords = () => {
    setCurrentTileCoordinates({ x, y });
  };

  const onClickTile = () => {
    setShowOptions(true);
  };

  const onClickColor = (newColor: COLOR) => {
    setColor(newColor);
    setShowOptions(false);
  };

  return (
    <Container onClick={onClickTile} onMouseOver={updateCords} bgColor={color}>
      <TileOptions
        show={showOptions}
        setShow={setShowOptions}
        onClickColor={onClickColor}
      />
    </Container>
  );
};

export default TileComponent;

const Container = styled.div<{ bgColor: string }>`
  background-color: ${(props) => props.bgColor};

  &:hover {
    border: 1px solid black;
  }
`;
