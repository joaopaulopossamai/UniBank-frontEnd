import React, { useState } from 'react';
import PropTypes from 'prop-types';

const sizes = {
  lg: {
    height: '3rem',
    fontSize: '1.5rem',
  },
  md: {
    height: '2.5rem',
    fontSize: '1rem',
  },
  sm: {
    height: '2rem',
    fontSize: '.75rem',
  },
  ref: {
    height: '2rem',
    fontSize: '1rem',
  },
};

function PrimaryButton(props) {
  const { text, width, background, fontSize, onClick, color, alt, title, border, borderRadius } = props;

  const sizeStyles = sizes[fontSize] || {};
  const [hoverede, setHoverede] = useState(false);

  const buttonStyle = {
    background: background || ' linear-gradient(85.42deg, #FD8246 40%, #FFE4D7 150%)',
    backgroundSize: '100% 100%',
    backgroundPosition: '0 0',
    backgroundRepeat: 'no-repeat',
    color: color || '#FFFFFF',
    fontWeight: '500',
    cursor: 'pointer',
    border: border || '1px solid #E95810',
    textDecoration: 'none',
    transition: '0.28s ease',
    padding: '0px',
    borderRadius: borderRadius || '5px',
    width: width || '150px',
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    outline: 'none',
    fontFamily: '"Poppins", Sans-serif',
    height: sizeStyles.height || '48px',
    fontSize: sizeStyles.fontSize || '20px',
    '&.MuiDisabled': {
      background: '#ddd',
    },
  };

  return (
    <button
      className='button'
      style={{
        ...buttonStyle,
        backgroundSize: '100% 100%',
        backgroundPosition: '0 0',
        backgroundRepeat: 'no-repeat',
        color: hoverede ? '#FFF' : buttonStyle.color,
      }}
      onClick={onClick}
      alt={alt}
      title={title}
    >
      {text}
    </button>
  );
}

PrimaryButton.propTypes = {
  text: PropTypes.string.isRequired,
  background: PropTypes.string,
  width: PropTypes.string,
  borderRadius: PropTypes.string,
  border: PropTypes.string,
  color: PropTypes.string,
  hoverede: PropTypes.string,
  fontSize: PropTypes.oneOf(['lg', 'md', 'sm', 'ref']),
  onClick: PropTypes.func,
};

export default PrimaryButton;
