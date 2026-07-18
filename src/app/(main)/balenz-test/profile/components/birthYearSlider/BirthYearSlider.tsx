interface BirthYearSliderPropTypes {
  value: number | null;
  onChange: (birthYear: number | null) => void;
}

const BirthYearSlider = ({ value, onChange }: BirthYearSliderPropTypes) => {
  return <div>{/* TODO: 태어난 연도 선택 컴포넌트 구현 */}</div>;
};

export default BirthYearSlider;
