import React from 'react';

import Tile from '../Tile';

import './index.css'

function Tiles(props) {
  const { onClick, data } = props;
  return (
    <div className="tiles-root">
      <div className="tiles-wrapper">
        {data.map(item => <Tile {...item} key={String(item.title)} onClick={onClick(item)}/>)}
      </div>
    </div>
  )
}

export default Tiles;
