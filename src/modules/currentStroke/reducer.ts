import {
  Action,
  UPDATE_STROKE,
  BEGIN_STROKE,
  END_STROKE,
  SET_STROKE_COLOR,
} from "./actions";
import { RootState } from "../../utils/types";

// define initial state with currentStroke
const initialState: RootState["currentStroke"] = {
  points: [],
  color: "#000",
};

//return states
export const reducer = (
  state: RootState["currentStroke"] = initialState,
  action: Action
) => {
  switch (action.type) {
    case BEGIN_STROKE: {
      return { ...state, points: [action.payload] };
    }
    case UPDATE_STROKE: {
      return {
        ...state,
        points: [...state.points, action.payload],
      };
    }
    case SET_STROKE_COLOR: {
      return {
        ...state,
        color: action.payload,
      };
    }
    case END_STROKE: {
      return {
        ...state,
        points: [],
      };
    }
    default:
      return state;
  }
};

//selector which recieves RootState and returns currentStroke
export const currentStrokeSelector = (state: RootState) => state.currentStroke;
