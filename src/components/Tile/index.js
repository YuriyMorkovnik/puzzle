import React from 'react';
import styles from './Tile.module.css'

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
      className={styles.root}
      onClick={onClick}>
      <span className={`${styles.title} ${isTruePosition ? styles.truePosition : ''}`}>{title}</span>
    </div>
  )
}

export default Tile;
