import React from 'react';

type Props = {
  text: string;
  size?: string;
};
const Button: React.SFC<Props> = ({ text, size }) => (
  <button style={size === 'lg' ? { ...buttonLarge, ...styles } : styles}>
    {text}
  </button>
);

const styles: any = {
  margin: ".5rem 0",
  padding: '16px 36px',
  border: 'none',
  borderRadius: '7px',
  background: 'tomato',
  textTransform: 'uppercase',
  color: 'white',
  fontSize: "1em"
};

const buttonLarge: {} = {
  width: '100%',
};

export default Button;
