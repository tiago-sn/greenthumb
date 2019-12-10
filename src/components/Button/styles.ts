import styled from 'styled-components';

interface IStyledButtonProps {
  backgroundColor?: string;
  borderColor?: string;
  bold?: boolean;
}

export const StyledButton = styled.div`
  background: ${ (props: IStyledButtonProps) => props.backgroundColor };
  border-radius: 28px;
  border: 1px solid ${ (props: IStyledButtonProps) => props.borderColor };
  width: 174px;
  height: 50px;
  display: flex;
  margin: 15px auto;

  img {
    max-width: 22px;
    margin-left: 14px;
    align-self: center;
  }

  a {
    cursor: pointer;
    font-weight: ${props => props.bold ? 600 : 300};
    font-size: 16px;
    color: ${ (props: IStyledButtonProps) => props.borderColor };
    font-family: "Montserrat", sans-serif;
    text-decoration: none;
    margin: auto;
  }
`;
