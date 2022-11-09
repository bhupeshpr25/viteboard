import { Point } from "./types";

//method which accepts context, points and colors
export const drawStroke = (
  context: CanvasRenderingContext2D,
  points: Point[],
  color: string
) => {
  if (!points.length) {
    return;
  }
  context.strokeStyle = color;
  context.beginPath();
  context.moveTo(points[0].x, points[0].y);
  points.forEach((point) => {
    context.lineTo(point.x, point.y);
    context.stroke();
  });
  context.closePath();
};

//function to clear canvas
export const clearCanvas = (canvas: HTMLCanvasElement) => {
  //get canvas context
  const context = canvas.getContext("2d");
  if (!context) {
    return;
  }
  context.fillStyle = "#e2e2e2";
  context.fillRect(0, 0, canvas.width, canvas.height);
};

//create canvas rectangle
export const setCanvasSize = (
  canvas: HTMLCanvasElement,
  width: number,
  height: number
) => {
  canvas.width = width * 2;
  canvas.height = height * 2;
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  canvas.getContext("2d")?.scale(2, 2);
};

//gets blob from the canvas
export const getCanvasImage = (
  canvas: HTMLCanvasElement | null
): Promise<null | Blob> => {
  return new Promise((resolve, reject) => {
    if (!canvas) {
      return reject(null);
    }
    canvas.toBlob(resolve);
  });
};
