import styled from '@emotion/styled';

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
