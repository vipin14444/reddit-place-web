import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Tile, { ITile } from "../../models/ITile";
import TileComponent from "./Tile/Tile";

const GRID_SIZE = {
  ROWS: 70,
  COLUMNS: 140,
};

const TILE_SIZE = 10;

const Grid = () => {
  const [grid, setGrid] = useState<ITile[][]>([]);

  useEffect(() => {
    /**
     * Grid initialization
     */

    const init = () => {
      let array: ITile[][] = [];

      for (let i = 0; i < GRID_SIZE.ROWS; i++) {
        let rowData: ITile[] = [];
        for (let j = 0; j < GRID_SIZE.COLUMNS; j++) {
          let tileData: ITile = new Tile({ x: i, y: j });
          rowData.push(tileData);
        }
        array.push(rowData);
      }

      setGrid(array);
    };

    init();
  }, []);

  return (
    <Container
      tileSize={TILE_SIZE}
      rows={GRID_SIZE.ROWS}
      columns={GRID_SIZE.COLUMNS}
    >
      {grid.map((row, i) =>
        row.map((tile, j) => <TileComponent key={j} data={tile} />)
      )}
    </Container>
  );
};

export default Grid;

const Container = styled.div<{
  rows: number;
  columns: number;
  tileSize: number;
}>`
  display: grid;
  grid-template-columns: repeat(
    ${(props) => props.columns},
    ${(props) => `${props.tileSize}px`}
  );
  grid-template-rows: repeat(
    ${(props) => props.rows},
    ${(props) => `${props.tileSize}px`}
  );
  cursor: none;
`;
