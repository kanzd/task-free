import styled from 'styled-components';

// Card styles
export const CardRoot = styled.div`
  background-color: #161616;
  width: 648px;
  height: 100%;
  border-radius: 16px;
  padding: 0 0 25px 0;
`;

export const CardHeading = styled.div`
  font-family: Gilroy;
  font-weight: bold;
  font-size: 20px;
  padding: 33px 24px;
`;

// MatchDetail styles
export const MatchDetailRoot = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 24px;
  cursor: pointer;
`;

export const MatchDetailText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 0 0 12px;
`;

export const MatchDetailHeading = styled.div`
  color: #FFFFFF;
  font-family: Gilroy;
  font-size: 16px;
  font-weight: normal;
`;

export const MatchDetailSubText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const MatchDetailSubTitle:any = styled.div`
  color: rgba(255, 255, 255, 0.60);
  font-family: Gilroy;
  font-size: 14px;
  font-weight: 400;
  margin: ${(props:any) => props?.side==="right" ? "0 8px 0 0" : "0 0 0 8px"}
`;

export const MatchDetailLeadingElement = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ListTileRoot:any = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid #292929;
  padding: 0 0 16px 0;
  border-width:${(props:any) => props?.border ? "1px" : "0px"}
`;

export const ListTileTeam = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 61px 0 0;
`;

export const PillRoot = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 50px;
  background-color: #292929;
  padding: 2px 9px;
`;

export const PillNumber = styled.div`
  margin: 0 6px;
  font-family: Gilroy;
  font-size: 14px;
  font-weight: 500;
`;

export const ListTileTeamText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: Gilroy;
  font-size: 14px;
  font-weight: 500;
  margin: 0 0 0 4px;
`;

export const ListTileTime = styled.div`
  font-family: Gilroy;
  font-size: 14px;
  font-weight: 500;
  margin: 0 32px 0 0;
  color:${props => props?.color}
`;

export const ListTileStar = styled.div`
  margin: 0 24px 0 0;
  cursor: pointer;
`;

export const ListTilePill = styled.div`
  margin: 0 52px 0 0;
`;

export const ListTileTrailing1 = styled.div`
  margin: 0 16px 0 0;
  cursor: pointer;
`;

export const ListTileWrapper = styled.div`
  padding: 16px 16px;
`;