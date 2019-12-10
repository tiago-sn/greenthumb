import React from 'react';

import { StyledLabel } from './style';

interface IRadioButtonProps {
  name: string;
  id: string;
  value: string;
  img: {
    src: string;
    alt: string;
  }
  handleChange: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined
}

const RadioButton: React.FC<IRadioButtonProps> = ({
  name, id, value, img, handleChange, children
}) => {
  return (
    <StyledLabel htmlFor={id}>
      <img src={img.src} alt={img.alt}/>
      <input
        type="radio"
        name={name}
        id={id}
        value={value}
        onChange={handleChange}
      />
      <span>{children}</span>
    </StyledLabel>
  )
}

export default RadioButton;