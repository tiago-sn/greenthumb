import React from "react";
import { Link } from "react-router-dom";

import { StyledButton } from './styles';

import leftArrowGreen from './img/left-arrow-green.svg';
import rightArrowGreen from './img/right-arrow-green.svg';
import leftArrowWhite from './img/left-arrow-white.svg';
import rightArrowWhite from './img/right-arrow-white.svg';

export interface IButtonProps {
  to: string;
  arrow?: "left arrow" | "right arrow";
  deactivated?: boolean;
  light?: boolean;
  bold?: boolean;
}

/**
 * @function [Button]
 * The root element of this component is an <Link> from react-router-dom.
 * @prop {string} to - the href to be user in the <Link>
 * @prop {"left arrow" | "right arrow"} arrow - renders an arrow icon
 * @prop {boolean} deactivated - deactivate the <a>
 * @prop {boolean} light - make the background white and the font color green
 * @prop {boolean} bold - make the text bold
 * }
 */
const Button: React.FC<IButtonProps> = ({ to, arrow, deactivated, children, light, bold = false }) => {
  const selectArrowImage = () => {
    if (arrow === "left arrow" && light) return leftArrowGreen
    if (arrow === "left arrow" && !light) return leftArrowWhite
    if (arrow === "right arrow" && light) return rightArrowGreen
    if (arrow === "right arrow" && !light) return rightArrowWhite
  }

  return (
    <StyledButton
      backgroundColor={light === true ? "#ffffff" : "#15573F"}
      borderColor={light === true ? "#15573F" : "#ffffff"}
      bold={bold}
    >
      {
        /**
         * @todo This img should be inside the <Link> below. Make this change broke the style.
         */
        arrow ? 
        <img src={ selectArrowImage() } alt={arrow}/> :
        undefined
      }

      <Link 
        /**
         * This property acepts a string or a function. 
         * @see {@link https://reacttraining.com/react-router/web/api/Link/to-string}
         * @see {@link https://reacttraining.com/react-router/web/api/Link/to-function}
         * 
         * We check the optional @prop "deactivated". 
         * If it's true we pass a function to stay in the current location.
         * If it's false we pass the @prop {string} to
         */
        to={ deactivated ? (location) => location : to }
      >
        {children}
      </Link>
    </StyledButton>
  );
}

export default Button;
