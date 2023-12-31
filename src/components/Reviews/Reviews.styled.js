import styled from 'styled-components';

export const ReviewsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 30px;
  max-height: 640px;
  overflow-y: scroll;
`;

export const ReviewEl = styled.li`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 5px;
  border: 1px solid transparent;
  background-color: ghostwhite;
`;

export const ReviewTitle = styled.h3`
  font-weight: 600;
`;