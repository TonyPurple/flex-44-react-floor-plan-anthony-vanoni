import Kitchen from "./Rooms/Kitchen";
import LivingRoom from "./Rooms/LivingRoom";
import Bedroom from "./Rooms/Bedroom";
import Bath from "./Rooms/Bath";

const FloorPlan = (props) => {
  return (
    <div id="floorplan">
      <LivingRoom />
      <Bedroom bedNum={3} />
      <Bath size="Half" />
      <Kitchen coldFood={props.coldFood} frozenFood={props.frozenFood} />
      <Bedroom bedNum={1} />
      <Bath size="Master" />
      <Bedroom bedNum={2} />
      <Bath size="Full" />
    </div>
  );
};

export default FloorPlan;
