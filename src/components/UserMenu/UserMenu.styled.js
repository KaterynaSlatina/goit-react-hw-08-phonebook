import styled from '@emotion/styled';

export const WelcomeUser = styled.p`
  text-align: center;
`;

export const LogOutBtn = styled.button``;

export const UserHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
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
