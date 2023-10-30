import React from 'react';
import Image from 'next/image';
import { Pill } from "../Card/index";
import Styles from "../../styles/livecard.module.css";
import * as Styled from "./styled";
interface LiveCardProps {
    Team1Name: string;
    Team1logo: string;
    Team2Name: string;
    Team2logo: string;
}
export default function LiveCard({ Team1Name, Team1logo, Team2Name, Team2logo }: LiveCardProps) {
    return (
        <Styled.LiveCardRoot>
            <Styled.LiveCardHeading>
                Live Matches
            </Styled.LiveCardHeading>
            <Styled.LiveCardSubHeading>
                Description about this match
            </Styled.LiveCardSubHeading>
            <Styled.LiveCardMatch>
                <Styled.LiveCardMatchWrapper>
                    <Image src={Team1logo} height={76} width={76} alt=""></Image>
                    <Styled.LiveCardMatchTitle>
                        {Team1Name}
                    </Styled.LiveCardMatchTitle>
                </Styled.LiveCardMatchWrapper>
                <div>
                    <Pill number1='4' number2='2'></Pill>
                </div>
                <Styled.LiveCardMatchWrapper>
                    <Image src={Team2logo} height={76} width={76} alt=""></Image>
                    <Styled.LiveCardMatchTitle>
                        {Team2Name}
                    </Styled.LiveCardMatchTitle>
                </Styled.LiveCardMatchWrapper>
            </Styled.LiveCardMatch>
            <Styled.LiveCardLowerButton>
                Match Detail
            </Styled.LiveCardLowerButton>
        </Styled.LiveCardRoot>
    )
}
