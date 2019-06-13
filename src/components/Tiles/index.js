import React from 'react';

import Tile from '../Tile';

import styles from './Tiles.module.css';

function Tiles(props) {
  const { onClick, data } = props;
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        {data.map(item => <Tile {...item} key={String(item.title)} onClick={onClick(item)}/>)}
      </div>
    </div>
  )
}

export default Tiles;
