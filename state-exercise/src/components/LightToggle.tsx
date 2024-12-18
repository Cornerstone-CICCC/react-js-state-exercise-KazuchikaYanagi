type LightOnProps = {
  onLightOn: () => void;
};

const LightToggle = ({ onLightOn }: LightOnProps) => {
  return (
    <button type="button" onClick={onLightOn}>
      LightToggle
    </button>
  );
};

export default LightToggle;
