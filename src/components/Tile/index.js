import React from 'react';
import './index.css'

function Tile(props) {
  const {
    title,
    position: { x: curX, y: curY },
    truePosition: { x: trueX, y: trueY },
    onClick,
  } = props;
  const style = {
    left: `${25 * curX}%`,
    top: `${25 * curY}%`,
  };
  const isTruePosition = curX === trueX && curY === trueY;
  if(!title) return <div/>;
  return (
    <div
      style={style}
      className="tile-root"
      onClick={onClick}>
      <span className={`tile-title ${isTruePosition ? 'true-position' : ''}`}>{title}</span>
    </div>
  )
}

export default Tile;
