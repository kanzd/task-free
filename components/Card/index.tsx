import React, { MouseEventHandler, useContext, useEffect, useState } from 'react';
import Styles from "../../styles/card.module.css";
import Tournament1 from "../../assets/Ellipse 4.svg";
import Tournament2 from "../../assets/Ellipse 2.svg";
import Image from 'next/image';
import UpArrow from "../../assets/Frame (5).svg";
import DownArrow from '../../assets/Frame (4) copy 2.svg';
import Dot from "../../assets/Ellipse 6.svg";
import Star from "../../assets/star.svg";
import Grid9 from "../../assets/grid-9.svg";
import statusUp from '../../assets/status-up.svg';
import innerStar from "../../assets/star-svgrepo-com.svg";
import Barca from "../../assets/Ellipse 5.svg";
import RealM from "../../assets/Ellipse 5 (1).svg";
import { RootContext } from '@/pages/home';
import * as Styled from "./styled";
interface CardProps {
    onGraphClick: any;
    Card1: React.ReactElement | React.ReactElement[],
    Card2: React.ReactElement | React.ReactElement[],
};
interface CardDetailProps {
    logo: string;
    title: string;
    subtitle: string;
    matchNumber: string;
    tralingIcon: string;
    onTralingClick: MouseEventHandler<HTMLDivElement>;
};
interface MatchListTile {
    time: string;
    timeColor: string;
    team1: string;
    team2: string;
    team1logo: string;
    team2logo: string;
    team1Score: string;
    team2Score: string;
    border: boolean;
    onGraphClick: any;
    index: number;
}
interface PillProps {
    number1: string;
    number2: string;
}
export function MatchDetail({ logo, title, subtitle, matchNumber, tralingIcon, onTralingClick }: CardDetailProps) {
    return (
        <Styled.MatchDetailRoot onClick={onTralingClick}>
            <Styled.MatchDetailLeadingElement>
                <div>
                    <Image src={logo} height={42} width={42} alt={''}></Image>
                </div>
                <Styled.MatchDetailText>
                    <Styled.MatchDetailHeading>
                        {title}
                    </Styled.MatchDetailHeading>
                    <Styled.MatchDetailSubText>
                        <Styled.MatchDetailSubTitle side={"right"}>
                            {subtitle}
                        </Styled.MatchDetailSubTitle>
                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                            <Image src={Dot} height={4} width={4} alt=''></Image>
                        </div>
                        <Styled.MatchDetailSubTitle side={"left"}>
                            {matchNumber}
                        </Styled.MatchDetailSubTitle>
                    </Styled.MatchDetailSubText>
                </Styled.MatchDetailText>
            </Styled.MatchDetailLeadingElement>
            <div style={{ cursor: "pointer" }}>
                <Image src={tralingIcon} height={20} width={20} alt={''}></Image>
            </div>
        </Styled.MatchDetailRoot>
    );
}
export function MatchListTile({ time, team1, team2, team1logo, team2logo, team1Score, team2Score, timeColor, border, onGraphClick, index }: MatchListTile) {
    const [fav, setFav] = useState(false);
    const { currentOption, setCurrentOption } = useContext(RootContext);
    return (
        <Styled.ListTileWrapper>
            <Styled.ListTileRoot border>
                <Styled.ListTileStar onClick={() => {
                    window?.localStorage?.setItem(currentOption + index.toString(), (window?.localStorage?.getItem(currentOption + index.toString()) === "true" ? "false" : "true"));
                    setFav(!fav);
                }}>
                    <Image src={(typeof window !== "undefined" && window?.localStorage?.getItem(currentOption + index.toString()) === "true") ? innerStar : Star} height={18} width={18} alt={''}></Image>
                </Styled.ListTileStar>
                <Styled.ListTileTime color={timeColor}>
                    {time}
                </Styled.ListTileTime>
                <Styled.ListTileTeam>
                    <div>
                        <Image src={team1logo} height={28} width={28} alt=''></Image>
                    </div>
                    <Styled.ListTileTeamText>
                        {team1}
                    </Styled.ListTileTeamText>
                </Styled.ListTileTeam>
                <Styled.ListTilePill>
                    <Pill number1={team1Score} number2={team2Score}></Pill>
                </Styled.ListTilePill>
                <Styled.ListTileTeam>
                    <div>
                        <Image src={team2logo} height={28} width={28} alt=''></Image>
                    </div>
                    <Styled.ListTileTeamText>
                        {team2}
                    </Styled.ListTileTeamText>
                </Styled.ListTileTeam>
                <Styled.ListTileTrailing1 onClick={onGraphClick}>
                    <Image src={statusUp} height={18} width={18} alt=''></Image>
                </Styled.ListTileTrailing1>
                <div className={Styles.listTileTraling2}>
                    <Image src={Grid9} height={18} width={18} alt=''></Image>
                </div>
            </Styled.ListTileRoot>
        </Styled.ListTileWrapper>
    )
}
export function Pill({ number1, number2 }: PillProps) {
    return (
        <Styled.PillRoot>
            <Styled.PillNumber>
                {number1}
            </Styled.PillNumber>
            <div>
                :
            </div>
            <Styled.PillNumber>
                {number2}
            </Styled.PillNumber>
        </Styled.PillRoot>
    )
}
export default function Card({ onGraphClick, Card1, Card2 }: CardProps) {

    return (
        <Styled.CardRoot>
            <Styled.CardHeading>
                Today Match
            </Styled.CardHeading>
            {Card1}
            {Card2}
        </Styled.CardRoot>
    )
}
