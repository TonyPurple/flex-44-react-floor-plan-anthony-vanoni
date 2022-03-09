import Oven from "../Appliances/Oven/Oven";
import Sink from "../Appliances/Sink/Sink";
import Fridge from "../Appliances/Fridge/Fridge";
import Freezer from "../Appliances/Freezer/Freezer";

const Kitchen = (props) => {
  return (
    <div id="kitchen">
      <Oven />
      <Sink />
      <span>Kitchen</span>
      <Fridge coldFood={props.coldFood} />
      <Freezer frozenFood={props.frozenFood} />
    </div>
  );
};

export default Kitchen;
