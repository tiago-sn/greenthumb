import React from "react";
import { Link } from "react-router-dom";

import { StyledButton } from './styles';

import leftArrowGreen from './img/left-arrow-green.svg';
import rightArrowGreen from './img/right-arrow-green.svg';
import leftArrowWhite from './img/left-arrow-white.svg';
import rightArrowWhite from './img/right-arrow-white.svg';


export interface IButtonProps {
  /**
   * this property holds the href to be used in the anchor tag of the <Link /> component
   * from the react-router-dom package.
   */
  to: string;
  arrow?: "left arrow" | "right arrow";
  deactivated?: boolean;
  light?: boolean;
}

/**
 * The root element of this component is an <Link> from react-router-dom package.
 * The <Link> component renders an anchor.
 * The href is passed through "to" prop.
 * This component renders a image, if it's passed the "src" and the "alt" string to it.
 * 
 * @param {IButtonProps} props
 */
const Button: React.FC<IButtonProps> = ({ to, arrow, deactivated, children, light }) => {
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
    >
      {
        arrow ? 
        <img 
          src={
            selectArrowImage()
          } 
          alt={arrow}
        /> :
        undefined
      }

      <Link 
      /**
       * This property acepts a string of a function. See the docs below to undertend
       * the diference:
       * https://reacttraining.com/react-router/web/api/Link/to-string
       * https://reacttraining.com/react-router/web/api/Link/to-function
       * 
       * Here we check if the prop "activated" optionaly passed by the parant component.
       * If it's true we pass the "to" property also passed by the parent component.
       * If it's false we pass the "current location", i. e. when the user click this link
       * he stays in the current location.
       */
      to={
        deactivated ? (location) => location : to
      }>
        {children}
      </Link>
    </StyledButton>
  );
}

export default Button;
