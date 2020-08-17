import Wrapper from './Select.styles';

export default function Select({ label, name, options, onChange }) {
  const selectNode = React.useRef(null);

  React.useEffect(() => {
    onChange(selectNode.current.value);
  }, []);

  return (
    <Wrapper>
      <label htmlFor={name}>{label}</label>
      <select
        ref={selectNode}
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
