type Props = {
  onLottoNumbers: () => void;
};

const LottoNumbers = ({ onLottoNumbers }: Props) => {
  return (
    <button type="button" onClick={onLottoNumbers}>
      LottoNumbers
    </button>
  );
};

export default LottoNumbers;
