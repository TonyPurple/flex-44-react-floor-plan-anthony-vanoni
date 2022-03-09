import "./styles.css";
import FloorPlan from "./FloorPlan";

export default function App() {
  const coldFood = [
    "Jello",
    "Watermelon",
    "Brussel Sprouts",
    "Jellybeans",
    "Tofu",
    "Green Grapes",
    "Chorizo"
  ];
  const frozenFood = ["Pizza", "Edamame", "Ice Cream", "Mixed Berries"];
  return (
    <div>
      <FloorPlan coldFood={coldFood} frozenFood={frozenFood} />
    </div>
  );
}
