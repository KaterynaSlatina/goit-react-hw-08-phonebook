import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const MenuList = styled.ul`
  display: flex;
  justify-content: space-around;
  border: none;
`;

export const MenuListItem = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 5px 10px;
  border-radius: 25px;
  border: 1px solid;
  margin-bottom: 20px;
  transition: 0.3s;

  &.active {
    background: rgba(34, 113, 179, 0.5);
    color: aliceblue;
    border: none;
  }
  &:hover {
    color: aliceblue;
    border: none;
    display: flex;

    color: navy;
    transition: 0.3s;
    text-shadow: 1px 0 10px;
  }
`;

export const MyHeader = styled.header`
  font-size: 20px;
  /* width: 100%; */
  border: none;
  margin-bottom: 20px;
  position: relative;

  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    bottom: 7px;
    height: 1px;
    border: 1px;
    background-color: #f6f5ef33;
  }
`;
