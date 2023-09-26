import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderStyled = styled.header`
  position: fixed;
  z-index: 1;
  width: 100vw;
  padding: 30px 30px;
  background-color: #f5f6fa;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
`;

export const HeaderContainer = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  max-width: 1660px;
`;

export const HomeLink = styled(Link)`
  display: flex;
  font-weight: 500;
  font-size: 24px;
  color: #77a695;
  text-decoration: none;
  ::after {
    content: '';
    display: block;
    margin-left: 8px;
    width: 0;
    height: 0;
    border-top: 12px solid transparent;
    border-left: 21px solid #b4d9cc;
    border-bottom: 12px solid transparent;
  }
`;

export const SearchLink = styled(Link)`
  display: block;
  font-weight: 500;
  font-size: 24px;
  color: #b4d9cc;
  text-decoration: none;
  font: inherit;
  border: 0;
  transition: all 200ms ease-in;
  cursor: pointer;
  padding: 12px 36px;

  :hover {
    color: #77a695;
  }

  :active {
    color: #77a695;
  }
`;

export const HeightHeader = styled.div`
  height: 100px;
`;