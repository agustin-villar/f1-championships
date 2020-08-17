import PropTypes from 'prop-types';

export default function Logo({ color }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 300 75" overflow="visible">
      <polygon fill={`${color}`} points="300,0 254.5,0 179.8,75 225.4,75 " />
      <path
        fill={`${color}`}
        d="M100,64.1L89.2,75H49l29.5-29.7c12.1-12,25.6-13,35.2-13h100.3L188,58.4l-72.4-0.1C115.6,58.3,105.4,58.8,100,64.1z"
      />
      <path
        fill={`${color}`}
        d="M104.5,28.6L219,28.7L247.5,0H104.1c-8.8,0-31.9,2.6-48.7,19.3L0,75h42.1l33.7-33.9C85.3,30.8,99.5,28.6,104.5,28.6z"
      />
    </svg>
  );
}

Logo.defaultProps = {
  color: '#E30613',
};

Logo.propTypes = {
  color: PropTypes.string,
};
