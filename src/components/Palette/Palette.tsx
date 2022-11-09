import { useDispatch } from "react-redux";
import { setStrokeColor } from "../../modules/currentStroke/actions";
import * as styles from "./Palette.css";

//define color palette
const colors = [
  "#1a1a1a",
  "#808b96",
  "#c0c0c0",
  "#ffffff",
  "#b3e5fc",
  "#29b6f6 ",
  "#0080ff",
  "#2929fc",
  "#5e17ed",
  "#7405e3",
  "#6f00be",
  "#800080",
  "#780058",
  "#a00035",
  "#c0003a",
  "#ee0f43",
  "#eb0000",
  "#dc3e00",
  "#f4511e",
  "#ff8c00",
  "#ffe016",
  "#95f100",
  "#00d374",
  "#00dc96",
  "#07e8e1",
  "#00b9b9",
  "#006666",
];

export const Palette = () => {
  const dispatch = useDispatch();

  const onColorChange = (color: string) => {
    dispatch(setStrokeColor(color));
  };

  return (
    <div className={styles.palette}>
      <div className={styles.colors}>
        {colors.map((color: string) => (
          <div
            key={color}
            onClick={() => {
              onColorChange(color);
            }}
            className={styles.color}
            style={{ backgroundColor: color }}
          ></div>
        ))}
      </div>
    </div>
  );
};
