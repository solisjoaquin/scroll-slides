import Layer from "./components/Layer";
import LineText from "./components/Line";

const content = [
  {
    title: "Pure CSS",
    subtitle: "Tailwind Scroll",
    background: "bg-green-500 bg-opacity-10",
    id: 1,
  },
  {
    title: "Animate",
    subtitle: "Anything",
    background: "bg-pink-500 bg-opacity-10",
    id: 2,
  },
  {
    title: "Pure CSS",
    subtitle: "Tailwind Scroll",
    background: "bg-green-500 bg-opacity-10",
    id: 3,
  },
  {
    title: "Animate",
    subtitle: "Anything",
    background: "bg-pink-500 bg-opacity-10",
    id: 4,
  },
];

function App() {
  return (
    <div className="group/wrap relative">
      <div className="relative h-screen snap-y snap-mandatory overflow-y-auto scroll-smooth">
        {content.map((item) => (
          <Layer key={item.id} styles={item.background}>
            <LineText>{item.title}</LineText>
            <LineText styles={"group-hover:animation-delay-300"}>
              {item.subtitle}
            </LineText>
          </Layer>
        ))}
      </div>
    </div>
  );
}

export default App;
