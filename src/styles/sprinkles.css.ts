import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import { vars } from "./theme.css";

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { "@media": "screen and (min-width: 768px)" },
    desktop: { "@media": "screen and (min-width: 1024px)" }
  },
  defaultCondition: "mobile",
  properties: {
    fontSize: vars.fontSizes,
    lineHeight: vars.lineHeights
  },
  shorthands: {
    text: ["fontSize", "lineHeight"]
  }
});

export const sprinkles = createSprinkles(responsiveProperties);
