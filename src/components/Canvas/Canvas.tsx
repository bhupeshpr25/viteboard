import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  drawStroke,
  clearCanvas,
  setCanvasSize,
} from "../../utils/canvasUtils";
import {
  beginStroke,
  endStroke,
  updateStroke,
} from "../../modules/currentStroke/actions";
import { strokesSelector } from "../../modules/strokes/reducer";
import { currentStrokeSelector } from "../../modules/currentStroke/reducer";
import { historyIndexSelector } from "../../modules/historyIndex/reducer";

import { useCanvas } from "../../CanvasContext";
import * as styles from "./Canvas.css";

//canvas size constants
const WIDTH = 1200;
const HEIGHT = 700;

export const Canvas = () => {
  //get canvasRef and pass to <canvas>
  const canvasRef = useCanvas();

  //helper function to get canvas and return an object with canvas and context
  const getCanvasWithContext = (canvas = canvasRef.current) => {
    return { canvas, context: canvas?.getContext("2d") };
  };
  const currentStroke = useSelector(currentStrokeSelector);
  // get state and return a boolean from the state
  const isDrawing = !!currentStroke.points.length;
  const historyIndex = useSelector(historyIndexSelector);
  const strokes = useSelector(strokesSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    const { context } = getCanvasWithContext();
    if (!context) {
      return;
    }
    requestAnimationFrame(() =>
      drawStroke(context, currentStroke.points, currentStroke.color)
    );
  }, [currentStroke]);

  useEffect(() => {
    const { canvas, context } = getCanvasWithContext();
    if (!context || !canvas) {
      return;
    }
    requestAnimationFrame(() => {
      clearCanvas(canvas);

      strokes.slice(0, strokes.length - historyIndex).forEach((stroke) => {
        drawStroke(context, stroke.points, stroke.color);
      });
    });
  }, [historyIndex]);

  //get canvas with context and set canvas size
  useEffect(() => {
    const { canvas, context } = getCanvasWithContext();
    if (!canvas || !context) {
      return;
    }

    setCanvasSize(canvas, WIDTH, HEIGHT);

    context.lineJoin = "round";
    context.lineCap = "round";
    context.lineWidth = 5;
    context.strokeStyle = "black";

    clearCanvas(canvas);
  }, []);

  //define handlers for startDrawing, endDrawing and draw events and pass in <canvas>

  //for handling mouse press
  const startDrawing = ({
    nativeEvent,
  }: React.MouseEvent<HTMLCanvasElement>) => {
    const { offsetX, offsetY } = nativeEvent;
    dispatch(beginStroke(offsetX, offsetY));
  };

  //for handling mouse lift
  const endDrawing = () => {
    if (isDrawing) {
      dispatch(endStroke(historyIndex, currentStroke));
    }
  };

  //for handling mouse movement
  const draw = ({ nativeEvent }: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) {
      return;
    }
    const { offsetX, offsetY } = nativeEvent;

    dispatch(updateStroke(offsetX, offsetY));
  };

  return (
    <div className={styles.container}>
      <canvas
        className={styles.canvas}
        onMouseDown={startDrawing}
        onMouseUp={endDrawing}
        onMouseOut={endDrawing}
        onMouseMove={draw}
        ref={canvasRef}
      />
    </div>
  );
};
