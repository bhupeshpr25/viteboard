import { Canvas } from "./components/Canvas/Canvas";
import { Navbar } from "./components/Navbar/Navbar";
import { Palette } from "./components/Palette/Palette";

function App() {
  return (
    <div>
      <Navbar />
      <Palette />
      <Canvas />
    </div>
  );
}

export default App;
