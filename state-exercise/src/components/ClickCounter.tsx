type CountProps = {
  onCount: () => void;
};

const ClickCounter = ({ onCount }: CountProps) => {
  return (
    <button type="button" onClick={onCount}>
      Click Counter
    </button>
  );
};

export default ClickCounter;
