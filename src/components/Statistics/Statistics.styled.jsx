import styled from 'styled-components';

export const StatisticsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StasticsListItem = styled.li`
  display: flex;
  justify-content: space-between;

  & span {
    margin-left: 20px;
    font-weight: bold;
  }
`;
