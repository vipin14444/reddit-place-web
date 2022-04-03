import React, { FC } from "react";
import styled from "styled-components";
import COLOR from "../../../enums/color";

type Props = {
  onClickColor: (color: COLOR) => void;
};

const COLOR_TILE_SIZE = 40;

const ColorPicker: FC<Props> = ({ onClickColor }) => {
  return (
    <Container>
      {Object.values(COLOR).map((color, i) => (
        <ColorTile
          onClick={() => onClickColor(color)}
          bgColor={color}
          key={i}
        />
      ))}
    </Container>
  );
};

export default ColorPicker;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 300px;
  gap: 0.5rem;
`;

const ColorTile = styled.div<{ bgColor: string }>`
  width: ${`${COLOR_TILE_SIZE}px`};
  height: ${`${COLOR_TILE_SIZE}px`};
  font-size: ${`${COLOR_TILE_SIZE}px`};
  background-color: ${(props) => props.bgColor};
  border: 1px solid #e9e9e9;
  border-radius: 0.2em;
`;
