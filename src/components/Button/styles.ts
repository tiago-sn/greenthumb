import styled from 'styled-components';

interface IStyledButtonProps {
  backgroundColor?: string;
  borderColor?: string;
}

export const StyledButton = styled.div`
  background: ${ (props: IStyledButtonProps) => props.backgroundColor };
  border-radius: 28px;
  border: 1px solid ${ (props: IStyledButtonProps) => props.borderColor };
  width: 174px;
  height: 50px;
  cursor: pointer;
  display: flex;
  margin-left: auto;
  margin-right: auto;

  img {
    max-width: 22px;
    margin-left: 14px;
    align-self: center;
  }

  a {
    font-weight: 600;
    font-size: 16px;
    color: ${ (props: IStyledButtonProps) => props.borderColor };
    font-family: "Montserrat", sans-serif;
    text-decoration: none;
    margin: auto;
  }
`;
