export default function Select({ label, options, onChange }) {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <select
        className="select"
        name={label}
        onChange={e => {
          const { target: { value } } = e;
          onChange(value);
        }}
      >
        <option value="no-fetch">Make your selection</option>
        {options.map(({ text, value }) => (
          <option key={`${label}-${value}`} value={value}>{text}</option>
        ))}
      </select>
    </div>
  );
}