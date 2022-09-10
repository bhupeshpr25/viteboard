import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

export const palette = style({
  background: "#008080",
  position: "fixed",
  display: "flex",
  justifyContent: "center",
  padding: "10px",
  bottom: "10px",
  left: "5%",
  width: "88%",
  borderRadius: "10px",
});

export const colors = style({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
});

export const color = style({
  width: "40px",
  height: "40px",
  cursor: "pointer",
});
