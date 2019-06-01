import { getState } from "./utils/tiles";

const savedTiles = getState();

const starTiles = [
  { position: {x: 3, y: 3}, truePosition: { x: 3, y: 3 }, title: 0 },
  { position: {x: 3, y: 2}, truePosition: { x: 0, y: 0 }, title: 1 },
  { position: {x: 3, y: 1}, truePosition: { x: 1, y: 0 }, title: 2 },
  { position: {x: 1, y: 1}, truePosition: { x: 2, y: 0 }, title: 3 },
  { position: {x: 2, y: 2}, truePosition: { x: 3, y: 0 }, title: 4 },
  { position: {x: 2, y: 3}, truePosition: { x: 0, y: 1 }, title: 5 },
  { position: {x: 1, y: 3}, truePosition: { x: 1, y: 1 }, title: 6 },
  { position: {x: 3, y: 0}, truePosition: { x: 2, y: 1 }, title: 7 },
  { position: {x: 0, y: 3}, truePosition: { x: 3, y: 1 }, title: 8 },
  { position: {x: 2, y: 1}, truePosition: { x: 0, y: 2 }, title: 9 },
  { position: {x: 1, y: 2}, truePosition: { x: 1, y: 2 }, title: 10 },
  { position: {x: 2, y: 0}, truePosition: { x: 2, y: 2 }, title: 11 },
  { position: {x: 0, y: 2}, truePosition: { x: 3, y: 2 }, title: 12 },
  { position: {x: 1, y: 0}, truePosition: { x: 0, y: 3 }, title: 13 },
  { position: {x: 0, y: 1}, truePosition: { x: 1, y: 3 }, title: 14 },
  { position: {x: 0, y: 0}, truePosition: { x: 2, y: 3 }, title: 15 },
];

export default {
  tiles: savedTiles ? savedTiles : starTiles,
};
