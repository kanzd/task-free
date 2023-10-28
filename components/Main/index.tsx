import React from 'react';
import Navbar from '../Navbar';
import Banner from "../../assets/Banner.svg";
import Image from 'next/image';
import Styles from "../../styles/main.module.css";
import Card from "../Card/index";

interface MainProps{

}

export default function Main({}:MainProps) {
  return (
    <div className={Styles.mainRoot}>
        <Navbar ></Navbar>
        <div className={Styles.mainInner}>
        <div>
            <div>
                <div className={Styles.mainBanner}>
                <Image src={Banner} height={260} width={648} alt={''}></Image>
                </div>
            </div>
            <div>
                <Card isActive={false}></Card>
            </div>
        </div>
        <div>
            <div>
                
            </div>
        </div>
        </div>
       
    </div>
  )
}
