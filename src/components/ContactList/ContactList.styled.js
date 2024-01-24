import styled from '@emotion/styled';

export const ContactContainer = styled.div`
  background-color: rgba(242, 246, 247, 0.5);
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 20px;
  margin-bottom: 20px;
`;

export const MyContacts = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const ContactItem = styled.li`
  border: 1px solid #ccc;
  font-size: 18px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
`;

export const ContactText = styled.p`
  text-transform: capitalize;
  padding-right: 40px;
`;

export const DelContactBtn = styled.button`
  padding-left: 10px;
  padding-right: 10px;
`;
