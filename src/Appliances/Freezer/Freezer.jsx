import "./Freezer.css";
const Freezer = (props) => {
  return (
    <>
      <div>
        Freezer
        <ul id="freezer">
          {props.frozenFood.map((foodItem, idx) => (
            <li key={idx}>{foodItem}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Freezer;
