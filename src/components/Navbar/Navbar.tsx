import { useDispatch, useSelector } from "react-redux";
import { undo, redo } from "../../modules/historyIndex/actions";
import { strokesLengthSelector } from "../../modules/strokes/reducer";
import { useCanvas } from "../../CanvasContext";
import { saveAs } from "file-saver";
import { getCanvasImage } from "../../utils/canvasUtils";
import * as styles from "./Navbar.css";

export const Navbar = () => {
  const dispatch = useDispatch();
  const undoLimit = useSelector(strokesLengthSelector);

  const canvasRef = useCanvas();

  //exporting drawing as image
  const exportToFile = async () => {
    const file = await getCanvasImage(canvasRef.current);
    if (!file) {
      return;
    }
    saveAs(file, "drawing.png");
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.header}>viteboard</div>
      <div className={styles.navMenu}>
        <button
          className={styles.button}
          onClick={() => dispatch(undo(undoLimit))}
        >
          ↶
        </button>
        <button className={styles.button} onClick={() => dispatch(redo())}>
          ↷
        </button>
      </div>
      <div className={styles.button} onClick={exportToFile}>
        export
      </div>
    </nav>
  );
};
