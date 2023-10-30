import styled from 'styled-components';

export const NavbarRoot = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 70vw;
`;

export const NavbarTitle = styled.div`
  /* margin: 0 455px 0 0; */
`;

export const NavbarHeading = styled.div`
  font-size: 28px;
  font-family: Gilroy;
  color: #FFFFFF;
  font-weight: 600;
`;

export const NavbarSubheading = styled.div`
  font-size: 16px;
  font-family: Gilroy;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.60);
`;

export const NavbarNotification = styled.div`
  border-radius: 50%;
  border: 1px solid #252525;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10px;
`;

export const NavbarNotificationInner = styled.div``;

export const NavbarSettings = styled.div`
  border-radius: 50%;
  border: 1px solid #252525;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10px;
  margin: 0 0 0 16px;
`;

export const NavbarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const NavbarBorder = styled.div`
  border: 1px solid #252525;
  margin: 0 24px;
  height: 32px;
`;

export const NavbarAvatar = styled.div`
  display: flex;
  flex-direction: row;
`;

export const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 0 0 16px;
  line-height: 25px;
`;

export const UserHeading = styled.div`
  color: #FFFFFF;
  font-family: Gilroy;
  font-size: 16px;
  font-weight: 400;
`;

export const UserSubheading = styled.div`
  color: rgba(255, 255, 255, 0.60);
  font-family: Gilroy;
  font-size: 13px;
  font-weight: 400;
  margin: 0 0 4px 0;
`;

export const NavbarAvatarTrailing = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 0 0 32px;
  cursor: pointer;
`;

export const NavbarTrailingPart = styled.div`
  display: flex;
  flex-direction: row;
`;
