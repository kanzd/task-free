import React from 'react';
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
import Barca from "../../assets/Ellipse 5.svg";
import RealM from "../../assets/Ellipse 5 (1).svg";
interface CardProps {
    isActive: boolean;
};
interface CardDetailProps {
    logo: string;
    title: string;
    subtitle: string;
    matchNumber: string;
    tralingIcon: string;
};
interface MatchListTile {
    time:string;
    timeColor:string;
    team1:string;
    team2:string;
    team1logo:string;
    team2logo:string;
    team1Score:string;
    team2Score:string;
    border:boolean;
}
interface PillProps {
    number1:string;
    number2:string;
}
export function MatchDetail({ logo, title, subtitle, matchNumber, tralingIcon }: CardDetailProps) {
    return (
        <div className={Styles.matchDetailRoot}>
            <div className={Styles.matchDetaiLeadingElement}>
                <div>
                    <Image src={logo} height={42} width={42} alt={''}></Image>
                </div>
                <div className={Styles.matchDetailText}>
                    <div className={Styles.matchDetailHeading}>
                        {title}
                    </div>
                    <div className={Styles.matchDetailSubText}>
                        <div className={Styles.matchDetailSubTitle} style={{margin:"0 8px 0 0"}}>
                            {subtitle}
                        </div>
                        <div style={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
                            <Image src={Dot} height={4} width={4} alt=''></Image>
                        </div>
                        <div className={Styles.matchDetailSubTitle} style={{margin:"0 0 0 8px"}}>
                            {matchNumber}
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Image src={tralingIcon} height={20} width={20} alt={''}></Image>
            </div>
        </div>
    );
}
export function MatchListTile({time,team1,team2,team1logo,team2logo,team1Score,team2Score,timeColor,border}: MatchListTile) {
    return (
        <div className={Styles.listTileWrapper}>
        <div className={Styles.listTileRoot} style={{borderWidth:border?"1px":"0px"}}>
             <div className={Styles.listTileStar}>
                <Image src={Star} height={18} width={18} alt={''}></Image>
            </div>
            <div className={Styles.listTileTime} style={{color:timeColor}}>
                {time}
            </div>
            <div className={Styles.listTileTeam}>
                <div>
                    <Image src={team1logo} height={28} width={28} alt=''></Image>
                </div>
                <div className={Styles.listTileTeamText}>
                    {team1}
                </div>
            </div>
            <div className={Styles.listTilePill}>
                <Pill number1={team1Score} number2={team2Score}></Pill>
            </div>
            <div className={Styles.listTileTeam}>
            <div>
                    <Image src={team2logo} height={28} width={28} alt=''></Image>
                </div>
                <div className={Styles.listTileTeamText}>
                    {team2}
                </div>
            </div>
            <div className={Styles.listTileTraling1}>
            <Image src={statusUp} height={18} width={18} alt=''></Image>
            </div>
            <div className={Styles.listTileTraling2}>
                <Image src={Grid9} height={18} width={18} alt=''></Image>
            </div>
            </div>
        </div>
    )
}
export function Pill({number1,number2}:PillProps){
    return (
        <div className={Styles.pillRoot}>
           <div className={Styles.pillNumber}>
            {number1}
           </div>
           <div>
            :
           </div>
           <div className={Styles.pillNumber}>
            {number2}
           </div>
        </div>
    )
}
export default function Card({ isActive }: CardProps) {
    return (
        <div className={Styles.cardRoot}>
            <div className={Styles.cardHeading}>
                Today Match
            </div>
            <div>
                <MatchDetail logo={Tournament1} matchNumber='3 Matches' subtitle='Spanish La Liga' title='La Liga' tralingIcon={isActive ? UpArrow : DownArrow}></MatchDetail>
            </div>
            <div className={Styles.cardScoreList}>
                <MatchListTile border timeColor='#66E12C' team1='Barcelona' team1Score='2' team1logo={Barca} team2='Real Madrid' team2Score='4' team2logo={RealM} time='48'></MatchListTile>
                <MatchListTile border timeColor='#66E12C' team1='Barcelona' team1Score='2' team1logo={Barca} team2='Real Madrid' team2Score='4' team2logo={RealM} time='48'></MatchListTile>
                <MatchListTile border={false} timeColor='#66E12C' team1='Barcelona' team1Score='2' team1logo={Barca} team2='Real Madrid' team2Score='4' team2logo={RealM} time='48'></MatchListTile>
            </div>
            <div>
                <MatchDetail logo={Tournament1} matchNumber='3 Matches' subtitle='Spanish La Liga' title='La Liga' tralingIcon={isActive ? UpArrow : DownArrow}></MatchDetail>
            </div>
            <div className={Styles.cardScoreList}>
                <MatchListTile border timeColor='#66E12C' team1='Barcelona' team1Score='2' team1logo={Barca} team2='Real Madrid' team2Score='4' team2logo={RealM} time='48'></MatchListTile>
                <MatchListTile border={false} timeColor='#66E12C' team1='Barcelona' team1Score='2' team1logo={Barca} team2='Real Madrid' team2Score='4' team2logo={RealM} time='48'></MatchListTile>
            </div>
            
        </div>
    )
}
