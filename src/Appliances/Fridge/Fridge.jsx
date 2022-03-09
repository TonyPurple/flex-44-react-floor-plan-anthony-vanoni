import "./Fridge.css";
const Fridge = (props) => {
  return (
    <>
      <div>
        Fridge
        <ul id="fridge">
          {props.coldFood.map((foodItem, idx) => (
            <li key={idx}>{foodItem}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Fridge;
