import { AnyAction } from "@reduxjs/toolkit"
import { Stroke } from "../../utils/types"

export const END_STROKE = "END_STROKE"

export type Action =
  | AnyAction
  | {
      type: typeof END_STROKE
      payload: { stroke: Stroke; historyIndex: number }
    }

export const endStroke = (historyIndex: number, stroke: Stroke) => {
  return { type: END_STROKE, payload: { historyIndex, stroke } }
}
