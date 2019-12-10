import React from 'react';

interface IRadioButtonProps {
  name: string;
  id: string;
  value: string;
  handleChange: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined
}

const RadioButton: React.FC<IRadioButtonProps> = ({
  name, id, value, handleChange, children
}) => {
  return (
    <label htmlFor={id}>
      <input
        type="radio"
        name={name}
        id={id}
        value={value}
        onChange={handleChange}
      />
      <span>{children}</span>
    </label>
  )
}

export default RadioButton;