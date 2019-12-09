import React from "react";
import { Link } from "react-router-dom";

import "./style.scss";

interface IButtonProps {
  /**
   * this property holds the href to be used in the anchor tag of the <Link /> component
   * from the react-router-dom package.
   */
  to: string;
  img?: {
    src: string;
    alt: string;
  };
  className?: string;
  deactivated?: boolean;
}

/**
 * The root element of this component is an <Link> from react-router-dom package.
 * The <Link> component renders an anchor.
 * The href is passed through "to" prop.
 * This component renders a image, if it's passed the "src" and the "alt" string to it.
 * 
 * @param {IButtonProps} props
 */
const Button: React.FC<IButtonProps> = ({ to, img, className = "button", deactivated, children }) => {
  return (
    <div className={className}>
      {
        img ? 
        <img src={img.src} alt={img.alt}/> :
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
    </div>
  );
}

export default Button;
