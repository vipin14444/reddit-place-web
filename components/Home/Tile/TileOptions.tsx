import React, { Dispatch, FC, SetStateAction, SyntheticEvent } from "react";
import styled from "styled-components";
import COLOR from "../../../enums/color";
import ColorPicker from "./ColorPicker";

type Props = {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  onClickColor: (color: COLOR) => void;
};

const TileOptions: FC<Props> = ({ show, setShow, onClickColor }) => {
  if (!show) return null;

  const onClickOutside = (e: SyntheticEvent) => {
    e.stopPropagation();
    setShow(false);
  };

  return (
    <Wrapper onClick={onClickOutside}>
      <Container onClick={(e) => e.stopPropagation()}>
        <ColorPicker onClickColor={onClickColor} />
      </Container>
    </Wrapper>
  );
};

export default TileOptions;

const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.65);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  inset: 0;
  cursor: initial !important;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  background-color: white;
  padding: 1rem;
  border-radius: 0.5rem;
`;
