import styled from 'styled-components';

export const LiveCardRoot = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #161616;
  padding: 24px;
  border-radius: 16px;
`;

export const LiveCardMatch = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const LiveCardHeading = styled.div`
  font-family: Gilroy;
  font-weight: 500;
  font-size: 20px;
  margin: 0 0 4px 0;
`;

export const LiveCardSubHeading = styled.div`
  font-family: Gilroy;
  color: rgba(255, 255, 255, 0.60);
  margin: 0 0 32px 0;
`;

export const LiveCardLowerButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: #62208D;
  padding: 12px 0;
  font-family: Gilroy;
  font-weight:500;
`;

export const LiveCardMatchTitle = styled.div`
  font-family: Gilroy;
  margin: 0 0 32px 0;
  font-size: 16px;
  font-weight: 500;
`;

export const LiveCardMatchWrapper = styled.div`
  margin: 0 23px;
`;