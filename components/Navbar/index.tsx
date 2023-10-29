import React from 'react';
import Styles from "../../styles/navbar.module.css";
import Notification from "../../assets/notification.svg";
import Settings from "../../assets/setting-2.svg";
import Image from 'next/image';
import Avatar from "../../assets/Ellipse 1.svg";
import UpArrow from "../../assets/Frame (5).svg";
interface NavbarProps{

}

export default function Navbar({}:NavbarProps) {
  return (
    <div className={Styles.navbarRoot}>
        <div className={Styles.navbarTitle}>
            <div className={Styles.navbarHeading}>
                Welcome, Stacia!
            </div>
            <div className={Styles.navbarSubheading}>
            Today is sports day
            </div>
        </div>
        <div className={Styles.navbarTralingPart}>
        <div className={Styles.navbarNotification}>
            <div className={Styles.navbarNotificationInner}>
                <Image src={Notification} height={24} width={24} alt={""}></Image>
            </div>
        </div>
        <div className={Styles.navbarSettings}>
            <div className={Styles.navbarNotificationInner}>
                <Image src={Settings} height={24} width={24} alt={""}></Image>
            </div>
        </div>
        <div className={Styles.navbarWrapper}>
        <div className={Styles.navbarBorder}>

        </div>
        </div>
        <div className={Styles.navbarAvatar}>
            <div>
                <Image src={Avatar} height={48} width={48} alt={''}></Image>
            </div>
            <div className={Styles.userWrapper}>
                <div className={Styles.userHeading}>
                Terry Stacia
                </div>
                <div className={Styles.userSubheading}>
                MU Bwoey
                </div>
            </div>
            <div className={Styles.navbarAvatarTraling}>
                <Image src={UpArrow} height={24} width={24} alt={''}></Image>
            </div>
        </div>
        </div>
    </div>
  )
}
