import styled from 'styled-components';

export const DropdownMenuRoot = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DropdownMenuTitle = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 127px 0 0;
`;

export const DropdownMenuInnerTitle = styled.div`
  color: #FFFFFF;
  font-family: Gilroy;
  font-size: 16px;
  font-weight: 600;
  font-style: normal;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 0 0 8px;
  font-weight: ${props => props?.isActive ? "600" : "400"};
`;

export const DropdownMenuInner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 12px 16px;
  border-radius: 8px;
  cursor: pointer;
  background-color: ${props => props?.isActive ? "#62208D" : "transparent"};
`;

export const DropdownMenuTrailing = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const DropdownMenuList = styled.div`
  display: flex;
  flex-direction: row;
  padding: 12px 16px;
`;

export const DropdownMenuListTitle = styled.div`
  font-family: Gilroy;
  font-weight: 500;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 8px;
`;

export const DropdownMenuListStyle = styled.div`
  border-left: 2px solid #232323;
  margin: 12px 0 12px 27px;
`;






