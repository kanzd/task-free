import styled from 'styled-components';

export const MainRoot = styled.div`
  margin: 34px 40px;
`;

export const MainBanner = styled.div`
  margin: 34px 0;
  cursor: pointer;
`;

export const MainInner = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Popup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: #1e1e1e;
  /* opacity: 0.8; */
  z-index: 1000000;
`;

export const MainInner2 = styled.div`
  margin: 32px 64px;
`;

export const NewsPanel = styled.div`
  background-color: #161616;
  border-radius: 16px;
  margin: 32px 0;
  padding: 24px 8px;
`;

export const CardScoreList = styled.div`
  border-radius: 8px;
  border: 1px solid #292929;
  background-color: #161616;
  margin: 16px 24px;
`;
