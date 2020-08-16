import DIV from './Select.styles';

export default function Select({ label, options, onChange }) {
  return (
    <DIV>
      <label htmlFor={label}>{label}</label>
      <select
        className="select"
        name={label}
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
    </DIV>
  );
}
