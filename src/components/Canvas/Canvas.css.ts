import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

export const container = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const canvas = style({
  borderRadius: "10px",
  marginTop: "20px",
  cursor: "crosshair",
});
