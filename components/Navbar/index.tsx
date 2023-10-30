import React from 'react';
import Styles from "../../styles/navbar.module.css";
import Notification from "../../assets/notification.svg";
import Settings from "../../assets/setting-2.svg";
import Image from 'next/image';
import Avatar from "../../assets/Ellipse 1.svg";
import UpArrow from "../../assets/Frame (5).svg";
import * as Styled from "./styled";
interface NavbarProps {

}

export default function Navbar({ }: NavbarProps) {
    return (
        <Styled.NavbarRoot>
            <Styled.NavbarTitle>
                <Styled.NavbarHeading>
                    Welcome, Stacia!
                </Styled.NavbarHeading>
                <Styled.NavbarSubheading>
                    Today is sports day
                </Styled.NavbarSubheading>
            </Styled.NavbarTitle>
            <Styled.NavbarTrailingPart>
                <Styled.NavbarNotification>
                    <Styled.NavbarNotificationInner>
                        <Image src={Notification} height={24} width={24} alt={""}></Image>
                    </Styled.NavbarNotificationInner>
                </Styled.NavbarNotification>
                <Styled.NavbarSettings>
                    <Styled.NavbarNotificationInner>
                        <Image src={Settings} height={24} width={24} alt={""}></Image>
                    </Styled.NavbarNotificationInner>
                </Styled.NavbarSettings>
                <Styled.NavbarWrapper>
                    <Styled.NavbarBorder>
                    </Styled.NavbarBorder>
                </Styled.NavbarWrapper>
                <Styled.NavbarAvatar>
                    <div>
                        <Image src={Avatar} height={48} width={48} alt={''}></Image>
                    </div>
                    <Styled.UserWrapper>
                        <Styled.UserHeading>
                            Terry Stacia
                        </Styled.UserHeading>
                        <Styled.UserSubheading>
                            MU Bwoey
                        </Styled.UserSubheading>
                    </Styled.UserWrapper>
                    <Styled.NavbarAvatarTrailing>
                        <Image src={UpArrow} height={24} width={24} alt={''}></Image>
                    </Styled.NavbarAvatarTrailing>
                </Styled.NavbarAvatar>
            </Styled.NavbarTrailingPart>
        </Styled.NavbarRoot>
    )
}
