import React, { useContext, useMemo, useState } from 'react';
import Navbar from '../Navbar';
import Banner from "../../assets/Banner.svg";
import Image from 'next/image';
import Styles from "../../styles/main.module.css";
import Card, { MatchDetail, MatchListTile } from "../Card/index";
import Chart from "../Chart/index";
import LiveCard from "../LiveCard/index";
import Barca from "../../assets/image 11.svg";
import Mu from "../../assets/image 13.svg";
import LatestNews from "../../assets/Frame 57.svg";
import Tournament1 from "../../assets/Ellipse 4.svg";
import Tournament2 from "../../assets/Ellipse 2.svg";
import UpArrow from "../../assets/Frame (5).svg";
import DownArrow from '../../assets/Frame (4) copy 2.svg';
import RealM from "../../assets/Ellipse 5 (1).svg";
import Am from "../../assets/Ellipse 5 (1) copy.svg";
import El from "../../assets/Ellipse 3.svg";
import Liverpool from "../../assets/Ellipse 5 (3) copy.svg";
import UEFA from "../../assets/Ellipse 3 copy.svg"
import { RootContext } from '@/pages/home';
import * as Styled from "./styled";
interface MainProps {

}

export default function Main({ }: MainProps) {
    const [openChart, setOpenChart] = useState(false);
    const [isActive1, setIsActive] = useState(true);
    const [isActive2, setIsActive2] = useState(true);
    const { currentOption, setCurrentOption } = useContext(RootContext);
    const leagueMap:any = useMemo(() => ({
        livematch: {
            option1: {
                team1Name: "Barcelona",
                team2Name: "M. United",
                team1Logo: Barca,
                team2Logo: Mu
            },
            option2: {
                team1Name: "Real Madrid",
                team2Name: "Liverpool F.C",
                team1Logo: RealM,
                team2Logo: Liverpool
            }
        },
        option1: {
            card1: (<>
                <div style={{ margin: "8px 0" }}>
                    <MatchDetail onTralingClick={() => {
                        setIsActive(!isActive1)
                    }} logo={Tournament1} matchNumber='3 Matches' subtitle='Spanish La Liga' title='La Liga' tralingIcon={isActive1 ? DownArrow : UpArrow}></MatchDetail>
                </div>
                {isActive1 && <div className={Styles.cardScoreList}>
                    <MatchListTile index={1} onGraphClick={() => {
                        setOpenChart(true);
                    }} border timeColor='#66E12C' team1='Barcelona' team1Score='2' team1logo={Barca} team2='Real Madrid' team2Score='4' team2logo={RealM} time={`48'`}></MatchListTile>
                    <MatchListTile index={2} onGraphClick={() => {
                        setOpenChart(true);
                    }} border timeColor='#E72641' team1='Barcelona' team1Score='4' team1logo={Barca} team2='Real Madrid' team2Score='1' team2logo={RealM} time={`58'`}></MatchListTile>
                    <MatchListTile index={3} onGraphClick={() => {
                        setOpenChart(true);
                    }} border={false} timeColor='#66E12C' team1='Barcelona' team1Score='6' team1logo={Barca} team2='Real Madrid' team2Score='4' team2logo={RealM} time={`48'`}></MatchListTile>
                </div>}
            </>),
            card2: (<>
                <div style={{ margin: "8px 0" }}>
                    <MatchDetail onTralingClick={() => {
                        setIsActive2(!isActive2)
                    }} logo={Tournament2} matchNumber='2 Matches' subtitle='Spanish La Liga' title='Premiere League' tralingIcon={isActive2 ? DownArrow : UpArrow}></MatchDetail>
                </div>
                {isActive2 && <div className={Styles.cardScoreList}>
                    <MatchListTile index={4} onGraphClick={() => {
                        setOpenChart(true);
                    }} border timeColor='#66E12C' team1='Barcelona' team1Score='1' team1logo={Barca} team2='Real Madrid' team2Score='4' team2logo={RealM} time={`48'`}></MatchListTile>
                    <MatchListTile index={5} onGraphClick={() => {
                        setOpenChart(true);
                    }} border={false} timeColor='#E72641' team1='Barcelona' team1Score='3' team1logo={Barca} team2='Real Madrid' team2Score='1' team2logo={RealM} time={`59'`}></MatchListTile>
                </div>}
            </>)
        },
        option2: {
            card1: (<>
                <div style={{ margin: "8px 0" }}>
                    <MatchDetail onTralingClick={() => {
                        setIsActive(!isActive1)
                    }} logo={El} matchNumber='3 Matches' subtitle='Bundesliga' title='Bundesliga' tralingIcon={isActive1 ? DownArrow : UpArrow}></MatchDetail>
                </div>
                {isActive1 && <div className={Styles.cardScoreList}>
                    <MatchListTile index={1} onGraphClick={() => {
                        setOpenChart(true);
                    }} border timeColor='#66E12C' team1='Atletico Madrid' team1Score='5' team1logo={Am} team2='Liverpool F.C' team2Score='1' team2logo={Liverpool} time={`48'`}></MatchListTile>
                    <MatchListTile index={2} onGraphClick={() => {
                        setOpenChart(true);
                    }} border timeColor='#E72641' team1='Atletico Madrid' team1Score='3' team1logo={Am} team2='Liverpool F.C' team2Score='4' team2logo={Liverpool} time={`58'`}></MatchListTile>
                    <MatchListTile index={3} onGraphClick={() => {
                        setOpenChart(true);
                    }} border={false} timeColor='#66E12C' team1='Atletico Madrid' team1Score='1' team1logo={Am} team2='Liverpool F.C' team2Score='2' team2logo={Liverpool} time={`48'`}></MatchListTile>
                </div>}
            </>),
            card2: (<>
                <div style={{ margin: "8px 0" }}>
                    <MatchDetail onTralingClick={() => {
                        setIsActive2(!isActive2)
                    }} logo={Tournament2} matchNumber='2 Matches' subtitle='Eredevise' title='Eredevise' tralingIcon={isActive2 ? DownArrow : UpArrow}></MatchDetail>
                </div>
                {isActive2 && <div className={Styles.cardScoreList}>
                    <MatchListTile index={4} onGraphClick={() => {
                        setOpenChart(true);
                    }} border timeColor='#66E12C' team1='Atletico Madrid' team1Score='3' team1logo={Am} team2='Liverpool F.C' team2Score='4' team2logo={Liverpool} time={`48'`}></MatchListTile>
                    <MatchListTile index={5} onGraphClick={() => {
                        setOpenChart(true);
                    }} border={false} timeColor='#E72641' team1='Atletico Madrid' team1Score='6' team1logo={Am} team2='Liverpool F.C' team2Score='4' team2logo={Liverpool} time={`59'`}></MatchListTile>
                </div>}
            </>)
        }
    }), [isActive1, isActive2]);
    return (
        <Styled.MainRoot>
            {openChart && (<Styled.Popup>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", margin: "10px 0", }}>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", backgroundColor: "rgb(98, 32, 141)", fontFamily: "Gilroy", width: "30%", borderRadius: "16px", fontSize: "16px", cursor: "pointer", height: "50px" }} onClick={() => {
                        setOpenChart(false);
                    }}>Close</div>
                </div>
                <Chart></Chart>

            </Styled.Popup>)}
            <Navbar ></Navbar>
            <Styled.MainInner>
                <div>
                    <div>
                        <Styled.MainBanner>
                            <Image src={Banner} height={260} width={648} alt={''}></Image>
                        </Styled.MainBanner>
                    </div>
                    <div>
                        <Card Card2={leagueMap[currentOption].card2} Card1={leagueMap[currentOption].card1} onGraphClick={() => {
                            setOpenChart(true);
                        }} >

                        </Card>
                    </div>
                </div>
                <Styled.MainInner2>
                    <div>
                        <LiveCard Team1logo={leagueMap.livematch[currentOption].team1Logo} Team1Name={leagueMap.livematch[currentOption].team1Name} Team2Name={leagueMap.livematch[currentOption].team2Name} Team2logo={leagueMap.livematch[currentOption].team2Logo}></LiveCard>
                    </div>
                    <div>
                        <Styled.NewsPanel>
                            <Image src={LatestNews} height={460} width={360} alt=''></Image>

                        </Styled.NewsPanel>
                    </div>
                </Styled.MainInner2>
            </Styled.MainInner>
        </Styled.MainRoot>
    )
}
