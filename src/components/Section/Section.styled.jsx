import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  :not(:last-child) {
    margin-top: 150px;
  }
`;