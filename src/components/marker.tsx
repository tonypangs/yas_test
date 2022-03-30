import alertIcon from "../img/alert.png";
import ReactTooltip from "react-tooltip";

interface MarkerProps {
  id: string;
  lat: number;
  lng: number;
  text: string;
}

export const Marker = (props: MarkerProps) => {
  const hoverKey = "marker-hover-" + props.id;
  return (
    <div>
      <img
        src={alertIcon}
        alt={props.text}
        style={{ width: 50 }}
        data-tip="test"
        data-for={hoverKey}
      />
      <ReactTooltip id={hoverKey} place="bottom" effect="solid" type="light">
        <b>High risk area (HYKE does not cover)</b>
        <br />
        <span>{props.text}</span>
      </ReactTooltip>
    </div>
  );
};
