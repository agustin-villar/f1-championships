import Wrapper from './Select.styles';

export default function Select({ label, name, options, onChange }) {
  return (
    <Wrapper>
      <label htmlFor={name}>{label}</label>
      <select
        className="select"
        name={name}
        onChange={e => {
          const { target: { value } } = e;
          onChange(value);
        }}
      >
        <option value="">Make your selection</option>
        {options.map(({ text, value }) => (
          <option key={`${label}-${value}`} value={value}>{text}</option>
        ))}
      </select>
    </Wrapper>
  );
}
