import React from 'react';
import Image from 'next/image';
import { Pill } from "../Card/index";
import Styles from "../../styles/livecard.module.css";
interface LiveCardProps {
    Team1Name: string;
    Team1logo: string;
    Team2Name: string;
    Team2logo: string;
}
export default function LiveCard({ Team1Name, Team1logo, Team2Name, Team2logo }: LiveCardProps) {
    return (
        <div className={Styles.liveCardRoot}>
            <div className={Styles.liveCardHeading}>
                Live Matches
            </div>
            <div className={Styles.liveCardSubHeading}>
                Description about this match
            </div>
            <div className={Styles.liveCardMatch}>
                <div className={Styles.liveCardMatchWrapper}>
                    <Image src={Team1logo} height={76} width={76} alt=""></Image>
                    <div className={Styles.liveCardMatchTitle}>
                        {Team1Name}
                    </div>
                </div>
                <div>
                    <Pill number1='4' number2='2'></Pill>
                </div>
                <div className={Styles.liveCardMatchWrapper}>
                    <Image src={Team2logo} height={76} width={76} alt=""></Image>
                    <div className={Styles.liveCardMatchTitle}>
                        {Team2Name}
                    </div>
                </div>
            </div>
            <div className={Styles.liveCardLowerButton}>
            Match Detail
            </div>
        </div>
    )
}
