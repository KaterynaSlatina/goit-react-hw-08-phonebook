import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const RegisterBtn = styled.button`
  cursor: pointer;
  background: rgba(34, 113, 179, 0.5);
  border-radius: 20px;
  width: 300px;
  height: 35px;
  margin-top: 10px;
  margin-bottom: 15px;
  &:hover {
    background-color: rgba(0, 51, 153, 0.8);
    color: aliceblue;
    transition: 0.3s;
  }
`;

export const RegisterLink = styled(Link)`
  color: rgba(0, 51, 153, 0.8);
  &:hover {
    color: navy;
    transition: 0.3s;
    text-shadow: 1px 0 10px;
  }
`;
