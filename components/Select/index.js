import PropTypes from 'prop-types';

import Wrapper from './styles';

export default function Select({ label, name, options, onChange }) {
  const selectNode = React.useRef(null);

  // If the html component still holds the value from previous visits
  // it will execute the onChange callback based on that value.
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
          <option key={`${value}`} value={value}>{text}</option>
        ))}
      </select>
    </Wrapper>
  );
}

Select.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onChange: PropTypes.func.isRequired,
};
