import styled from 'styled-components';

export const FeedbackList = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

export const FeedbackButton = styled.button`
  padding: 5px;
  font-size: 16px;
  border-radius: 10%;
  border-style: none;
  cursor: pointer;
  color: aqua;
  font-weight: bold;
  background-color: #044152ab;

  :hover {
    /* background-color: #0e1df0; */
    color: ${p => p.hoverColor};
    box-shadow: 0px 0px 4px 3px ${p => p.hoverColor};
  }
`;
