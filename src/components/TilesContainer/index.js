import React from 'react';

import { isPossibleToMove, getNewTiles, saveState } from '../../utils/tiles';
import useStore from "../../hooks/useStore";

import Tiles from '../Tiles';


function TilesContainer() {
  const [{ tiles }, dispatch] = useStore(state => ({ tiles: state.tiles }));

  const onClick = (tiles) => (currentTile) => () => {
    if (isPossibleToMove(tiles, currentTile)) {
      const newTiles = getNewTiles(tiles, currentTile);
      dispatch({ type: 'CHANGE_POSITION', payload: newTiles });
      saveState(newTiles);
    }
  };

  return <Tiles onClick={onClick(tiles)} data={tiles}/>
}

export default TilesContainer;
