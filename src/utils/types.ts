//for x and y coordinates
export type Point = {
  x: number;
  y: number;
};

//for points and color
export type Stroke = {
  points: Point[];
  color: string;
};

// define type for our states
export type RootState = {
  currentStroke: Stroke;
  strokes: Stroke[];
  historyIndex: number;
};
