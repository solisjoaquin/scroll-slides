import Layer from "./components/Layer";
import LineText from "./components/Line";

function App() {
  return (
    <div className="group/wrap relative">
      <div className="relative h-screen snap-y snap-mandatory overflow-y-auto scroll-smooth">
        <Layer styles={"w-full"}>
          <LineText>Pure CSS</LineText>
          <LineText styles={"group-hover:animation-delay-300"}>
            Tailwind Scroll
          </LineText>
        </Layer>

        <Layer styles={"bg-green-500 bg-opacity-10"}>
          <LineText>Animate</LineText>
          <LineText styles={"group-hover:animation-delay-300"}>
            Anything
          </LineText>
        </Layer>

        <Layer>
          <LineText>Pure CSS</LineText>
          <LineText styles={"group-hover:animation-delay-300"}>
            Tailwind Scroll
          </LineText>
        </Layer>

        <Layer styles={"bg-pink-500 bg-opacity-10"}>
          <LineText>Animate</LineText>
          <LineText styles={"group-hover:animation-delay-300"}>
            Anything
          </LineText>
        </Layer>
      </div>
    </div>
  );
}

export default App;
