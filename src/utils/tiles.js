export const findZero = tiles => tiles.find(({ title }) => title === 0);

export const isPossibleToMove = (tiles, currentTile) => {
  const zero = findZero(tiles);
  const { position: { x: zeroX, y: zeroY } } = zero;
  const { position: { x: currentX, y: currentY } } = currentTile;
  return ((currentX === zeroX + 1 || currentX === zeroX - 1) && currentY === zeroY)
    || ((currentY === zeroY + 1 || currentY === zeroY - 1) && currentX === zeroX);

};

export const getNewTiles = (tiles, currentTile) => {
  const zero = findZero(tiles);
  return tiles.map((item) => {
    if (item.title === zero.title) {
      return { ...zero, position: currentTile.position };
    }
    if (item.title === currentTile.title) {
      return { ...currentTile, position: zero.position }
    }
    return item;
  })
};

const serialObj = obj => JSON.stringify(obj);

export const saveState = (tiles) => {
  localStorage.setItem('tiles', serialObj(tiles));
};


export const getState = () => JSON.parse(localStorage.getItem('tiles'));

