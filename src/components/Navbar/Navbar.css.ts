import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

export const nav = style({
  display: "flex",
  justifyContent: "space-between",
  background: "#008080",
  position: "fixed",
  top: "10px",
  left: "5%",
  width: "90%",
  borderRadius: "10px",
});

export const header = style({
  margin: "10px",
  color: "whitesmoke",
});

export const navMenu = style({
  fontFamily: vars.fonts.heading,
  marginBottom: vars.space.small,
  color: vars.colors.secondary,
  display: "flex",
});

export const button = style({
  background: "#07c4c4",
  color: "#fff",
  fontSize: vars.fontSizes.large,
  fontWeight: "bold",
  padding: "5px 10px",
  margin: "5px",
  cursor: "pointer",
  borderRadius: "5px",
  border: "none",
});
