import { configureStore } from "@reduxjs/toolkit";
import { reducer as currentStroke } from "./modules/currentStroke/reducer";
import { reducer as historyIndex } from "./modules/historyIndex/reducer";
import { reducer as strokes } from "./modules/strokes/reducer";
import logger from "redux-logger";

//create redux store
export const store = configureStore({
  reducer: {
    historyIndex,
    strokes,
    currentStroke,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
