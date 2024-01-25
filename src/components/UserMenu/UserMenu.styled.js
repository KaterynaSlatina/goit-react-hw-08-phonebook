import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const WelcomeUser = styled.p`
  text-align: center;
  color: rgba(1, 1, 122, 0.8);
`;

export const LogOutBtn = styled.button`
  padding-left: 10px;
  padding-right: 10px;
`;

export const UserHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  margin-bottom: 20px;
  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 90%;
    bottom: 7px;
    height: 1px;
    border: 1px;
    background-color: #f6f5ef33;
  }
`;

export const ContactsPath = styled(NavLink)`
  font-size: 18px;
  color: navy;
  background: rgba(34, 113, 179, 0.5);
  border-radius: 20px;
  border: none;
  height: 35px;
  cursor: pointer;
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  align-items: center;
  &.active {
    background-color: rgba(0, 51, 153, 0.8);
    color: aliceblue;
    border: none;
  }
  &:hover {
    background-color: rgba(0, 51, 153, 0.8);
    color: aliceblue;
    transition: 0.3s;
  }
`;
