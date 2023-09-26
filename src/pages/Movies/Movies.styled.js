import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MoviesWrapper = styled.div`
  padding: 0 30px;
  padding-top: 20px;
  max-width: 1660px;
  margin: 0 auto;
`;

export const GetBackButton = styled(Link)`
  display: inline-block;
  background: transparent;
  color: white;
  background-color: #55786b;
  font: inherit;
  border: 0;
  outline: 0;
  padding: 0;
  transition: all 200ms ease-in;
  cursor: pointer;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  padding: 12px 36px;

  :hover {
    background: #55786b;
  }

  :active {
    background: #55786b;
    box-shadow: inset 0 0 10px 2px rgba(0, 0, 0, 0.2);
  }
`;