import React, { useState,useContext } from 'react';
import Styles from "../../styles/sidemenu.module.css";
import Logo from "../../assets/Frame (1).svg";
import DropdownMenu, { DropdownMenuList } from '../DropdownMenu';
import Football from "../../assets/Frame (4).svg"
import Image from 'next/image';
import Team1 from '../../assets/Ellipse 4.svg';
import Team2 from "../../assets/Ellipse 3 copy.svg";
import Team3 from "../../assets/Ellipse 4 copy.svg";
import Team4 from "../../assets/Ellipse 3.svg";
import { RootContext } from "../../pages/home";
interface SideMenuProps {
    title: string
}

export default function Sidemenu({ title }: SideMenuProps) {
    const [isActiveState, setIsActiveState] = useState([true, false, false, false]);
    const {currentOption,setCurrentOption} = useContext(RootContext);
    return (
        <div className={Styles.sidemenuRoot}>
            <div className={Styles.sidemenuTitle}>
                <Image src={Logo} height={30} width={30} alt={''}></Image>
                <div className={Styles.sidemenuTitleText}>
                    {title}
                </div>
            </div>
            <div className={Styles.dropdownSection}>
                <div className={Styles.sidemenuDropdownTitle}>
                    Sports
                </div>
                <DropdownMenu onClick={() => {
                    setCurrentOption("option1")
                    const temp = [...isActiveState];
                    temp[0] = !temp[0];
                    temp[1]=false;
                    temp[2]=false;
                    temp[3]=false;
                    setIsActiveState(temp);
                }} isActive={isActiveState[0]} leadingIcon={Football} title={"Football"}>
                    <DropdownMenuList leadingIcon={Team1} title='La Liga'></DropdownMenuList>
                    <DropdownMenuList leadingIcon={Team3} title='Bundesliga'></DropdownMenuList>
                    <DropdownMenuList leadingIcon={Team2} title="UEFA Champions"></DropdownMenuList>
                    <DropdownMenuList leadingIcon={Team4} title='Eredevise'></DropdownMenuList>
                </DropdownMenu>
                <DropdownMenu onClick={() => {
                    setCurrentOption("option2")
                    const temp = [...isActiveState];
                    temp[1] = !temp[1];
                    temp[0]=false;
                    temp[2]=false;
                    temp[3]=false;
                    setIsActiveState(temp);
                }} isActive={isActiveState[1]} leadingIcon={Football} title={"Football"}>
                    <DropdownMenuList leadingIcon={Team1} title='La Liga'></DropdownMenuList>
                    <DropdownMenuList leadingIcon={Team3} title='Bundesliga'></DropdownMenuList>
                    <DropdownMenuList leadingIcon={Team2} title="UEFA Champions"></DropdownMenuList>
                    <DropdownMenuList leadingIcon={Team4} title='Eredevise'></DropdownMenuList>
                </DropdownMenu>
                
            </div>
        </div>
    )
}
